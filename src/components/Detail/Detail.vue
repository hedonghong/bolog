<template>
    <el-container>
        <el-aside>
            <h5>导航栏</h5>
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
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
        </el-aside>
        <el-container>
            <el-header>
                <el-row type="flex" justify="end">
                    <el-col :span="18" :offset="5">
                        <el-input
                                size="small"
                                placeholder="请输入"
                                v-model="search"
                                suffix-icon="el-icon-search"
                                @keyup.enter.native="startSearch">
                        </el-input>
                    </el-col>
                    <el-col :span="6" :push="2">
                        <el-dropdown trigger="click">
                          <span class="el-dropdown-link" style="color:white">
                            admin<i class="el-icon-caret-bottom el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
            <el-row type="flex" :span="24" class="self_breadcrumb_row">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-main>
                <el-row>
                    <el-col>
                        <mavon-editor v-model="value1"/>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <mavon-editor v-html="value2" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" :boxShadow="false" @change="changeData" />
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Detail',
    data () {
        return {
            search: '',
            value1: '',
            isCollapse: false,
            value2: `
<h1><a id="_1"></a>这是标题</h1> <p>萨达省</p>`,
            defaultData: 'preview'
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath)
        },
        changeData (value, render) {
            console.log(render)
        }
    }
}
</script>

<style>
    .el-header, .el-footer {
        background-color: #000;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .self_breadcrumb_row {
        margin: 5px;
        background-color: #f9fafc;
    }
</style>
