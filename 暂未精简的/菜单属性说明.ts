// note: 好像除了 redirect, name, path, component，其他的都是放到 meta 里面的

interface ItemProps {
  /** 菜单类型（0代表菜单、1代表iframe、2代表外链、3代表按钮）*/
  menuType: number;
  /** 父级菜单id */
  parentId: number;
  /** 菜单标题 */
  title: string;
  /** 菜单名称-这个很重要必须有，而且要唯一 */
  name: string;
  /** 菜单路径 */
  path: string;
  /** 组件路径 - 这个是在参数路由，还有路由路径和组件路径不一样的时候使用 */
  component: string;
  /** 排序 */
  rank: number;
  /** 菜单图标 */
  icon: string;
  /** 菜单（是否显示该菜单） 主要用于通过`query`或`params`传参的路由 */
  showLink: boolean;
  /** 菜单激活（将某个菜单激活，主要用于通过`query`或`params`传参的路由，当它们通过配置`showLink: false`后不在菜单中显示，就不会有任何菜单高亮，而通过设置`activePath`指定激活菜单即可获得高亮，`activePath`为指定激活菜单的`path`），默认可以给空字符串*/
  activePath: string;

  // --------非必须参数--------
  /** 路由重定向，默认可以给空字符串 */
  redirect: string;
  /** 右侧图标，默认可以给空字符串 */
  extraIcon: string;
  /** 进场动画（页面加载动画），默认可以给空字符串 */
  enterTransition: string;
  /** 离场动画（页面加载动画），默认可以给空字符串*/
  leaveTransition: string;
  /** 缓存页面（是否缓存该路由页面，开启后会保存该页面的整体状态，刷新后会清空状态），默认可以给 true */
  keepAlive: boolean;
  /** 标签页（当前菜单名称或自定义信息禁止添加到标签页），默认给 false*/
  hiddenTag: boolean;
  /** 固定标签页（当前菜单名称是否固定显示在标签页且不可关闭），默认给 false*/
  fixedTag: boolean;
  /** 该模式针对父级菜单下只有一个子菜单的情况，在子菜单的 meta 属性中加上 showParent: true ，默认可以给 true */
  showParent: boolean;

  // --------iframe类型需要的参数--------
  frameSrc: string;
  /** 加载动画（内嵌的`iframe`页面是否开启首次加载动画） */
  frameLoading: boolean;

  // --------button类型需要的参数--------
  /** 按钮权限标识 */
  auths: string;
}

