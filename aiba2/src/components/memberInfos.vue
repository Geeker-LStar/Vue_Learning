<script>
import {reactive, ref} from 'vue'
const avatar_url = ref('/images/members/')

export const membersList = reactive([
    {id: 1, name: 'Geeker LStar🔥', class: 'G10C1',
        intro: 'Hi! I\'m Li Tianxing, or you can call me Geeker-LStar⭐. I\'m the leader of AIBA. I really LOVE❤ Artificial Intelligence, Computer Science and Math.', 
        avatar: avatar_url.value + 'litianxing.jpg'},
    {id: 3, name: '王之众xChiXinB', class: 'G9C1', 
        intro: '我爱玩绝区零（', 
        avatar: avatar_url.value + 'wangzhizhong.jpg'},
    {id: 2, name: 'Yinan Guan', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 14, name: 'Zixuan Wang', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 4, name: 'Bbbb菠萝🍍', class: 'G10C1',
        intro: '水瓶座♒', 
        avatar: avatar_url.value + 'mazihan.jpg'},
    {id: 5, name: '青狸子_', class: 'G10C1',
        intro: '跌倒不是失败的代名词.', 
        avatar: avatar_url.value + 'sunyukun.png'},
    {id: 6, name: 'Zhe Su', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 7, name: 'Zitong Wang', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 8, name: 'Jiahao Zhang', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 9, name: 'Mingze Deng', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 10, name: 'Lai Jiang', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 11, name: 'Jiahang Li', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 12, name: 'Zikuan Chen', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 13, name: 'Zhiheng Han', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 15, name: 'Yifan Wang', intro: 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 16, name: 'Yimo Liu', class: 'G11C4',
        intro: '我爱数学！',
        avatar: avatar_url.value + 'liuyimo.jpg'},
])

export const supportersList = reactive([
    {id: 2, name: '本杰明', class: 'G10C1', 
        intro: '介绍：一名非正式的社团成员，积极关注社团信息，对社团未来发展前景十分看好。相信其他成员相信社长，因为都太厉害了，十分崇拜所有本社团相关信息/事项。', 
        avatar: avatar_url.value + 'jiangbohan.jpg'},
    {id: 1, name: 'Dr.齐葩', class: 'undefined',
        intro: '一个非常爱改一堆群昵称的同学（）（后面这是社长写的）某些人对这个没有背景的效果情有独钟（（（', 
        avatar: avatar_url.value + 'liangxiuqi.jpg'},
        {id: 6, name: 'Yanjia Liu', 'intro': 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
        {id: 5, name: 'Eyjafjalla', class: 'undefined',
            intro: '人活着就是为了艾雅法拉！cs是恰米的工具啦', 
            avatar: avatar_url.value + 'yejingyu.jpg'},
    {id: 4, name: 'Tiancheng Zhou', 'intro': 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
    {id: 3, name: 'Ziming He', 'intro': 'this is self-intro. this is self-intro. this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.this is self-intro.', avatar: 'https://lstar.ltx1102.com/bg-01.jpg'},
])
</script>

<template>

</template>