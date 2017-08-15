$(document).ready(function () {
    var isFirstMenu;

    var menulist ={"code":100,"msg":"操作成功","extend":{"children":[{"id":"1","text":"主菜单","children":[{"id":"2","text":"权限系统","children":[{"id":"4","text":"用户管理","children":[],"parentId":"2"},{"id":"5","text":"角色管理","children":[],"parentId":"2"},{"id":"6","text":"权限管理","children":[{"id":"7","text":"权限增加","children":[],"parentId":"6"},{"id":"8","text":"权限删除","children":[],"parentId":"6"}],"parentId":"2"}],"parentId":"1"},{"id":"3","text":"内容管理","children":[{"id":"9","text":"轮播图管理","children":[],"parentId":"3"},{"id":"10","text":"商品管理","children":[],"parentId":"3"}],"parentId":"1"}],"parentId":"1"}]}};
    $(window).load(function(){
        var showlist = $("<ul class=\"sidebar-menu\"></ul>");
        $("<li class=\"header\">主导航</li>").appendTo(showlist);
        isFirstMenu=menulist.extend.children.length;
        showall(menulist.extend.children, showlist);
        $("#div_menu").append(showlist);
    });
     function showall(menu_list, parent) {
        for (var menu in menu_list) {
            if (menu_list[menu].children.length > 0) {
                var li = $("<li></li>");
                if(isFirstMenu==0){
                    li = $("<li></li>");
                }else{
                    li = $("<li class=\"treeview\"></li>");
                    isFirstMenu=isFirstMenu-1;
                }
                $(li).append("<a href=\"#\"><i class=\"fa fa-share\"></i> <span>"+menu_list[menu].text+"</span><i class=\"fa fa-angle-right pull-right\"></i></a>");
                var nextParent=$("<ul class=\"treeview-menu\"></ul>");
                $(nextParent).appendTo(li);
                $(li).appendTo(parent);
                showall(menu_list[menu].children, nextParent);
            }
            else {
                $("<li><a href=\"#\"><i class=\"fa fa-circle-o\"></i>"
                    +menu_list[menu].text
                    +"</a></li>").appendTo(parent);
            }
        }
    }

});