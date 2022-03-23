// 1.
const PENDING = 1;
const FULFILLED = 2;
const REJECTED = 3;
class _Promise {
  constructor(cb) {
    this.state = PENDING;
    this.successCbs = [];
    this.rejectCbs = [];
    this.val = null;
    this.reason = null;

    let resolve = (data) => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.val = data;
          this.successCbs.forEach((v) => {
            v(data);
          });
        }
      });
    };

    let reject = (msg) => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.msg = msg;
          this.rejectCbs.forEach((v) => {
            v(data);
          });
        }
      });
    };

    cb(resolve, reject);
  }
  then(onResolve, onReject) {
    if (typeof onResolve === "function") {
      this.successCbs.push(onResolve);
    }
    if (typeof onReject === "function") {
      this.rejectCbs.push(onResolve);
    }
    return this;
  }
}
// let promise = new _Promise((resolve, reject) => {
//   resolve("hi");
// })
//   .then((res) => {
//     console.log("TCL: res", res);
//   })
//   .then((res) => {
//     console.log("TCL: res222", res);
//   })
//   .then((res) => {
//     console.log("TCL: res333", res);
//   });

// 实现一个方法，判断对象中是否存在循环引用。
function isCycle(obj, parent) {
  let parentArr = parent || [obj];
  for (const i in obj) {
    if (typeof obj[i] === "object") {
      parentArr.forEach((_obj) => {
        if (_obj === obj[i]) {
          return true;
        }
      });
      isCycle(obj[i], [...parentArr, obj[i]]);
    }
  }
  return obj;
}

// 实现 debounce 方法
function debounce(fn, time = 200, needRunAtFirst = false) {
  let timer = 0;
  let isFirstTime = needRunAtFirst;
  return (...args) => {
    const _this = this;
    if (isFirstTime) {
      fn.apply(_this, args);
      isFirstTime = false;
    } else {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(_this, args);
        isFirstTime = needRunAtFirst;
      }, time);
    }
  };
}

// 4) 现代前端框架普遍使用vdom对页面数据进行映射，请实现一个简单的diff函数，计算同一层级下的所有vdom节点变化，包括新增、删除、移动，最终函数返回原vdom的所有操作集。
// eg: oldArr: f,f,a,b,c,d  newArr: f,f,b,a,d,e,f
/**
 * 1. 初始化lastIndex = 0，先第一轮遍历，从头到尾尽可能找可以复用的队列，可以看出一开始a对b不可用，循环结束
 * 2. 遍历新数组， a 对 b，不可复用，b在oldDom里面索引是1，1大于0，代表位置不用动，lastIndex设置为1
 * 3. 接下来a,a旧索引是0，0 < lastIndex,往左挪一位
 * 4. 接下来d,d旧索引3，大于lastIndex,不用移动
 * 5. 接下来e,e找不到，直接新增，插入
 * 6. 最后f,f找不到，直接新增，插入
 * 7. oldArr还剩的c直接剔除掉
 */

// 5. 有一个二叉树，每个节点的值是一个整数。写一个函数，判断这棵树中是否存在从根到叶子节点的一个路径，这个路径上所有节点之和为某一个值。存在返回1， 否则返回0。
function haspath(root, number, path, res) {
  if (!root) return null;
  if (root.left === null && root.rigth === null) {
    if (root.value === number) {
      path.push(path);
      res.push(path);
      return res;
    } else {
      path = [];
      return null;
    }
  }
  path.push(root.value);
  haspath(root.left, number - root.value, [...path], res);
  haspath(root.rigth, number - root.value, [...path], res);
  return res.length ? 0 : 1;
}

// 6. 给定一个无序的整数数组，找到其中最长上升子序列的长度。
const maxLength = (nums, dp = [1]) => {
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

const maxLength2 = (nums) => {
  let len = 1,
    n = nums.length;
  if (!nums.length) return 0;
  let dp = [];
  dp[len] = nums[0];

  for (let i = 0; i < n; i++) {
    if (nums[i] > dp[len]) {
      dp[++len] = nums[i];
    } else {
      let left = 1,
        right = len,
        pivot = 0;
      while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (dp[mid] < nums[i]) {
          pivot = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
        // if (nums[i] > dp[dp.length]) {
        dp[pivot + 1] = nums[i];
        // }
      }
    }
  }
  return dp;
};
console.log("TCL: 二分", maxLength2([1, 10, 11, 13, 2, 3, 4, 5]));

const test = {
  a_b_c: 1,
  a_c_b: 2,
  c_b_d: 3,
};

function convert(data = "a_b_c") {
  const keysMap = data.split("_");
  let backUp = {};
  let map = {};
  let res = {};
  for (let i = keysMap.length - 1; i >= 0; i--) {
    const key = keysMap[i];
    if (i === 0) {
      res[key] = backUp;
    } else {
      map = {
        [key]: i === keysMap.length - 1 ? 1 : backUp,
      };
      backUp = map;
    }
  }
  console.log("TCL: res", res);
  return res;
}
convert();
