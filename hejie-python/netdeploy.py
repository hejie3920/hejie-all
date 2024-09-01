import requests
import time
import os

# GitLab Personal Access Token
PRIVATE_TOKEN = "4TKZ7BmwwRnXK4gUaB15"
# 项目ID
PROJECT_ID = "15901"
# CI Pipeline ID
PIPELINE_ID = "573124"
# GitLab API URL
GITLAB_API_URL = "https://gitlab.nie.netease.com/api/v4"
def get_pipeline_status(project_id, pipeline_id):
    url = f"{GITLAB_API_URL}/projects/{project_id}/pipelines/{pipeline_id}"
    headers = {
        "PRIVATE-TOKEN": PRIVATE_TOKEN
    }
    print(f"Request URL: {url}")
    response = requests.get(url, headers=headers)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.content}")
    response.raise_for_status()
    return response.json()

def notify(title, message):
    os.system(f"""
              osascript -e 'display notification "{message}" with title "{title}"'
              """)

def main():
    while True:
        try:
            status = get_pipeline_status(PROJECT_ID, PIPELINE_ID)["status"]
            print(f"Current pipeline status: {status}")
            
            if status == "success":
                notify("CI Notification", "Pipeline completed successfully!")
                break
            elif status == "failed":
                notify("CI Notification", "Pipeline failed!")
                break
        except requests.exceptions.HTTPError as e:
            print(f"HTTP error occurred: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")
        
        time.sleep(30)  # 每30秒检查一次

if __name__ == "__main__":
    main()