<template>
  <div>
    <el-table
      :row-class-name="tableRowClassName"
      :data="fundList"
      style="width: 100%"
      height="88vh"
      :default-sort="{ prop: 'type', order: 'descending' }"
    >
      <!-- width="180" -->
      <el-table-column prop="name" label="名称" sortable> </el-table-column>
      <el-table-column prop="code" label="代码"> </el-table-column>
      <!--  -->
      <el-table-column prop="gain" label="涨跌" sortable> </el-table-column>
      <el-table-column prop="type" label="类型" sortable :sort-by="['type', 'gain']"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import json from "./data"
export default {
  name: "home",
  data() {
    return {
      json,
      fundStr:
        "001630,114854,002974,161726,007301,001618,501006,004857,008282,160517,001500,009571,002979,000216,006487,163406,005064,320007,005918,001549,008591,001714,001552,161005,006928,003096,005827,004746,001027,001632,161725,260108,501058,000248,160634,165520,001156,400015,163115,000596",
      fundList: []
    }
  },
  created() {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 15000)
    // let promiseAll = []
    // let list = this.fundList.split(",")
    // list.forEach((item) => {
    //   promiseAll.push(this.$axios.get(`/api/FundSearch/api/FundSearchAPI.ashx?&m=9&key=${item}&_=${Date.now()}`))
    // })
    // Promise.all(promiseAll).then((res) => {
    //   console.warn("TCL: ", res)
    // })
    //
    // $.ajax({
    // 				type: "get",
    // 				url: "http://fundgz.1234567.com.cn/js/" + obj + ".js?rt=1463558676006",
    // 				dataType: "jsonp",		//这个设置可以允许跨域调用js
    // 				jsonp: "jsonpgz"
    // 			});
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.gain < 0) {
        return "green-row"
      } else {
        return "red-row"
      }
      return ""
    },
    getData() {
      let finalList = []
      let fundStr = Array.from(new Set(Object.keys(this.json).concat(this.fundStr.split(",")))).join(",")
      console.log("🚀 ~ file: Home.vue ~ line 64 ~ getData ~ fundStr", fundStr)
      this.$axios
        .get(
          `https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=200&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid=123&Fcodes=${fundStr}`
        )
        .then((res) => {
          res.Datas.forEach((item) => {
            const { SHORTNAME, FCODE, GSZZL } = item
            const { type = "消费" } = this.json[FCODE] || {}

            let tmp = {
              name: SHORTNAME,
              code: FCODE,
              gain: +GSZZL,
              type
            }
            finalList.push(tmp)
          })
          this.fundList = finalList
        })
      // this.$axios.get('/api/').then(res => {  })
    }
  }
}
</script>
<style lang="scss">
</style>