<template>
    <div style="margin-top: 20px;">
        <CButton color="blue">主要按钮</CButton>
        <CButton color="green">绿色按钮</CButton>
        <CButton color="gray">灰色按钮</CButton>
        <CButton color="yellow">黄色按钮</CButton>
        <CButton color="red">红色按钮</CButton>
    </div>
    <div style="margin-top: 20px;">
        <CButton color="blue" plain>朴素按钮</CButton>
        <CButton color="green" plain>绿色按钮</CButton>
        <CButton color="gray" plain>灰色按钮</CButton>
        <CButton color="yellow" plain>黄色按钮</CButton>
        <CButton color="red" plain>红色按钮</CButton>
    </div>
    <div style="margin-top: 20px;">
        <CButton size="small" plain>小按钮</CButton>
        <CButton size="medium" plain>中按钮</CButton>
        <CButton size="large" plain>大按钮</CButton>
    </div>
    <div style="margin-top: 20px;">
        <CButton color="blue" round plain icon="search">搜索按钮</CButton>
        <CButton color="green" round plain icon="edit">编辑按钮</CButton>
        <CButton color="red" round plain icon="delete">删除按钮</CButton>
    </div>
    <div style="margin-top: 20px;">
        <CButton color="blue" round plain icon="search"></CButton>
        <CButton color="green" round plain icon="edit"></CButton>
        <CButton color="red" round plain icon="delete"></CButton>
        <CButton color="red" round plain>custom</CButton>
    </div>
</template>

<script lang="ts" setup>
import CButton from './button/index';

const color = 'orange'

</script>

<style Ccoped lang="scss">
</style>