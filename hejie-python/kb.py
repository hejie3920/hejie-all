from datetime import datetime
import sys
from kubernetes import client, config

# 检查命令行参数数量
if len(sys.argv) < 1:
    print("Usage: python script.py <namespace> <deployment_name>")
    sys.exit(1)

type = sys.argv[1]
# 指定命名空间和Deployment的名称
namespace = ''
deployment_name = ''

if type == 'dmtest':
    namespace = 'dreammaker-system-test'
    deployment_name = 'dreammaker-ui-test'
elif type == 'dmgray':
    namespace = 'kubeflow'
    deployment_name = 'solution-ui-gray-deployment'
elif type == 'sftest':
    namespace = 'dreammaker-system-test'
    deployment_name = 'dreammaker-pipeline-ui'
elif type == 'sfgray':
    namespace = 'dreammaker-system-test'
    deployment_name = 'dreammaker-pipeline-ui-cloud-gray'

if namespace == '' or deployment_name == '':
    print("找不到指定的容器")


# 指定kubeconfig文件路径
kubeconfig_path = '/Users/game-netease/Library/Application Support/Lens/kubeconfigs/f0d07dd0-7d6e-4fb7-935c-191cad0749c0'

# 载入kubeconfig文件
config.load_kube_config(config_file=kubeconfig_path)

# 获取默认配置
configuration = client.Configuration.get_default_copy()

# 关闭SSL证书验证
configuration.verify_ssl = False

# 设置默认配置
client.Configuration.set_default(configuration)

# 打印当前配置信息

# 创建API的实例
api = client.AppsV1Api()


print(namespace)
# 获取当前的Deployment
deployment = api.read_namespaced_deployment(deployment_name, namespace)

# 更新Deployment的环境变量来重启Pods
env = client.V1EnvVar(name='RESTART_UTC', value=datetime.utcnow().isoformat())
container = deployment.spec.template.spec.containers[0]

# print(container.env)
# 需要先检查该环境变量是否存在
env_exists = False
for existing_env in container.env:
    if existing_env.name == "RESTART_UTC":
        existing_env.value = datetime.utcnow().isoformat()
        env_exists = True
        break

# # 如果不存在，则添加新的环境变量
if not env_exists:
    container.env.append(env)
else: 
    print('容器存在')

# # 应用更新
api.patch_namespaced_deployment(
    name=deployment_name, namespace=namespace, body=deployment)
