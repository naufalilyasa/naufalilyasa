function transformData(input: any) {
  return input
    .trim()
    .split("\n")
    .map((line: any) => {
      const [id, name, iconUrl] = line.split("\t");
      return { id, name, iconUrl };
    });
}

// Contoh penggunaan
const rawData = `
cmdrp5ug70000u9t0drajn9aw	HTTP	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png
cmdrp5uk90001u9t0dwrskgmz	websocket	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/websocket.png
cmdrp5ukm0002u9t0rthzw4a5	gRPC	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grpc.png
cmdrp5ukx0003u9t05fipishk	GraphQL	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png
cmdrp5ul90004u9t09ntn9b5s	REST	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png
cmdrp5uln0005u9t0494rzqil	SOAP	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/soap.png
cmdrp5ulx0006u9t01mtb8qjj	tRPC	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/trpc.png
cmdrp5um80007u9t0j39dp5vw	Git	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png
cmdrp5umj0008u9t01ksya0wi	GitHub	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png
cmdrp5umz0009u9t0v7lwv406	GitLab	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gitlab.png
cmdrp5unf000au9t0wdz8rln4	Bitbucket	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bitbucket.png
cmdrp5unv000bu9t058c7o55l	Vim	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vim.png
cmdrp5uoa000cu9t040yh7jfz	IntelliJ	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/intellij.png
cmdrp5uoj000du9t0mprjgqag	WebStorm	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webstorm.png
cmdrp5uos000eu9t089kwlk8z	PyCharm	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pycharm.png
cmdrp5up1000fu9t01xujo6xv	PhpStorm	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/phpstorm.png
cmdrp5upa000gu9t03p1b0qhz	Android Studio	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android_studio.png
cmdrp5upi000hu9t00cpcqou9	AppCode	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/appcode.png
cmdrp5upq000iu9t0zfiqellt	Xcode	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/xcode.png
cmdrp5upz000ju9t04wr8ivq7	Visual Studio Code	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/visual_studio_code.png
cmdrp5uqd000ku9t0h0k37mdw	eclipse	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/eclipse.png
cmdrp5uqs000lu9t091htfn4p	Atom	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/atom.png
cmdrp5ur7000mu9t05izi1zee	Sublime Text	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sublime_text.png
cmdrp5ure000nu9t0eygty6mg	Postman	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png
cmdrp5urm000ou9t0pjelqvag	Jira	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png
cmdrp5uru000pu9t02eok5ltr	Spyder	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spyder.png
cmdrp5us3000qu9t0yudbruuc	Jupyter Notebook	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jupyter_notebook.png
cmdrp5usc000ru9t0u58r3wnz	SonarQube	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sonarqube.png
cmdrp5usm000su9t02tw5y8sh	Neovim	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/neovim.png
cmdrp5ust000tu9t0yfmoz455	HTML	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png
cmdrp5ut1000uu9t05lch2nlb	CSS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png
cmdrp5utf000vu9t0r7iybgok	Sass	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png
cmdrp5utt000wu9t01gontjyd	Bootstrap	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png
cmdrp5uu7000xu9t04kkomfw7	Tailwind CSS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png
cmdrp5uum000yu9t0v8db8ybg	Wordpress	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wordpress.png
cmdrp5uv5000zu9t0w3juffun	Wix	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wix.png
cmdrp5uvn0010u9t0xx6qds1p	Swagger	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swagger.png
cmdrp5uwb0011u9t02yr8hqm2	Browsersync	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/browsersync.png
cmdrp5ux00012u9t0k204lp7s	WebAssembly	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webassembly.png
cmdrp5uxq0013u9t053o9se4c	Firebase	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png
cmdrp5uyg0014u9t0hgmbzi0g	Supabase	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/supabase.png
cmdrp5uza0015u9t07xxvcadt	Materialize	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/materialize.png
cmdrp5v030016u9t0zpq5rmfy	Bulma	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bulma.png
cmdrp5v0w0017u9t0r2235a13	Strapi	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/strapi.png
cmdrp5v1p0018u9t096vw2gfn	Directus	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/directus.png
cmdrp5v2e0019u9t0fd68bc9p	Auth0	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/auth0.png
cmdrp5v34001au9t0qnzkfkgr	styled-components	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/styled-components.png
cmdrp5v3x001bu9t0yws0gg8i	Figma	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png
cmdrp5v4r001cu9t0zek76pd5	Material Design	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_design.png
cmdrp5v5h001du9t05ofexlnv	Material UI	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_ui.png
cmdrp5v5u001eu9t0dhbltssc	Chakra UI	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/chakra_ui.png
cmdrp5v64001fu9t0hbzi4kn6	Ant Design	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ant_design.png
cmdrp5v6e001gu9t08irqsn3w	Canva	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/canva.png
cmdrp5v6t001hu9t0m8gdqc5a	ShadCn UI	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png
cmdrp5v79001iu9t09wfl141x	Next UI	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_ui.png
cmdrp5v80001ju9t0i9k4vczy	Lucide	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/lucide.png
cmdrp5v8p001ku9t0xuvrwyvi	JavaScript	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png
cmdrp5v9c001lu9t0m9gx8hj4	Angular	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png
cmdrp5va0001mu9t02rsztc2d	React	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png
cmdrp5vam001nu9t0drvvjui0	Vue.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vue_js.png
cmdrp5vb9001ou9t0cwq7lidi	TypeScript	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png
cmdrp5vbu001pu9t0rz9zs015	npm	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png
cmdrp5vcg001qu9t0kvuwwc31	yarn	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/yarn.png
cmdrp5vd3001ru9t0yzfbcjz5	Node.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png
cmdrp5vdz001su9t0jcsf50pw	Express	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png
cmdrp5vet001tu9t09o8drpuk	Nest.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nest_js.png
cmdrp5vfp001uu9t03h18uc9m	Fastify	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/fastify.png
cmdrp5vgn001vu9t0sy0r6w5z	Redux	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png
cmdrp5vhd001wu9t0nrt9gct6	React Query	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react_query.png
cmdrp5vi3001xu9t0np7eodt1	Jest	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jest.png
cmdrp5vit001yu9t0d9pi9tvk	webpack	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png
cmdrp5vjj001zu9t0vcgec1ve	Gulp	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gulp.png
cmdrp5vk80020u9t0hwfsxjkl	Grunt	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grunt.png
cmdrp5vkx0021u9t010dg8zd6	Gatsby	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gatsby.png
cmdrp5vlm0022u9t0vd6dgste	Next.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png
cmdrp5vmb0023u9t0jivqposw	Svelte	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/svelte.png
cmdrp5vn70024u9t07o03y9wo	Nuxt.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nuxt_js.png
cmdrp5vo40025u9t0vklxpqpp	Bun.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bun_js.png
cmdrp5vot0026u9t0jwer5zoi	Backbone.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/backbone_js.png
cmdrp5vpi0027u9t0u8bf9jb5	Vuetify.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vuetify_js.png
cmdrp5vq60028u9t0cl6glikt	Ember.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ember_js.png
cmdrp5vqy0029u9t0l48u5u63	Pug	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pug.png
cmdrp5vrq002au9t0lk21g3dp	Vite	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png
cmdrp5vsi002bu9t0m8un374f	Babel	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/babel.png
cmdrp5vta002cu9t0sbzqk7kj	Astro	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/astro.png
cmdrp5vu3002du9t0hpun72wn	NodeGui	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nodegui.png
cmdrp5vuz002eu9t0ehthde37	Turborepo	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/turborepo.png
cmdrp5vvk002fu9t0re87p1tw	Marionette	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/marionette.png
cmdrp5vw4002gu9t0cwvfo4og	Electron	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/electron.png
cmdrp5vwp002hu9t0q20vmrx0	Java	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png
cmdrp5vx5002iu9t0hyvxvyaf	Spring	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png
cmdrp5vxm002ju9t0wmhqdtz7	Spring Boot	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png
cmdrp5vy8002ku9t0qi1s6spu	Maven	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/maven.png
cmdrp5vyo002lu9t0fw9ps140	Hibernate	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hibernate.png
cmdrp5vz2002mu9t0ai17enw4	Liquibase	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/liquibase.png
cmdrp5vzh002nu9t08loqb1s8	Flyway	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flyway.png
cmdrp5vzx002ou9t0efcmgzxw	Struts	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/struts.png
cmdrp5w0c002pu9t0lw63hdsh	JUnit	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/junit.png
cmdrp5w0w002qu9t0efr4rhhf	mocikto	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mocikto.png
cmdrp5w1h002ru9t06kv1lzx1	Lombok	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/lombok.png
cmdrp5w23002su9t0vblbhsp5	Mapstruct	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mapstruct.png
cmdrp5w2n002tu9t0q6ihrloj	Testcontainers	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/testcontainers.png
cmdrp5w33002uu9t099dnd4fr	Spock	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spock.png
cmdrp5w3i002vu9t0qd0h98wa	Vaadin	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vaadin.png
cmdrp5w3x002wu9t0eeeqtmqx	Groovy	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/groovy.png
cmdrp5w4d002xu9t0ln7daffx	Quarkus	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/quarkus.png
cmdrp5w4y002yu9t0k4lkbl8o	Micronaut	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/micronaut.png
cmdrp5w5k002zu9t0me3z9f6t	Tomcat	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tomcat.png
cmdrp5w660030u9t0d1z1man3	jetty	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jetty.png
cmdrp5w6s0031u9t01fnnom8r	JBoss	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jboss.png
cmdrp5w7e0032u9t03yvy36n6	WildFly	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wildfly.png
cmdrp5w810033u9t01mmeyc7y	GraalVM	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graalvm.png
cmdrp5w8p0034u9t0fhb3q0kq	Scala	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/scala.png
cmdrp5w9b0035u9t083yanqee	sbt	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sbt.png
cmdrp5w9y0036u9t0whj24jhy	Play Framework	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/play_framework.png
cmdrp5wal0037u9t0a5swbhxy	Kotlin	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kotlin.png
cmdrp5wb70038u9t0ky21tvz7	Micrometer	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/micrometer.png
cmdrp5wby0039u9t0mmxnuk3z	Hadoop	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hadoop.png
cmdrp5wcq003au9t00sashmsh	C	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png
cmdrp5wdi003bu9t0ie7di1vk	C++	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png
cmdrp5wea003cu9t0erp6l6cn	Qt	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/qt.png
cmdrp5wew003du9t0pawj8k6y	wxWidgets	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wxwidgets.png
cmdrp5wfj003eu9t052hxoloy	C#	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c%23.png
cmdrp5wg7003fu9t0sobhj4yz	.NET Core	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/_net_core.png
cmdrp5wgt003gu9t0szwh1yh1	Blazor	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/blazor.png
cmdrp5whl003hu9t0klnd3bdg	Lua	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/lua.png
cmdrp5wie003iu9t0e6joj1dp	Python	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png
cmdrp5wj6003ju9t0qtu0ujz0	Flask	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flask.png
cmdrp5wjz003ku9t0fckxevxc	pytest	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pytest.png
cmdrp5wkm003lu9t0v7wob803	Django	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/django.png
cmdrp5wl8003mu9t0l7h57dnr	NumPy	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png
cmdrp5wlu003nu9t0e11znpb0	Pandas	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pandas.png
cmdrp5wmh003ou9t0ry8krwwm	Pygame	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pygame.png
cmdrp5wn4003pu9t05ppry18q	Odoo	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/odoo.png
cmdrp5wnq003qu9t0041qxt3j	Streamlit	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/streamlit.png
cmdrp5wod003ru9t0t1jsutxj	php	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png
cmdrp5woz003su9t089uzv8ex	php (elephpant)	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php_(elephpant).png
cmdrp5wps003tu9t0bji96j60	Laravel	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png
cmdrp5wqk003uu9t0x87et78o	Ruby	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby.png
cmdrp5wr6003vu9t0pak5rex6	Ruby on Rails	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby_on_rails.png
cmdrp5wrm003wu9t07ydd3cqx	RubyGems	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rubygems.png
cmdrp5wrz003xu9t0abqso2b4	Zig	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ziglang.png
cmdrp5wsc003yu9t0kxs6rkfo	Zero the Ziguana (Mascot)	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/zero_the_ziguana.png
cmdrp5wso003zu9t0wyljegjj	Rust	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rust.png
cmdrp5wt10040u9t0nd45errq	Fortran	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/fortran.png
cmdrp5wtf0041u9t0973nh90g	Go	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png
cmdrp5wtx0042u9t0hqaapall	Erlang	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/erlang.png
cmdrp5wuh0043u9t0z19qg5qw	Elixir	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elixir.png
cmdrp5wuz0044u9t0pbtpcns9	Apache Solr	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/apache_solr.png
cmdrp5wvb0045u9t0t406696u	Apache Camel	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/apache_camel.png
cmdrp5wvo0046u9t06t4k5ysd	Android	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android.png
cmdrp5ww10047u9t0jaatu5ng	iOS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ios.png
cmdrp5wwd0048u9t0tkxunz94	Swift	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swift.png
cmdrp5wwq0049u9t03jc42euu	Dart	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/dart.png
cmdrp5wx2004au9t0e24ws3sf	Flutter	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flutter.png
cmdrp5wxf004bu9t0np0w21f1	React Native	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png
cmdrp5wxr004cu9t0ox6150p8	Expo	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/expo.png
cmdrp5wya004du9t036dpj7pr	PostgreSQL	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png
cmdrp5wys004eu9t0dn881009	Oracle	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/oracle.png
cmdrp5wza004fu9t0g9t654zp	MySQL	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png
cmdrp5wzs004gu9t0fsl22soy	redis	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png
cmdrp5x05004hu9t01tolbgmv	neo4j	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/neo4j.png
cmdrp5x0i004iu9t0uuovl74y	Cassandra	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cassandra.png
cmdrp5x0t004ju9t05xau7gdn	mongoDB	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png
cmdrp5x15004ku9t0kt2uw5ft	Hazelcast	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hazelcast.png
cmdrp5x1i004lu9t0lnddwi5k	CouchDB	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/couchdb.png
cmdrp5x20004mu9t01vg0vl9l	Realm	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/realm.png
cmdrp5x2i004nu9t0a7g2c203	SQLite	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png
cmdrp5x3b004ou9t04qr0zab0	MariaDB	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mariadb.png
cmdrp5x3o004pu9t04fmfp45g	CockroachDB	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cockroachdb.png
cmdrp5x41004qu9t0xvgfzwv9	Hive	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hive.png
cmdrp5x4e004ru9t0c4iw4utk	MSSQL	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mssql.png
cmdrp5x4r004su9t0oea3qkfm	bash	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png
cmdrp5x53004tu9t0hoow1efo	Docker	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png
cmdrp5x5g004uu9t0n910ghvc	Kubernetes	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png
cmdrp5x5s004vu9t0cb3vsrtf	CI/CD	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ci_cd.png
cmdrp5x65004wu9t0s73wrgl5	Jenkins	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jenkins.png
cmdrp5x6n004xu9t03e0ofdo7	Grafana	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png
cmdrp5x76004yu9t0baqau7y9	Loki	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/loki.png
cmdrp5x7o004zu9t09zy54gwd	Prometheus	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png
cmdrp5x850050u9t0h5ejtu5p	Thanos	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/thanos.png
cmdrp5x8f0051u9t0rfblx2lm	Terraform	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/terraform.png
cmdrp5x8p0052u9t0kyv02uxb	Ansible	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ansible.png
cmdrp5x8x0053u9t0hd595sh7	Vault	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vault.png
cmdrp5x960054u9t06feoe0ru	Nginx	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png
cmdrp5x9e0055u9t0bt9i0rvb	Consul	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/consul.png
cmdrp5x9n0056u9t0hlr4ozs9	OpenResty	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/openresty.png
cmdrp5xa10057u9t0gxmcrywf	Puppet	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppet.png
cmdrp5xah0058u9t06mqd66oe	AWS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png
cmdrp5xav0059u9t0dxuv9n07	GCP	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png
cmdrp5xb5005au9t0ts04mzex	Microsoft Azure	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png
cmdrp5xbe005bu9t0zfef08qb	IBM Cloud	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ibm_cloud.png
cmdrp5xbn005cu9t0b3u8zyke	Digital Ocean	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png
cmdrp5xbx005du9t0xv2gasio	TensorFlow	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png
cmdrp5xc6005eu9t0lx3alvq7	Elasticsearch	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png
cmdrp5xcf005fu9t04tnni55a	Apache Spark	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/apache_spark.png
cmdrp5xcn005gu9t0un2c76xt	Databricks	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/databricks.png
cmdrp5xcw005hu9t0eo7hwc9q	MATLAB	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png
cmdrp5xdb005iu9t0wht3ie9i	Selenium	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png
cmdrp5xdq005ju9t03d1i57jn	Cucumber	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cucumber.png
cmdrp5xe6005ku9t0fjzwawm9	Cypress	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cypress.png
cmdrp5xem005lu9t0fnon1qpq	Chai	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/chai.png
cmdrp5xex005mu9t063i4ygkg	Mocha	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mocha.png
cmdrp5xf7005nu9t0gicgulje	Robot Framework	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/robot_framework.png
cmdrp5xfi005ou9t08zhsh7ex	Puppeteer	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppeteer.png
cmdrp5xfs005pu9t02mq7eyrq	Playwright	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/playwright.png
cmdrp5xg2005qu9t03iqiubel	Unity	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/unity.png
cmdrp5xgd005ru9t0xp765w1x	Godot	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/godot.png
cmdrp5xgo005su9t0lywku702	Unreal Engine	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/unreal_engine.png
cmdrp5xgy005tu9t04brs0f0b	RPG Maker	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rpg_maker.png
cmdrp5xhf005uu9t0byhimcgy	Windows	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/windows.png
cmdrp5xhs005vu9t0v3bouzx8	macOS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/macos.png
cmdrp5xi3005wu9t03u06s5pd	Linux	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png
cmdrp5xid005xu9t0417bpzr6	Ubuntu	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png
cmdrp5xin005yu9t0vas63le2	fedora	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/fedora.png
cmdrp5xiy005zu9t0340yyig0	Arch Linux	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/arch_linux.png
cmdrp5xj90060u9t0j65wx5jk	Linux Mint	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux_mint.png
cmdrp5xjj0061u9t0psggshk1	elementary OS	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elementary_os.png
cmdrp5xju0062u9t0cbbph4qz	Kali Linux	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kali_linux.png
cmdrp5xk90063u9t0fjjt4ck4	Nixos	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nixos.png
cmdrp5xkp0064u9t06l7me2p7	Arduino	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/arduino.png
cmdrp5xl50065u9t0ar00c3ls	Coral.ai	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/coral_ai.png
cmdrp5xlm0066u9t0b670mm9r	Raspberri Pi	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/raspberri_pi.png
cmdrp5xlx0067u9t03na946w9	MQTT	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mqtt.png
cmdrp5xm70068u9t090ifbu0g	EMQX	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/emqx.png
cmdrp5xmq0069u9t0o6iopmq8	Mosquitto	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mosquitto.png
cmdrp5xn0006au9t053n319ae	RabbitMQ	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png
cmdrp5xna006bu9t0byu3l8nx	kafka	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kafka.png
cmdrp5xnm006cu9t0hgoyhjji	MQTT.js	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mqtt_js.png
cmdrp5xo2006du9t0cigwmuzz	ActiveMQ	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/activemq.png
cmdrp5xoi006eu9t01hkjgdum	Solidity	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/solidity.png
cmdrp5xoy006fu9t0rvmb7hbz	Solana	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/solana.png
cmdrp5xpd006gu9t0s5lljmow	Hardhat	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hardhat.png
cmdrp5xpo006hu9t0iw6jb8hb	Foundry	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/foundry.png
cmdrp5xpy006iu9t00y3sttlg	Metamask	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/metamask.png
cmdrp5xq8006ju9t0a3jc8ptw	Ethereum	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ethereum.png
cmdrp5xqh006ku9t0fsf17r0g	Chainlink	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/chainlink.png
cmdrp5xqr006lu9t06t2nd4t5	Uniswap	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/uniswap.png
`;

export const resultTechnologies: { id: string; name: string; iconUrl: string }[] =
  transformData(rawData);

const categoriesWithCounts = [
  { category: "COMMUNICATION", count: 7 },
  { category: "VERSION_CONTROL", count: 4 },
  { category: "TOOLS", count: 18 },
  { category: "WEB_DEV", count: 18 },
  { category: "UI_UX", count: 9 },
  { category: "JAVASCRIPT", count: 33 },
  { category: "JAVA", count: 29 },
  { category: "C_CPP", count: 4 },
  { category: "C_SHARP", count: 3 },
  { category: "LUA", count: 1 },
  { category: "PYTHON", count: 9 },
  { category: "PHP", count: 3 },
  { category: "RUBY", count: 3 },
  { category: "ZIG", count: 3 },
  { category: "RUST", count: 1 },
  { category: "FORTRAN", count: 1 },
  { category: "GO", count: 1 },
  { category: "ERLANG_ELIXIR", count: 2 },
  { category: "APACHE", count: 2 },
  { category: "MOBILE_DEV", count: 7 },
  { category: "DATABASE", count: 15 },
  { category: "DEVOPS", count: 16 },
  { category: "CLOUD", count: 5 },
  { category: "AI", count: 1 },
  { category: "ANALYTICS", count: 4 },
  { category: "TESTING", count: 8 },
  { category: "GAME_DEVELOPMENT", count: 4 },
  { category: "OPERATING_SYSTEM", count: 10 },
  { category: "MICROCONTROLLER", count: 3 },
  { category: "MQTT_TECHNOLOGIES", count: 7 },
  { category: "BLOCKCHAIN", count: 8 },
];

// generate categoryRanges dengan start dan end index
let startIndex = 0;
const categoryRanges = categoriesWithCounts.map(({ category, count }) => {
  const range = { category, start: startIndex, end: startIndex + count - 1 };
  startIndex += count;
  return range;
});

// buat array baru dengan category
export const technologiesWithCategory = resultTechnologies.map((tech, index) => {
  // cari category yang sesuai dengan index
  const found = categoryRanges.find(
    (range) => index >= range.start && index <= range.end,
  );
  return {
    ...tech,
    category: found ? found.category : null, // kalau tidak ada range, bisa null
  };
});
