(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(90),n(26),n(24),n(23));o.a.initializeApp({apiKey:"AIzaSyBmLLkjb7Yuw24Efm1r8C3qayxNqUZWqMA",authDomain:"chat-app-29cc7.firebaseapp.com",projectId:"chat-app-29cc7",storageBucket:"chat-app-29cc7.appspot.com",messagingSenderId:"511025175348",appId:"1:511025175348:web:7ffeb00f97188cc29ee361",measurementId:"G-VFWMWRLH6F"});var s={firebase:o.a,firestore:o.a.firestore(),auth:o.a.auth()},l=n(147),d=n(4);var u=function(){var e=s.auth;return Object(d.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){var t=new o.a.auth.GoogleAuthProvider;e.signInWithPopup(t)},children:"Sign in with google"})},b=n(151),h=Object(b.a)({signOutButton:{justifyContent:"start"}});var j=function(){var e=s.auth,t=h();return e.currentUser&&Object(d.jsx)(l.a,{onClick:function(){return e.signOut()},className:t.signOutButton,variant:"contained",color:"secondary",children:"Sign Out"})},p=r.a.createContext(null),g=n.p+"static/media/chatology-logos.2f19b4cd.jpeg",m=n(17),f=n(75),x=n(41),O=n.n(x),v=n(54),k=n(152),w=n(76),y=n.n(w),C=Object(b.a)({root:{},message:{display:"flex",alignItems:"center",textAlign:"left",listStyle:"none"},sent:{flexDirection:"row-reverse",color:"white",background:"#0b93f6",alignSelf:"flex-end"},received:{background:"#22e276",color:"black",alignSelf:"flex-start"},messageStyle:{maxwidth:"500px",marginbottom:"12px",lineheight:"24px",padding:"10px 20px",borderradius:"25px",position:"relative",color:"white",textalign:"center"},image:{width:"40px",height:"40px",borderRadius:"50%",margin:"2px 5px"},date:{display:"flex",width:"100px",padding:"10px",paddingBottom:"20px"},timeSent:{flexDirection:"row-reverse",color:"white",alignSelf:"flex-end"},timeReceived:{color:"black",alignSelf:"flex-start"}});var S=function(e){var t,n,a=e.message,r=a.text,c=a.uid,i=a.photoURL,o=a.createdAt,s=C(),l=c===(null===(t=e.auth)||void 0===t||null===(n=t.currentUser)||void 0===n?void 0:n.uid),u=l?s.sent:s.received,b=l?s.timeSent:s.timeReceived,h=(null===o||void 0===o?void 0:o.toDate().toLocaleTimeString())+" "+(null===o||void 0===o?void 0:o.toDate().toLocaleDateString());return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"".concat(s.message," ").concat(u),children:[Object(d.jsx)("img",{className:s.image,src:i}),Object(d.jsx)("div",{className:s.messageStyle,children:r})]}),Object(d.jsx)("div",{className:"".concat(s.date," ").concat(b),children:h})]})},N=Object(b.a)({form:{height:"10vh",position:"fixed",bottom:0,backgroundColor:"rgb(24, 23, 23)",width:"100%",maxWidth:"728px",display:"flex",fontSize:"1.5rem"},main:{padding:"10px",height:"80vh",margin:"10vh 0 10vh",overflowY:"scroll",display:"flex",flexDirection:"column","&::-webkit-scrollbar-thumb":{background:"#6649b8"},"&::-webkit-scrollbar-track":{background:"#1e1e24"},"&::-webkit-scrollbar":{width:"0.25rem"}},formButton:{width:"20%",backgroundColor:"rgb(56, 56, 143)"},input:{lineHeight:"1.5",width:"100%",fontSize:"1.5rem",background:"rgb(58, 58, 58)",color:"white",outline:"none",border:"none",padding:"0 10px"},goBack:{position:"absolute",margin:"20px"}}),E=function(e){var t=e.messages,n=e.goBackFunc,c=e.auth,i=e.messageRef,s=N(),u=r.a.useRef(null),b=Object(a.useState)(""),h=Object(m.a)(b,2),j=h[0],p=h[1],g=function(){var e=Object(v.a)(O.a.mark((function e(t){var n,a,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!c.currentUser||""==j||null==j){e.next=9;break}return a=c.currentUser,r=a.uid,s=a.photoURL,e.next=5,i.add({text:j,createdAt:o.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:s});case 5:p(""),null===u||void 0===u||null===(n=u.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}),e.next=10;break;case 9:console.log("!!!!!! Send failed due to no current user");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:s.main,children:[Object(d.jsx)(k.a,{className:s.goBack,color:"primary","aria-label":"add",onClick:n,children:Object(d.jsx)(y.a,{})}),t&&t.map((function(e){return Object(d.jsx)(S,{message:e,auth:c},e.id)})),Object(d.jsx)("div",{id:"dummy",ref:u})]}),Object(d.jsxs)("form",{className:s.form,onSubmit:g,children:[Object(d.jsx)("input",{value:j,className:s.input,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)(l.a,{variant:"contained",color:"primary",type:"submit",className:s.formButton,disabled:""===j,children:"Send"})]})]})};var F=function(e){var t=e.goBackFunc,n=s.firestore,c=s.auth,i=n.collection("messages"),o=i.orderBy("createdAt","asc").limitToLast(25),l=Object(f.a)(o,{idField:"id"}),u=Object(m.a)(l,1)[0],b=Object(a.useState)(""),h=Object(m.a)(b,2),j=(h[0],h[1],r.a.useRef(null));return Object(a.useEffect)((function(){var e;null===j||void 0===j||null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[u]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(E,{messages:u,goBackFunc:t,auth:c,messageRef:i})})};var A=n(153),D=n(42),R=n(77),B=n(55),I=n.n(B),L=Object(a.createContext)([{loading:0},function(e){}]);var T="INCREMENT_LOADING",U="DECREMENT_LOADING",H="ADD_ERROR",q=I.a.create({}),z=function(e){var t=Object(a.useState)(null),n=Object(m.a)(t,2),r=(n[0],n[1],Object(a.useContext)(L)),c=Object(m.a)(r,2);Object(R.a)(c[0]);var i=c[1],o=Object(a.useState)(void 0),s=Object(m.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(!0),b=Object(m.a)(u,2),h=b[0],j=b[1],p=Object(a.useState)(void 0),g=Object(m.a)(p,2),f=g[0],x=g[1],k=Object(a.useState)(void 0),w=Object(m.a)(k,2),y=w[0],C=w[1],S=Object(a.useCallback)(Object(v.a)(O.a.mark((function t(){var n,a,r,c,o,s,l,u,b,h,p,g,m,f,v,k,w=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=w.length>0&&void 0!==w[0]?w[0]:{},a=n.successHandler,r=n.errorHandler,c=n.completeHandler,o=n.onCancel,s=n.loadingHandler,l=n.progressHandler,u=n.parameters,b=n.body,h=n.request,p=n.skipLoading,g=void 0!==p&&p,x(void 0),d(void 0),m={},f=e,h&&(f=Object(D.a)(Object(D.a)({},f),h)),f){t.next=9;break}throw new Error("useApi is being used incorrectly! A request object is required");case 9:if(f.url){t.next=11;break}throw new Error("useApi is being used incorrectly! A URL is required");case 11:if(f.method){t.next=13;break}throw new Error("useApi is being used incorrectly! A request type is required");case 13:s&&s(!0),g||i({type:T}),j(!0),v=I.a.CancelToken.source(),C(v),k=Object(D.a)({headers:Object(D.a)({},m),params:Object(D.a)({},u),data:b,onUploadProgress:function(e){l&&l(e)},onDownloadProgress:function(e){l&&l(e)},cancelToken:v.token},f),q(k).then((function(e){x(e.data),a&&a(e.data)})).catch((function(e){I.a.isCancel(e)&&(o&&o(),d(e.response),r?r(e):i({type:H,error:e}))})).finally((function(){C(void 0),c&&c(),s&&s(!1),g||i({type:U}),j(!1)}));case 20:case"end":return t.stop()}}),t)}))),[i,e]);return Object(a.useMemo)((function(){return{call:S,data:f,error:l,loading:h,cancelToken:y}}),[S,y,f,l,h])},G=n(43),P=n.n(G),W=!P.a.env.NODE_ENV||"development"===P.a.env.NODE_ENV,_={method:"GET",url:W?"http://localhost:5001/chat-app-29cc7/us-central1/checkIfUserExists":"https://us-central1-chat-app-29cc7.cloudfunctions.net/checkIfUserExists",params:{text:"johnindbz@gmail.com"}},M=Object(b.a)({chatRoomContainer:{display:"flex",margin:"15px"},addFriendButton:{marginLeft:"15px"}});var V=function(e){var t=e.openDirectChat,n=(s.auth,M()),a=z(_),r=a.call;return a.data,Object(d.jsxs)("div",{className:n.chatRoomContainer,children:[Object(d.jsx)(A.a,{id:"outlined-basic",label:"Enter Friend Email",variant:"outlined",type:"email"}),Object(d.jsx)(l.a,{className:n.addFriendButton,variant:"contained",color:"primary",onClick:function(){r({successHandler:function(e){console.log("!!!!!!!!!",e),t()}})},children:"Add Friend"})]})},J=Object(b.a)({root:{}}),Y="GLOBAL",K="NONE",Z="DIRECT";var Q=function(){s.firestore,s.auth,J();var e=Object(a.useState)(K),t=Object(m.a)(e,2),n=t[0],r=t[1],c=function(){r(K)},i=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V,{openDirectChat:function(){r(Z)}}),Object(d.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){r(Y)},children:"Open Global Chat"})]});return Object(d.jsx)(d.Fragment,{children:function(){switch(n){case Y:return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(F,{goBackFunc:c})});default:return i}}()})},X=Object(b.a)({root:{textAlign:"center",maxWidth:"728px",margin:"0 auto"},header:{backgroundColor:"#181717",height:"10vh",minHeight:"50px",color:"white",position:"fixed",width:"100%",maxWidth:"728px",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px",boxSizing:"border-box",zIndex:99},section:{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"100vh",backgroundColor:"rgb(40, 37, 53)"},title:{padding:"40px",fontSize:"28px"},signOutButton:{justifyContent:"start"}});var $=function(){var e=Object(a.useContext)(p),t=X();return Object(d.jsxs)("div",{className:t.root,children:[Object(d.jsxs)("header",{className:t.header,children:[Object(d.jsx)("img",{width:"60px",src:g}),Object(d.jsx)("div",{className:t.title,children:"Chatology - Redefining chat"}),Object(d.jsx)(j,{})]}),Object(d.jsx)("section",{className:t.section,children:e?Object(d.jsx)(Q,{}):Object(d.jsx)(u,{})})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},te=function(e){var t=e.children,n=Object(a.useState)(null),r=Object(m.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return s.auth.onAuthStateChanged((function(e){i(e)}))}),[]),Object(d.jsx)(p.Provider,{value:c,children:t})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(te,{children:Object(d.jsx)($,{})})}),document.getElementById("root")),ee()},90:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.fbdc9086.chunk.js.map