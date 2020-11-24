__NUXT_JSONP__("/guide/setup", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{document:{slug:"setup",title:"Setup",description:v,position:1.1,category:"Guide",toc:[{id:w,depth:x,text:y},{id:z,depth:x,text:A}],body:{type:"root",children:[{type:b,tag:B,props:{id:w},children:[{type:b,tag:g,props:{href:"#prerequisites",ariaHidden:C,tabIndex:D},children:[{type:b,tag:f,props:{className:[E,F]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Make sure you have installed all of the prerequisites:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fget-docker\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Docker CE"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Finstall\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Docker Compose"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fnodejs.org\u002Fen\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Node.js LTS"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:z},children:[{type:b,tag:g,props:{href:"#installation-for-local-development",ariaHidden:C,tabIndex:D},children:[{type:b,tag:f,props:{className:[E,F]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Clone the Repository"}]},{type:a,value:c},{type:b,tag:"code-group",props:{},children:[{type:a,value:o},{type:b,tag:u,props:{label:"HTTPS",active:v},children:[{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{className:[n,t]},children:[{type:a,value:G}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FDumondaMe\u002FDumondaMe.git\n"}]}]}]},{type:a,value:o}]},{type:a,value:o},{type:b,tag:u,props:{label:"SSH"},children:[{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{className:[n,t]},children:[{type:a,value:G}]},{type:a,value:" clone git@github.com:DumondaMe\u002FDumondaMe.git\n"}]}]}]},{type:a,value:o}]},{type:a,value:o},{type:b,tag:u,props:{label:"GitHub CLI"},children:[{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"gh repo clone DumondaMe\u002FDumondaMe\n"}]}]}]},{type:a,value:o}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Change to the web application code"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{className:[n,"builtin","class-name"]},children:[{type:a,value:"cd"}]},{type:a,value:" DumondaMe\u002FdumondaMe\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Install the node.js dependencies"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{className:[n,t]},children:[{type:a,value:"npm"}]},{type:a,value:" run installDev\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Install the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fneo4j.com\u002Fdeveloper\u002Fneo4j-apoc\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"apoc"}]},{type:a,value:" library"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"  "},{type:b,tag:f,props:{className:[n,t]},children:[{type:a,value:"mkdir"}]},{type:a,value:" -p dockerCompose\u002Fneo4j\u002Fplugins\n  "},{type:b,tag:f,props:{className:[n,t]},children:[{type:a,value:"curl"}]},{type:a,value:" -L https:\u002F\u002Fgithub.com\u002Fneo4j-contrib\u002Fneo4j-apoc-procedures\u002Freleases\u002Fdownload\u002F3.5.0.11\u002Fapoc-3.5.0.11-all.jar "},{type:b,tag:f,props:{className:[n,"operator"]},children:[{type:a,value:"\u003E"}]},{type:a,value:" dockerCompose\u002Fneo4j\u002Fplugins\u002Fapoc-3.5.0.11-all.jar\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Start all local services with docker-compose"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"  docker-compose up\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Enter "},{type:b,tag:g,props:{href:H,rel:[p,q,r],target:s},children:[{type:a,value:H}]},{type:a,value:" into your browser to connect to the neo4j database. Change the standard password from neo4j to 123456"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Todo: download standard images for cdn"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Todo: create fake data"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Todo: Start application"}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fguide",path:"\u002Fen\u002Fguide\u002Fsetup",extension:".md",createdAt:I,updatedAt:I,to:"\u002Fguide\u002Fsetup"},prev:{slug:"index",title:"Introduction",to:"\u002F"},next:{slug:"configuration",title:"Configuration",to:"\u002Fguide\u002Fconfiguration"}}],fetch:[],mutations:[]}}("text","element","\n","li","p","span","a","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","token","\n  ","nofollow","noopener","noreferrer","_blank","function","code-block","","prerequisites",2,"Prerequisites","installation-for-local-development","Installation for local development","h2","true",-1,"icon","icon-link","git","http:\u002F\u002F127.0.0.1:7474\u002F","2020-11-24T18:14:42.199Z")));