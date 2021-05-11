// import { toQueryPair } from "mingdeng-universal-utils/src/js/utils/index";
import { baseUrl } from '@/config/env';
// import { downloadImportTemplate } from "@/api";
import axios from "axios";
import da from 'element-ui/src/locale/lang/da'
import request from '@/router/axios'
export default {
  methods: {
    handleExportExcel() {
      const url = this.exportExcelUrl
      const name = this.exportName
      if (!url) {
        this.$message({
          message: 'no exportExcelUrl',
          type: 'error',
        });
        return
      }
      let pageParams = {}
      pageParams['pageNum'] = this.page.currentPage
      pageParams['pageSize'] = this.page.pageSize

      // console.dir(`${pageParams['pageNum']}++++++++,${pageParams['pageSize']}`)

      const data = Object.assign(pageParams, this.params, this.otherParams || {}, { Authorization: this.$store.getters.token })
      const href = `${baseUrl}${url}`; // 创建下载的链接
      // console.dir(`data: ${data},+++++href:${href}`)

      axios.get(href, { params: { ...data, pageNum: '', pageSize: '', },
        responseType: 'blob'}).then(({ data }) => {
        console.log(data)
        // let blob = data;
        let blob = new Blob([data], {
            type: "application/vnd.ms-excel",})
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob);
        } else {
          let elink = document.createElement('a');
          elink.download = name;
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          document.body.removeChild(elink);
        }
        // this.downloadFile(a.href)
      })
    },

    // handleDownloadTemplate() {
    //   const url = this.templateUrl
    //   if (!url) {
    //     this.$message({
    //       message: 'no exportExcelUrl',
    //       type: 'error',
    //     });
    //     return
    //   }
    //   downloadImportTemplate(url).then(({ data }) => {
    //     this.downloadFile(data)
    //   })
    // },
    // downloadFile(fileName) {
    //   const href = `${baseUrl}/common/download?fileName=${fileName}&Authorization=${this.$store.getters.token}&delete=true`; // 创建下载的链接
    //   window.location.href = href;
    // }
  },


}
