<template>
    <el-menu
            mode="horizontal"
            router
            :default-active="$route.path"
            @select="handleSelect"
    >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Background</template>
            <el-menu-item index="/bio">Bio</el-menu-item>
            <el-menu-item index="/demonstrate">Demonstrate</el-menu-item>
            <el-menu-item index="/hardware">Hardware</el-menu-item>
            <el-menu-item index="/model ">Model</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">Practice</template>
            <el-menu-item index="/overview">Overview</el-menu-item>
            <el-menu-item index="/silver">Silver</el-menu-item>
            <el-menu-item index="/integrated_practice">Integrated Practice</el-menu-item>
            <el-menu-item index="/education_and_public_engagement">Education and Public Engagement</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">Judging</template>
            <el-menu-item index="/medal">Medal</el-menu-item>
            <el-menu-item index="/parts">Parts</el-menu-item>
            <el-menu-item index="/safety">Safety</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">Team</template>
            <el-menu-item index="/members">Members</el-menu-item>
            <el-menu-item index="/collaborations">Collaborations</el-menu-item>
            <el-menu-item index="/notebook">Notebook</el-menu-item>
            <el-menu-item index="/attributions">Attributions</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }


</script>

<style scoped>

</style>