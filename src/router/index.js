import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Red from '@/components/red'
import Blue from '@/components/blue'
import Yellow from '@/components/yellow'
import Green from '@/components/green'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
      	{
      		path:'/red',
      		name:'red',
      		component:Red
      	},
      	{
      		path:'/blue',
      		name:'blue',
      		component:Blue
      	},
      	{
      		path:'/yellow',
      		name:'yellow',
      		component:Yellow
      	},
      	{
      		path:'/green',
      		name:'green',
      		component:Green
      	}
      ]
    },
  ]
})
