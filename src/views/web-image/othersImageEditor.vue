<template>
  <basic-container>
    <avue-crud v-bind="bindVal" v-on="onEvent" v-model="form" :page.sync="page">

      <template slot-scope="{ type, size, row }" slot="menu">
        {{status}}
        <el-button
            icon="el-icon-video-pause"
            :size="size"
            :type="type"
            v-if="row.status == 0"
            @click="handleBtnClick('updateStatus', row)"
        >下线
        </el-button>
        <el-button
            icon="el-icon-video-play"
            :size="size"
            :type="type"
            v-if="row.status == 1"
            @click="handleBtnClick('updateStatus', row)"
        >上线
        </el-button>

      </template>
    </avue-crud>
  </basic-container>
</template>
<script>
import { updateStatus } from "@/api/crud/system-settings/othersImageEditor";
export default window.$crudCommon(
    {
      data() {
        return {
        };
      },
      computed: {
        // permissionList() {
        //   return {
        //     status: this.vaildPermission(this, "trailer/status/id"),
        //   };
        // },
      },
      methods: {
        listAfter(data){
          data.records.map(item=>{
            item.status=item.status.code
          })
        },
        handleBtnClick(type, row) {
          // console.log(`${type},${row}`)
          switch (type) {
            case "updateStatus":
              // console.log(row)
              updateStatus(row.id).then((res) => {
                this.$message({
                  message: "修改成功",
                  type: "success",
                });
                this.getList();
              });
              break;

            default:
              break;
          }
        },
      },
    },
    {
      name: "crud/system-settings/othersImageEditor", //模块名字
      list: "list", //列表接口名字
      update: "update", //更新接口名字
      add: "add", //新增接口名字
      del: "del", //删除接口名字
      rowKey: "id", //主键
      pageNumber: "pageIndex", //页码
      pageSize: "pageSize", //页数
      res: (data) => {
        return data.data;

      }, //列表的结构
      total: "total", //总页数
      data: "records", //列表属性
    }
);
</script>

<style lang="scss" scoped>
</style>
