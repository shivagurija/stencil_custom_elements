host-app is the main application(Angular) which hosts multiple micro-frontends mentioned below
ang-app: Angular app built as custom angular-element and embedded in host-app
rating-stencil-component: Stencil component built as web-component and dist output is embedded in host-app
rating-stencil-component2: 2 Stencil web-components are built as web-component and it is embedded in host-app

Different sources used -
# Stencil

1) https://auth0.com/blog/creating-web-components-with-stencil/#Using-Stencil-Component-with-React-and-Angular
2) https://stenciljs.com/docs/angular
3) https://stenciljs.com/docs/custom-elements
4) https://medium.com/@andypande/how-to-create-a-component-with-stencil-and-integrate-it-with-angular-2-5b52e8c0cdcc

dist vs bundle - (refer to link - 3)
=> support on older browsers
=> lazy loading feature of stencils misses
=> dist is suggested for IE11 as it only loads pllyfills only when needed.


# Custom-elements

npm i @angular/elements @webcomponents/webcomponentsjs -D
npm i fs-extra && concat
1)https://medium.com/@kitson.mac/wrapping-an-angular-app-in-a-custom-element-web-component-angular-element-in-4-simple-steps-ded3554e9006
2)https://github.com/alcfeoh/ng2-training/blob/master/build-elements.js
