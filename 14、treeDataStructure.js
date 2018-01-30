<script>
<!--
  示例是在线解压缩zip文件时，通过树结构展示文件层级
  server在一个接口返回了全部的json数据，且文件除了name和path，其他的id等属性均为自己创建，并无父子对应关系
  如：
  [
   {"id":0,"type":"directory","parentName":"","name":"jPlayer-2.9.2"},
   {"id":1,"type":"file","parentName":"jPlayer-2.9.2","name":".gitignore"}
  ]
  使用的树插件为ztree，需要的json格式为
  var nodes = [
	  {id:1, pId:0, name: "父节点1"},
	  {id:11, pId:1, name: "子节点1"},
	  {id:12, pId:1, name: "子节点2"}
  ];
  分析:
  ztree插件的数据需要通过id和pId之间来相互对应，而这些属性在json中都是没有的，因此需要遍历数据，来手动添加父子关系内容
  根据我们的json，分析出可以依据子节点的parentName  = 父节点的parentName + ‘/’ + 父节点的name属性来判断父子关系
-->
</script>
