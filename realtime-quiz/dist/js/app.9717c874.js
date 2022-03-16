(function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),i=s.n(n);i.a},"0448":function(e,t,s){},"184d":function(e,t,s){},"223a":function(e,t,s){"use strict";var n=s("b344"),i=s.n(n);i.a},"38b1":function(e,t,s){},"3b45":function(e,t,s){"use strict";var n=s("b176"),i=s.n(n);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=s("8c4f"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{realtime:e.realtime}})],1)},r=[],o=s("6be2"),l={name:"App",components:{},data:function(){return{realtime:null}},created:function(){this.realtime=new o["Realtime"]({authUrl:"/auth"})},destroyed:function(){this.realtime.connection.close()}},u=l,c=(s("034f"),s("2877")),d=Object(c["a"])(u,a,r,!1,null,null,null),h=d.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.showQuestions?e._e():s("div",{staticClass:"player-home card"},[s("a",{attrs:{href:"https://www.ably.com/",target:"_blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:e.headerImgLink,alt:"Header image"}})]),e.isRoomClosed?e._e():s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v("Hello "+e._s(e.myNickname)+"!")]),e.didPlayerEnterRoom?[s("OnlinePlayers",{attrs:{timer:e.timer,onlinePlayersArr:e.onlinePlayersArr,didHostStartGame:e.didHostStartGame}}),e.didHostStartGame?e._e():s("div",[s("hr"),s("small",{staticClass:"text-muted"},[e._v("Waiting for your host, "),s("strong",[e._v(e._s(e.hostNickname))]),e._v(", to start the quiz")])])]:[s("p",{staticClass:"card-text"},[e._v("We need a nickname so others can identify you")]),s("div",{staticClass:"nickname-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.myNickname,expression:"myNickname"}],staticClass:"form-control host-nickname",attrs:{id:"host-nickname",placeholder:"Enter nickname"},domProps:{value:e.myNickname},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterRoomWithNickname()},input:function(t){t.target.composing||(e.myNickname=t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"button create-random-btn"},on:{click:function(t){return e.enterRoomWithNickname()}}},[e._v(" GO ")])])]],2),e.isRoomClosed?s("div",{staticClass:"card-body"},[e._v(" Sorry this quiz room is no longer available to enter, either because the host is no longer online or the quiz has already started. ")]):e._e(),s("div",{staticClass:"card-footer text-muted div-black"}),e.showQuestions&&!e.showAnswer?s("Question",{attrs:{newQuestion:e.newQuestion,newChoices:e.newChoices,newQuestionNumber:e.newQuestionNumber,isLastQuestion:e.isLastQuestion,questionTimer:e.questionTimer,correctAnswerIndex:e.correctAnswerIndex,showImg:e.showImg,questionImgLink:e.questionImgLink,isAdminView:!1,myInputCh:e.myInputCh},on:{"player-answer":function(t){return e.playerAnswer(t)}}}):e._e(),e.showAnswer?s("Answer",{attrs:{correctAnswer:e.newChoices[e.correctAnswerIndex],didAnswerCorrectly:e.didAnswerCorrectly,isAdminView:!1}}):e._e(),e.showAnswer&&!e.showFinalScreen?s("Leaderboard",{attrs:{leaderboard:e.leaderboard,finalScreen:!1,isPlayer:!0}}):e._e(),!e.showAnswer&&e.showQuestions?s("div",{staticClass:"live-stats"},[s("LiveStats",{attrs:{numAnswered:e.numAnswered,numPlaying:e.numPlaying}})],1):e._e(),e.didHostForceQuizEnd?[e._m(0)]:e._e(),e.showFinalScreen?[s("div",{staticClass:"quiz-end-player"},[e._v(" This quiz has ended ")]),s("div",[s("Leaderboard",{attrs:{isPlayer:!0,leaderboard:e.leaderboard,finalScreen:!0}})],1)]:e._e()],2)])},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-danger alert-quiz-ended",attrs:{role:"alert"}},[e._v(" This quiz has ended "),s("br"),e._v("Either the host has ended it or they have simply left. Please request the host to share a new link. ")])}],y=(s("99af"),s("fb6a"),s("d3b7"),s("25f0"),s("96cf"),s("1da1")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card",class:e.viewType},[s("div",{staticClass:"card-header"},[e._v("Question "+e._s(e.newQuestionNumber))]),s("h2",{staticClass:"question-div card-title"},[e._v(e._s(e.newQuestion))]),e.showImg?s("div",{staticClass:"img-div"},[s("img",{staticClass:"img-fluid q-img",attrs:{src:e.questionImgLink,alt:"Image for the question"}})]):e._e(),e.showAnswer?s("Answer",{attrs:{correctAnswer:e.newChoices[e.correctAnswerIndex],isAdminView:!0}}):e._e(),e.showAnswer?e._e():s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"}),e.answerSubmitted||e.isAdminView?e._e():s("div",{staticClass:"choices-container"},e._l(e.newChoices,(function(t,n){return s("button",{key:t,staticClass:"btn btn-outline-dark choice-btn",attrs:{type:"button"},on:{click:function(s){return e.sendMyAnswer(t,n)}}},[e._v(" "+e._s(t)+" ")])})),0),e.isAdminView?s("div",{staticClass:"choices-container"},e._l(e.newChoices,(function(t){return s("div",{key:t,staticClass:"choice-div"},[e._v(" "+e._s(t)+" ")])})),0):e._e(),e.answerSubmitted?s("div",{staticClass:"submitted-msg"},[s("h5",[e._v(" Your answer is submitted, waiting for everyone else to answer... ")])]):e._e()]),e.isAdminView&&e.showAnswer?e._e():s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated bg-dark",style:{width:e.questionTimer/30*100+"%"},attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"}},[e._v(" "+e._s(e.questionTimer)+" ")])])],1)},b=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card alert answer-div answer-card",class:e.cardColorClass},[e.isAdminView?e._e():s("div",{staticClass:"answer-eval"},[s("i",{staticClass:"fas",class:e.didAnswerCorrectly?"fa-check-circle":"fa-times-circle"}),e._v(" "+e._s(e.evalMessage)+" ")]),e.isAdminView?e._e():s("hr"),s("h5",[e._v("The answer is")]),s("h2",{staticClass:"card-title answer-text"},[e._v(e._s(e.correctAnswer))])])},v=[],C={name:"Answer",props:["correctAnswer","isAdminView","didAnswerCorrectly"],data:function(){return{evalMessage:!0===this.didAnswerCorrectly?"Correct Answer":"Wrong Answer",cardColorClass:null,viewType:1==this.isAdminView?"answer-card-host":"answer-card-player"}},methods:{},created:function(){this.isAdminView?this.cardColorClass="alert-secondary":this.cardColorClass=this.didAnswerCorrectly?"alert-success":"alert-danger"}},g=C,_=(s("3b45"),Object(c["a"])(g,f,v,!1,null,"10651dd2",null)),Q=_.exports,A={name:"Question",components:{Answer:Q},props:["isAdminView","newQuestion","newChoices","newQuestionNumber","isLastQuestion","questionTimer","correctAnswerIndex","myInputCh","showImg","questionImgLink","showAnswer","correctAnswer"],data:function(){return{answerSubmitted:!1,viewType:1==this.isAdminView?"questions-card-host":"questions-card-player"}},methods:{sendMyAnswer:function(e,t){this.isAdminView||(this.answerSubmitted=!0,this.$emit("player-answer",{questionIndex:this.newQuestionNumber-1,playerAnswerIndex:t}),this.myInputCh.publish("player-answer",{questionIndex:this.newQuestionNumber-1,playerAnswerIndex:t,choice:e}))}}},k=A,z=(s("9408"),Object(c["a"])(k,p,b,!1,null,"665da564",null)),R=z.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.didHostStartGame?s("div",[s("h1",[e._v("Your quiz starts in")]),s("h1",{staticClass:"display-3"},[e._v(e._s(e.timer))])]):e._e(),e._v(" You'll see other players as they join "),s("div",{staticClass:"online-players"},e._l(e.onlinePlayersArr,(function(t){return s("div",{key:t.clientId,staticClass:"player-avatar",style:{color:t.avatarColor}},[s("figure",{staticClass:"figure"},[s("i",{staticClass:"fas fa-user-circle fa-3x"}),s("figcaption",{staticClass:"figure-caption"},[e._v(" "+e._s(t.nickname)+" ")])])])})),0)])},x=[],I={props:["timer","onlinePlayersArr","didHostStartGame"]},P=I,L=(s("223a"),Object(c["a"])(P,q,x,!1,null,"2abb634e",null)),T=L.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card text-white bg-dark mb-3 livestats-div"},[s("div",{staticClass:"card-header"},[e._v("Live stats")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.numAnswered)+" of "+e._s(e.numPlaying)+" people have answered this question ")])])])},S=[],E={name:"LiveStats",props:["numAnswered","numPlaying"]},H=E,O=(s("c8d2"),Object(c["a"])(H,N,S,!1,null,"125d4578",null)),j=O.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card text-white bg-success mb-3",class:{"leaderboard-host":!e.isPlayer,"leaderboard-player":e.isPlayer}},[s("div",{staticClass:"card-header"},[s("h3",[e._v(e._s(0==e.finalScreen?"Top 5 scorers":"Final Leaderboard"))])]),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e.leaderboard?s("ol",{staticClass:"score-list"},e._l(e.leaderboard.slice(0,e.leaderNum),(function(t,n){return s("li",{key:n,staticClass:"score-item"},[s("p",[e._v(e._s(t.nickname))]),s("p",[e._v(e._s(t.score))])])})),0):e._e()])])])},U=[],F={name:"Leaderboard",props:["leaderboard","finalScreen","isPlayer"],data:function(){return{leaderNum:this.finalScreen?this.leaderboard.length:5}},created:function(){console.log(this.isPlayer)}},W=F,$=(s("d93f"),Object(c["a"])(W,G,U,!1,null,"5c02cdb0",null)),M=$.exports,V=s("bc3a"),B=s.n(V),Y={name:"WaitingArea",props:["realtime"],components:{Question:R,Answer:Q,OnlinePlayers:T,LiveStats:j,Leaderboard:M},data:function(){return{isRoomClosed:null,quizRoomCode:null,myQuizRoomCh:null,headerImgLink:null,myNickname:"",myAvatarColor:null,didPlayerEnterRoom:!1,onlinePlayersArr:[],hostNickname:null,didHostStartGame:!1,timer:null,showQuestions:!1,newQuestion:null,newChoices:null,newQuestionNumber:null,isLastQuestion:null,questionTimer:30,correctAnswerIndex:null,showAnswer:!1,myClientId:null,didAnswerCorrectly:null,clickedPlayerQuestionIndex:null,clickedPlayerAnswerIndex:null,showImg:!1,questionImgLink:null,didHostForceQuizEnd:!1,numAnswered:0,numPlaying:0,leaderboard:null,showFinalScreen:!1}},methods:{subscribeToQuizRoomChEvents:function(){var e=this;this.myQuizRoomCh.subscribe("new-player",(function(t){e.handleNewPlayerEntered(t)})),this.myQuizRoomCh.subscribe("start-quiz-timer",(function(t){e.didHostStartGame=!0,e.timer=t.data.countDownSec})),this.myQuizRoomCh.subscribe("new-question",(function(t){e.handleNewQuestionReceived(t)})),this.myQuizRoomCh.subscribe("question-timer",(function(t){e.questionTimer=t.data.countDownSec,e.questionTimer<0&&(e.questionTimer=30)})),this.myQuizRoomCh.subscribe("correct-answer",(function(t){e.handleCorrectAnswerReceived(t)})),this.myQuizRoomCh.subscribe("quiz-ending",(function(){e.handleQuizEnding()})),this.myQuizRoomCh.subscribe("live-stats-update",(function(t){e.numAnswered=t.data.numAnswered,e.numPlaying=t.data.numPlaying})),this.myQuizRoomCh.subscribe("full-leaderboard",(function(t){e.leaderboard=t.data.leaderboard}))},handleNewPlayerEntered:function(e){var t=e.data.newPlayerState,s=t.clientId,n=t.nickname,i=t.avatarColor;this.onlinePlayersArr.push({clientId:s,nickname:n,avatarColor:i})},handleNewQuestionReceived:function(e){this.showQuestions=!0,this.showAnswer=!1,this.newQuestionNumber=e.data.questionNumber,this.newQuestion=e.data.question,this.newChoices=e.data.choices,this.isLastQuestion=e.data.isLastQuestion,this.showImg=e.data.showImg,this.questionImgLink=e.data.imgLink,this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying},handleCorrectAnswerReceived:function(e){this.newQuestionNumber==e.data.questionNumber&&(this.correctAnswerIndex=e.data.correctAnswerIndex,this.newQuestionNumber-1==this.clickedPlayerQuestionIndex&&this.clickedPlayerAnswerIndex==this.correctAnswerIndex?this.didAnswerCorrectly=!0:this.didAnswerCorrectly=!1,this.showAnswer=!0),this.isLastQuestion&&(this.showFinalScreen=!0)},handleQuizEnding:function(){this.didHostForceQuizEnd=!0},setUpMyChannel:function(){this.myClientId=this.realtime.auth.clientId,this.myInputCh=this.realtime.channels.get("".concat(this.quizRoomCode,":player-ch-").concat(this.myClientId))},enterRoomWithNickname:function(){this.myQuizRoomCh.presence.enter({nickname:this.myNickname,avatarColor:this.myAvatarColor,isHost:!1}),this.didPlayerEnterRoom=!0,this.getExistingPresenceSet(),this.subscribeToQuizRoomChEvents(),this.setUpMyChannel()},getExistingPresenceSet:function(){var e=this;this.myQuizRoomCh.presence.get((function(t,s){if(t)console.log(t);else for(var n=0;n<s.length;n++){var i=s[n].data,a=i.nickname,r=i.avatarColor,o=i.isHost;o?e.hostNickname=a:e.onlinePlayersArr.push({clientId:s[n].clientId,nickname:a,avatarColor:r,isHost:o})}}))},playerAnswer:function(e){this.clickedPlayerQuestionIndex=e.questionIndex,this.clickedPlayerAnswerIndex=e.playerAnswerIndex}},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.quizRoomCode=e.$route.query.quizCode,t.next=3,B.a.get("/checkRoomStatus?quizCode="+e.quizRoomCode).then((function(t){e.isRoomClosed=t.data.isRoomClosed}));case 3:e.myQuizRoomCh=e.realtime.channels.get("".concat(e.quizRoomCode,":primary")),e.myAvatarColor="#"+Math.random().toString(16).slice(-6);case 5:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.myQuizRoomCh&&this.myQuizRoomCh.presence.leave(),this.questionTimer=30}},D=Y,J=(s("7cd9"),Object(c["a"])(D,m,w,!1,null,"11415be2",null)),Z=J.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isTypeChosen?e._e():s("div",{staticClass:"host-home card"},[s("div",{staticClass:"img-header"},[s("a",{attrs:{href:"https://www.ably.com/",target:"_blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:e.headerImgLink,alt:"Header image"}})])]),s("div",{staticClass:"card-body home-text"},[s("p",{staticClass:"card-text"}),s("p",{staticClass:"card-text"}),e.isSmallWidth?e._e():[s("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(t){return e.setQuizType("RandomQuiz")}}},[e._v(" Host a quiz ")])],e.isSmallWidth?[e._m(0)]:e._e()],2),s("div",{staticClass:"card-footer text-muted footer-black"})]),e.isTypeChosen?[s("CreateQuizRoom",{attrs:{realtime:e.realtime,ablyClientId:e.ablyClientId,quizType:e.quizType,showHome:e.showHome}})]:e._e()],2)},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("small",{staticClass:"mobile-msg"},[e._v(" It looks like you are on a mobile browser, please switch to a desktop to host this quiz."),s("br"),e._v(" Your audience can participate on mobile browsers though. ")])}],ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.showQuestions?e._e():s("div",{staticClass:"host-home card"},[e.isRoomReady?s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v("Your quiz room is ready")]),s("p",{staticClass:"card-text"},[e._v(" Invite your players to join by sharing this link ")]),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.copyPlayerInviteLink()}}},[e._v(" "+e._s(e.copyBtnText)+" "),e.copyClicked?e._e():s("i",{staticClass:"far fa-copy"})]),s("hr"),s("OnlinePlayers",{attrs:{timer:e.timer,onlinePlayersArr:e.onlinePlayersArr,didHostStartGame:e.didHostStartGame}}),e.onlinePlayersArr.length>0?[e.didHostStartGame?e._e():s("div",[s("hr"),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.startQuiz()}}},[e._v(" Start the quiz ")])])]:e._e()],2):s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v(" Host "+e._s("CustomQuiz"===e.quizType?"your own ":"a randomly chosen ")+" quiz ")]),"CustomQuiz"==e.quizType?[s("div",[s("p",{staticClass:"card-text"},[e._v(" You can add your own quiz questions in Google Sheets and host a live quiz. Simply make a copy of the template and fill it with your data. ")]),s("div",{staticClass:"sheets-template"},[s("a",{staticClass:"orange-txt",attrs:{href:e.templateCopyURL,target:"_blank",role:"button"}},[e._v(" Get the Google Sheets template")]),s("p",{staticClass:"card-text template-instructions"},[e._v(" After you've prepared the questions and answers, you need to do two things: "),s("br"),e._v(" 1. Copy the URL of your sheet from the browser's address bar and paste it in the field below "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sheetURL,expression:"sheetURL"}],staticClass:"form-control input-box",attrs:{placeholder:"Add the URL to your sheet",disabled:e.createBtnClicked},domProps:{value:e.sheetURL},on:{input:function(t){t.target.composing||(e.sheetURL=t.target.value)}}}),e._v(" 2. Make your Google sheet publicly available by going to File > Publish to the web > Publish. You might be presented with a different shareable URL, you can ignore that. ")])])])]:e._e(),s("p",{staticClass:"card-text"},[e._v(" We need a nickname for you so the players of your quiz can identify you ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.hostNickname,expression:"hostNickname"}],staticClass:"form-control input-box",attrs:{placeholder:"Enter nickname",disabled:e.createBtnClicked},domProps:{value:e.hostNickname},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createQuizRoom()},input:function(t){t.target.composing||(e.hostNickname=t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"button create-random-btn",disabled:e.createBtnClicked},on:{click:function(t){return e.createQuizRoom()}}},[e._v(" "+e._s(e.btnText)+" ")]),e.sheetURLErr?s("div",{staticClass:"alert alert-danger sheet-error",attrs:{role:"alert"}},[e._v(" There is a problem with the URL to your sheet. Please recheck it per the instructions above, refresh this page and try again. You can reach out to support@ably.com for further assistance. ")]):e._e()],2),s("div",{staticClass:"card-footer text-muted div-black"},[s("button",{staticClass:"btn btn-link back-btn",attrs:{type:"button"},on:{click:function(t){return e.showHome()}}},[e._v(" ← Go back ")])])]),e.showQuestions&&!e.showFinalScreen?s("div",{staticClass:"d-flex bd-highlight"},[s("div",{staticClass:"question-flex bd-highlight"},[s("Question",{attrs:{newQuestion:e.newQuestion,newChoices:e.newChoices,newQuestionNumber:e.newQuestionNumber,isLastQuestion:e.isLastQuestion,questionTimer:e.questionTimer,correctAnswerIndex:e.correctAnswerIndex,showImg:e.showImg,questionImgLink:e.questionImgLink,isAdminView:!0,correctAnswer:e.newChoices[e.correctAnswerIndex],showAnswer:e.showAnswer}})],1),s("div",{staticClass:"stats-flex bd-highlight"},[e.showAnswer?e._e():s("LiveStats",{attrs:{numAnswered:e.numAnswered,numPlaying:e.numPlaying}}),e.showAnswer?s("div",[s("Leaderboard",{attrs:{leaderboard:e.leaderboard,isPlayer:!1,finalScreen:!1}}),s("AdminPanel",{attrs:{hostAdminCh:e.hostAdminCh,prevQuestionNumber:e.newQuestionNumber},on:{"end-quiz-now":function(t){return e.endQuizNow()}}})],1):e._e()],1)]):e._e(),e.showFinalScreen?s("div",{staticClass:"quizEnded"},[e._m(0),s("Leaderboard",{attrs:{leaderboard:e.leaderboard,isPlayer:!1,finalScreen:!0}})],1):e._e()])},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-white end-msg"},[s("h6",[e._v("The quiz has ended")]),s("h1",{staticClass:"display-4"},[e._v("Congratulations to the winners 🎉🎉🎉")])])}],se=(s("4d63"),s("ac1f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-secondary admin-panel",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[e._v("Host control panel")]),s("hr"),s("button",{staticClass:"btn btn-dark btn-next",attrs:{type:"button"},on:{click:function(t){return e.showNextQuestion()}}},[e._v(" Show next question ")]),s("br"),s("button",{staticClass:"btn btn-link end-btn",attrs:{type:"button"},on:{click:function(t){return e.endQuizNow()}}},[e._v(" End quiz and show results ")])])}),ne=[],ie={name:"AdminPanel",props:["hostAdminCh","prevQuestionNumber"],methods:{showNextQuestion:function(){this.hostAdminCh.publish("next-question",{prevQIndex:this.prevQuestionNumber-1})},endQuizNow:function(){this.hostAdminCh.publish("end-quiz-now",{end:!0}),this.$emit("end-quiz-now")}}},ae=ie,re=(s("f709"),Object(c["a"])(ae,se,ne,!1,null,"002967ae",null)),oe=re.exports,le=s("b0c2"),ue={name:"QuizType",props:["resetCmpFn","realtime","quizType","showHome"],components:{Question:R,AdminPanel:oe,LiveStats:j,Leaderboard:M,OnlinePlayers:T},data:function(){return{globalQuizChName:"main-quiz-thread",globalQuizCh:null,myQuizRoomCode:this.getRandomRoomId(),myQuizRoomCh:null,hostAdminCh:"a",hostNickname:null,btnText:"Create my quiz room",createBtnClicked:!1,isRoomReady:!1,playerLinkBase:window.location.href+"play",playerLink:null,copyBtnText:"Copy shareable link",copyClicked:!1,onlinePlayersArr:[],didHostStartGame:!1,timer:null,showQuestions:!1,newQuestionNumber:null,newQuestion:null,newChoices:[],isLastQuestion:null,questionTimer:30,correctAnswerIndex:null,showAnswer:!1,numAnswered:0,numPlaying:0,leaderboard:null,templateCopyURL:"https://docs.google.com/spreadsheets/d/12_Cnv86fI4JOnJq5t9BQmxiPTNZgMsd0PP7Sbjm7WkQ/copy?usp=sharing",sheetURL:"",sheetURLErr:!1,customQuizQuestions:null,showImg:!1,questionImgLink:null,showFinalScreen:!1}},methods:{createQuizRoom:function(){var e=this;if(this.createBtnClicked=!0,"RandomQuiz"===this.quizType)this.btnText="Creating your quiz room...";else{this.btnText="Loading your questions and creating your quiz room...";var t=new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(this.sheetURL)[1];if(null==t||null==this.sheetURL)return void(this.sheetURLErr=!0);var s={sheetId:t,sheetNumber:1,returnAllResults:!0};le(s,(function(t){e.customQuizQuestions=t}),(function(t){e.sheetURLErr=!0,console.log(t)}))}this.waitForGameRoom(),this.enterMainThread()},waitForGameRoom:function(){var e=this;this.myQuizRoomCh=this.realtime.channels.get("".concat(this.myQuizRoomCode,":primary")),this.hostAdminCh=this.realtime.channels.get("".concat(this.myQuizRoomCode,":host")),this.myQuizRoomCh.subscribe("thread-ready",(function(){e.handleQuizRoomReady()}))},handleQuizRoomReady:function(){if(this.isRoomReady=!0,this.globalQuizCh.detach(),this.enterGameRoomAndSubscribeToEvents(),this.playerLink="".concat(this.playerLinkBase,"?quizCode=").concat(this.myQuizRoomCode),"CustomQuiz"==this.quizType){var e=this.customQuizQuestions;this.hostAdminCh.publish("quiz-questions",{questions:e})}},enterGameRoomAndSubscribeToEvents:function(){this.myQuizRoomCh.presence.enter({nickname:this.hostNickname,avatarColor:this.myAvatarColor,isHost:!0,quizType:this.quizType}),this.subscribeToRoomChEvents()},enterMainThread:function(){this.globalQuizCh=this.realtime.channels.get(this.globalQuizChName),this.globalQuizCh.presence.enter({nickname:this.hostNickname,roomCode:this.myQuizRoomCode})},getRandomRoomId:function(){return"room-"+Math.random().toString(36).substr(2,8)},subscribeToRoomChEvents:function(){var e=this;this.myQuizRoomCh.subscribe("new-player",(function(t){e.handleNewPlayerEntered(t)})),this.myQuizRoomCh.subscribe("start-quiz-timer",(function(t){e.didHostStartGame=!0,e.timer=t.data.countDownSec})),this.myQuizRoomCh.subscribe("new-question",(function(t){e.handleNewQuestionReceived(t)})),this.myQuizRoomCh.subscribe("question-timer",(function(t){e.questionTimer=t.data.countDownSec,e.questionTimer<0&&(e.questionTimer=30)})),this.myQuizRoomCh.subscribe("correct-answer",(function(t){e.handleCorrectAnswerReceived(t)})),this.myQuizRoomCh.subscribe("live-stats-update",(function(t){e.numAnswered=t.data.numAnswered,e.numPlaying=t.data.numPlaying})),this.myQuizRoomCh.subscribe("full-leaderboard",(function(t){e.leaderboard=t.data.leaderboard}))},handleNewPlayerEntered:function(e){var t=e.data.newPlayerState,s=t.clientId,n=t.nickname,i=t.avatarColor,a=t.isHost;a||this.onlinePlayersArr.push({clientId:s,nickname:n,avatarColor:i,isHost:a})},handleNewQuestionReceived:function(e){this.showAnswer=!1,this.showQuestions=!0,this.newQuestionNumber=e.data.questionNumber,this.newQuestion=e.data.question,this.newChoices=e.data.choices,this.isLastQuestion=e.data.isLastQuestion,this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying,this.showImg=e.data.showImg,this.questionImgLink=e.data.imgLink},handleCorrectAnswerReceived:function(e){this.showAnswer=!0,this.newQuestionNumber==e.data.questionNumber&&(this.correctAnswerIndex=e.data.correctAnswerIndex),this.isLastQuestion&&(this.showFinalScreen=!0)},copyPlayerInviteLink:function(){var e=this;this.copyClicked=!0,this.copyBtnText="Copied!",setTimeout((function(){e.copyClicked=!1,e.copyBtnText="Copy shareable link"}),2e3),navigator.clipboard.writeText(this.playerLink)},startQuiz:function(){this.hostAdminCh.publish("start-quiz",{start:!0})},endQuizNow:function(){this.showFinalScreen=!0}},beforeDestroy:function(){this.myQuizRoomCh&&this.myQuizRoomCh.presence.leave(),this.questionTimer=30}},ce=ue,de=(s("6f9e"),Object(c["a"])(ce,ee,te,!1,null,"18d71a82",null)),he=de.exports,me={props:["realtime","ablyClientId"],data:function(){return{isTypeChosen:!1,headerImgLink:null,quizType:"",windowWidth:window.innerWidth}},components:{CreateQuizRoom:he},methods:{setQuizType:function(e){this.isTypeChosen=!0,this.quizType=e},showHome:function(){this.isTypeChosen=!1}},computed:{isSmallWidth:function(){return this.windowWidth>480?(console.log(this.windowWidth),!1):(console.log(this.windowWidth),!0)}}},we=me,ye=(s("7519"),Object(c["a"])(we,K,X,!1,null,"d6722a1e",null)),pe=ye.exports,be=[{path:"/play",component:Z},{path:"",component:pe}];n["a"].config.productionTip=!1,n["a"].use(i["a"]);var fe=new i["a"]({routes:be,mode:"history"});new n["a"]({router:fe,render:function(e){return e(h)}}).$mount("#app")},"6f9e":function(e,t,s){"use strict";var n=s("fc8a"),i=s.n(n);i.a},7519:function(e,t,s){"use strict";var n=s("81ee"),i=s.n(n);i.a},"7cd9":function(e,t,s){"use strict";var n=s("184d"),i=s.n(n);i.a},"81ee":function(e,t,s){},"85ec":function(e,t,s){},9408:function(e,t,s){"use strict";var n=s("fa04"),i=s.n(n);i.a},b176:function(e,t,s){},b344:function(e,t,s){},c0f7:function(e,t,s){},c8d2:function(e,t,s){"use strict";var n=s("38b1"),i=s.n(n);i.a},d93f:function(e,t,s){"use strict";var n=s("0448"),i=s.n(n);i.a},f709:function(e,t,s){"use strict";var n=s("c0f7"),i=s.n(n);i.a},fa04:function(e,t,s){},fc8a:function(e,t,s){}});
//# sourceMappingURL=app.9717c874.js.map