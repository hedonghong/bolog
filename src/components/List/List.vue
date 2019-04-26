<template>
    <div style="background-color: #EBEBEB;">
        <div style="width:100%;background-color: #636363; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                网站首页
            </span>
            <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:50%;width:30%">
                <el-input
                        placeholder="请输入"
                        v-model="search"
                        suffix-icon="el-icon-search"
                        @keyup.enter.native="startSearch">
                </el-input>
            </span>
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
        <div style="margin-top:5px">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="44" :lg="4">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                                <span slot="title">分组一</span>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <router-link to="/list" tag="span">导航二</router-link>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <div>
                        <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item v-for="item in breadcrumbItems"  :key="item">{{item}}</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white;margin-top: 15px">
                            <div class="block">
                                <el-timeline>
                                    <el-timeline-item color="red" timestamp="2018/4/12" placement="top">
                                        <el-card>
                                            <h4><a href=":;">更新 Github 模板</a></h4>
                                            <p>desc xxxxx</p>
                                            <p>王小虎 提交于 2018/4/12 20:46</p>
                                            <p>
                                                <el-tag
                                                        v-for="tag in tags"
                                                        :key="tag.name"
                                                        size="mini"
                                                        :type="tag.type">
                                                    {{tag.name}}
                                                </el-tag>
                                            </p>
                                        </el-card>
                                    </el-timeline-item>
                                    <el-timeline-item timestamp="2018/4/3" placement="top">
                                        <el-card>
                                            <h4>更新 Github 模板</h4>
                                            <p>王小虎 提交于 2018/4/3 20:46</p>
                                        </el-card>
                                    </el-timeline-item>
                                    <el-timeline-item timestamp="2018/4/2" placement="top">
                                        <el-card>
                                            <h4>更新 Github 模板</h4>
                                            <p>王小虎 提交于 2018/4/2 20:46</p>
                                        </el-card>
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                            <div class="block">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page.sync="currentPage3"
                                        :page-size="100"
                                        layout="prev, pager, next, jumper"
                                        :total="1000">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div style="width:100%;background-color: #636363; overflow: hidden">
            footer
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'List',
    data () {
        return {
            search: '',
            breadcrumbItems: ['导航一', 'sad22'],
            isCollapse: false
        }
    },
    methods: {
        startSearch () {
            console.log(this.search)
        }
    }
}
</script>
