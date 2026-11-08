/*! dsh-3d-viewer | entry bundle: Three.js core, OrbitControls, HDRLoader and post-processing (MIT). FBX, OBJ, glTF/GLB and STL loaders are package-local lazy chunks. HDRIs ship as files and are served by the host route in index.js. See THIRD_PARTY_NOTICES.md for third-party licenses. */
window.__ModuleLoader__.load({
  id: "dsh-3d-viewer",
  factory(require) {
    globalThis.__DSH3DV_REQUIRE__ = require;
    var module = { exports: {} };
    var exports = module.exports;
var lm=Object.create;var ba=Object.defineProperty;var cm=Object.getOwnPropertyDescriptor;var hm=Object.getOwnPropertyNames;var um=Object.getPrototypeOf,dm=Object.prototype.hasOwnProperty;var tu=(i,e)=>{for(var t in e)ba(i,t,{get:e[t],enumerable:!0})},nu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of hm(e))!dm.call(i,r)&&r!==t&&ba(i,r,{get:()=>e[r],enumerable:!(n=cm(e,r))||n.enumerable});return i};var ki=(i,e,t)=>(t=i!=null?lm(um(i)):{},nu(e||!i||!i.__esModule?ba(t,"default",{value:i,enumerable:!0}):t,i)),fm=i=>nu(ba({},"__esModule",{value:!0}),i);var xS={};tu(xS,{apply:()=>_S,inject:()=>dS});module.exports=fm(xS);var ph={};tu(ph,{AmbientLight:()=>Ys,AnimationClip:()=>tr,Bone:()=>Ur,Box3:()=>Zt,BufferAttribute:()=>ln,BufferGeometry:()=>hn,Cache:()=>vn,ClampToEdgeWrapping:()=>on,Color:()=>Ie,ColorManagement:()=>Xe,Curve:()=>Ls,DataTexture:()=>It,DataTextureLoader:()=>nr,DataUtils:()=>On,DefaultLoadingManager:()=>cl,DirectionalLight:()=>rr,DoubleSide:()=>Vt,EquirectangularReflectionMapping:()=>Di,Euler:()=>yn,FileLoader:()=>zr,Float32BufferAttribute:()=>Pt,FloatType:()=>vt,FrontSide:()=>Gn,Group:()=>ii,HalfFloatType:()=>bt,ImageBitmapLoader:()=>Ks,ImageLoader:()=>Pi,InstancedBufferAttribute:()=>ji,InstancedMesh:()=>Ts,InterleavedBuffer:()=>bs,InterleavedBufferAttribute:()=>Ss,Interpolant:()=>kn,InterpolateDiscrete:()=>Yi,InterpolateLinear:()=>Cr,Line:()=>$i,LineBasicMaterial:()=>Fr,LineLoop:()=>As,LineSegments:()=>Es,LinearFilter:()=>it,LinearMipmapLinearFilter:()=>dn,LinearMipmapNearestFilter:()=>qr,LinearSRGBColorSpace:()=>ai,Loader:()=>An,LoaderUtils:()=>Zs,LoadingManager:()=>Ci,Material:()=>Qt,MathUtils:()=>oa,Matrix3:()=>Ue,Matrix4:()=>Ge,Mesh:()=>xt,MeshBasicMaterial:()=>Ti,MeshLambertMaterial:()=>zs,MeshPhongMaterial:()=>ks,MeshPhysicalMaterial:()=>Bs,MeshStandardMaterial:()=>ci,MirroredRepeatWrapping:()=>Rr,NearestFilter:()=>pt,NearestMipmapLinearFilter:()=>lr,NearestMipmapNearestFilter:()=>So,NoColorSpace:()=>At,NumberKeyframeTrack:()=>Ai,Object3D:()=>_t,OrthographicCamera:()=>Dn,PerspectiveCamera:()=>Ct,PointLight:()=>qs,Points:()=>Rs,PointsMaterial:()=>Or,PropertyBinding:()=>nt,Quaternion:()=>Bt,QuaternionKeyframeTrack:()=>Ri,RGBAFormat:()=>St,RGFormat:()=>Hn,RedFormat:()=>Ni,RepeatWrapping:()=>Tn,SRGBColorSpace:()=>Rt,ShapeUtils:()=>Fs,Skeleton:()=>ws,SkinnedMesh:()=>Ms,Sphere:()=>cn,SpotLight:()=>Xs,Texture:()=>kt,TextureLoader:()=>Hs,TriangleFanDrawMode:()=>Wc,TriangleStripDrawMode:()=>Hc,TrianglesDrawMode:()=>Vc,Uint16BufferAttribute:()=>Ji,UnsignedByteType:()=>ut,Vector2:()=>Re,Vector3:()=>O,Vector4:()=>Je,VectorKeyframeTrack:()=>er});var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,Mc=1,Yu=2;var sr=1,Zu=2,Hr=3,Gn=0,tn=1,Vt=2,di=0,Wr=1,wc=2,Tc=3,Ec=4,Ku=5;var ar=100,Ju=101,ju=102,$u=103,Qu=104,ed=200,td=201,nd=202,id=203,Ac=204,Rc=205,rd=206,sd=207,ad=208,od=209,ld=210,cd=211,hd=212,ud=213,dd=214,ja=0,$a=1,Qa=2,Ar=3,eo=4,to=5,no=6,io=7,Qs=0,fd=1,pd=2,Vn=0,Cc=1,Pc=2,Ic=3,ea=4,Lc=5,Dc=6,Nc=7,uc="attached",md="detached",Uc=300,or=301,Xr=302,Di=303,bo=304,Tn=1e3,on=1001,Rr=1002,pt=1003,So=1004;var lr=1005;var it=1006,qr=1007;var dn=1008;var ut=1009,Fc=1010,Oc=1011,Yr=1012,Mo=1013,Nn=1014,vt=1015,bt=1016,wo=1017,To=1018,cr=1020,Bc=35902,kc=35899,zc=1021,Gc=1022,St=1023,si=1026,fi=1027,Ni=1028,Eo=1029,Hn=1030,Ao=1031;var Ro=1033,ta=33776,na=33777,ia=33778,ra=33779,Co=35840,Po=35841,Io=35842,Lo=35843,Do=36196,No=37492,Uo=37496,Fo=37488,Oo=37489,sa=37490,Bo=37491,ko=37808,zo=37809,Go=37810,Vo=37811,Ho=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,Zo=37817,Ko=37818,Jo=37819,jo=37820,$o=37821,Qo=36492,el=36494,tl=36495,nl=36283,il=36284,aa=36285,rl=36286,gd=2200,sl=2201,_d=2202,Yi=2300,Cr=2301,Ka=2302,dc=2303,Wi=2400,Xi=2401,ms=2402,al=2500,xd=2501,Vc=0,Hc=1,Wc=2,vd=3200;var Zr=0,yd=1,At="",Rt="srgb",ai="srgb-linear",gs="linear",Qe="srgb";var Ja=7680;var bd=519,Sd=512,Md=513,wd=514,Xc=515,Td=516,Ed=517,qc=518,Yc=519,Zc=35044;var Kc="300 es",wn=2e3,Pr=2001;function pm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){let i=Ir("canvas");return i.style.display="block",i}var iu={},Lr=null;function _s(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function Rd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Rd(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=Rd(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){let e=i.join(" ");e in iu||(iu[e]=!0,Ee(...i))}function Cd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Pd={[ja]:ja,[Qa]:no,[eo]:eo,[Ar]:to,[$a]:$a,[no]:Qa,[io]:io,[to]:Ar},En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,fs=Math.PI/180,Zi=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function Jc(i,e){return(i%e+e)%e}function gm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function _m(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function xm(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function vm(i,e=1){return e-Math.abs(Jc(i,e*2)-e)}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mm(i,e){return i+Math.random()*(e-i)}function wm(i){return i*(.5-Math.random())}function Tm(i){i!==void 0&&(ru=i);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(i){return i*fs}function Am(i){return i*Zi}function Rm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pm(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ol(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $c(i,e){if(e.constructor===Float32Array)return i;let t=ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Qc(i,e){if(e.constructor===Float32Array)return i;let t=ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var oa={DEG2RAD:fs,RAD2DEG:Zi,generateUUID:Wn,clamp:Be,euclideanModulo:Jc,mapLinear:gm,inverseLerp:_m,lerp:ps,damp:xm,pingpong:vm,smoothstep:ym,smootherstep:bm,randInt:Sm,randFloat:Mm,randFloatSpread:wm,seededRandom:Tm,degToRad:Em,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:jc,setQuaternionFromProperEuler:Pm,normalize:Qc,denormalize:$c},Re=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[a+0],d=s[a+1],p=s[a+2],v=s[a+3];if(u!==v||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+v*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new O,su=new Bt,Ue=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=r[0],g=r[3],m=r[6],S=r[1],w=r[4],b=r[7],E=r[2],T=r[5],_=r[8];return s[0]=a*v+o*S+l*E,s[3]=a*g+o*w+l*T,s[6]=a*m+o*b+l*_,s[1]=c*v+h*S+u*E,s[4]=c*g+h*w+u*T,s[7]=c*m+h*b+u*_,s[2]=f*v+d*S+p*E,s[5]=f*g+d*w+p*T,s[8]=f*m+d*b+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,p=t*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new Ue,au=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Im(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===At?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:gs,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var Xe=Im();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Ir("canvas")),dr.width=e.width,dr.height=e.height;let r=dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lm=0,Dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hl(r[a].image)):s.push(Hl(r[a]))}else s=Hl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var Dm=0,Wl=new O,kt=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,r=on,s=it,a=dn,o=St,l=ut,c=i.DEFAULT_ANISOTROPY,h=At){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Wn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Uc;kt.DEFAULT_ANISOTROPY=1;var Je=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(d+1)/2,E=(m+1)/2,T=(h+f)/4,_=(u+v)/4,M=(p+g)/4;return w>b&&w>E?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=T/n,s=_/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=M/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=_/s,r=M/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends En{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:it,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new kt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:it,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends so{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xs=class extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ge=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,l,c,h,u,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,d,p,v,g)}set(e,t,n,r,s,a,o,l,c,h,u,f,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nm,e,Um)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),xi.crossVectors(n,gn),xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),xi.crossVectors(n,gn)),xi.normalize(),Sa.crossVectors(gn,xi),r[0]=xi.x,r[4]=Sa.x,r[8]=gn.x,r[1]=xi.y,r[5]=Sa.y,r[9]=gn.y,r[2]=xi.z,r[6]=Sa.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],w=n[7],b=n[11],E=n[15],T=r[0],_=r[4],M=r[8],D=r[12],C=r[1],P=r[5],F=r[9],k=r[13],R=r[2],B=r[6],G=r[10],H=r[14],ne=r[3],W=r[7],Y=r[11],X=r[15];return s[0]=a*T+o*C+l*R+c*ne,s[4]=a*_+o*P+l*B+c*W,s[8]=a*M+o*F+l*G+c*Y,s[12]=a*D+o*k+l*H+c*X,s[1]=h*T+u*C+f*R+d*ne,s[5]=h*_+u*P+f*B+d*W,s[9]=h*M+u*F+f*G+d*Y,s[13]=h*D+u*k+f*H+d*X,s[2]=p*T+v*C+g*R+m*ne,s[6]=p*_+v*P+g*B+m*W,s[10]=p*M+v*F+g*G+m*Y,s[14]=p*D+v*k+g*H+m*X,s[3]=S*T+w*C+b*R+E*ne,s[7]=S*_+w*P+b*B+E*W,s[11]=S*M+w*F+b*G+E*Y,s[15]=S*D+w*k+b*H+E*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15],S=l*d-c*f,w=o*d-c*u,b=o*f-l*u,E=a*d-c*h,T=a*f-l*h,_=a*u-o*h;return t*(v*S-g*w+m*b)-n*(p*S-g*E+m*T)+r*(p*w-v*E+m*_)-s*(p*b-v*T+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],S=t*o-n*a,w=t*l-r*a,b=t*c-s*a,E=n*l-r*o,T=n*c-s*o,_=r*c-s*l,M=h*v-u*p,D=h*g-f*p,C=h*m-d*p,P=u*g-f*v,F=u*m-d*v,k=f*m-d*g,R=S*k-w*F+b*P+E*C-T*D+_*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return e[0]=(o*k-l*F+c*P)*B,e[1]=(r*F-n*k-s*P)*B,e[2]=(v*_-g*T+m*E)*B,e[3]=(f*T-u*_-d*E)*B,e[4]=(l*C-a*k-c*D)*B,e[5]=(t*k-r*C+s*D)*B,e[6]=(g*b-p*_-m*w)*B,e[7]=(h*_-f*b+d*w)*B,e[8]=(a*F-o*C+c*M)*B,e[9]=(n*C-t*F-s*M)*B,e[10]=(p*T-v*b+m*S)*B,e[11]=(u*b-h*T-d*S)*B,e[12]=(o*D-a*P-l*M)*B,e[13]=(t*P-n*D+r*M)*B,e[14]=(v*w-p*E-g*S)*B,e[15]=(h*E-u*w+f*S)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,p=s*u,v=a*h,g=a*u,m=o*u,S=l*c,w=l*h,b=l*u,E=n.x,T=n.y,_=n.z;return r[0]=(1-(v+m))*E,r[1]=(d+b)*E,r[2]=(p-w)*E,r[3]=0,r[4]=(d-b)*T,r[5]=(1-(f+m))*T,r[6]=(g+S)*T,r[7]=0,r[8]=(p+w)*_,r[9]=(g-S)*_,r[10]=(1-(f+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=fr.set(r[0],r[1],r[2]).length(),o=fr.set(r[4],r[5],r[6]).length(),l=fr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);let c=1/a,h=1/o,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=wn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),p,v;if(l)p=s/(a-s),v=a*s/(a-s);else if(o===wn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Pr)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=wn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),p,v;if(l)p=1/(a-s),v=a/(a-s);else if(o===wn)p=-2/(a-s),v=-(a+s)/(a-s);else if(o===Pr)p=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fr=new O,Pn=new Ge,Nm=new O(0,0,0),Um=new O(1,1,1),xi=new O,Sa=new O,gn=new O,lu=new Ge,cu=new Bt,yn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fm=0,hu=new O,pr=new Bt,Jn=new Ge,Ma=new O,is=new O,Om=new O,Bm=new Bt,uu=new O(1,0,0),du=new O(0,1,0),fu=new O(0,0,1),pu={type:"added"},km={type:"removed"},mr={type:"childadded",child:null},Xl={type:"childremoved",child:null},_t=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new yn,n=new Bt,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ue}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(is,Ma,this.up):Jn.lookAt(Ma,is,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Jn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),mr.child=e,this.dispatchEvent(mr),mr.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new O(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},zm={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ql(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Jc(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Xe.workingToColorSpace(Yt.copy(this),e),Math.round(Be(Yt.r*255,0,255))*65536+Math.round(Be(Yt.g*255,0,255))*256+Math.round(Be(Yt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Rt){Xe.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,r=Yt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(wa);let n=ps(vi.h,wa.h,t),r=ps(vi.s,wa.s,t),s=ps(vi.l,wa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ie;Ie.NAMES=Id;var Ki=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new O,jn=new O,Yl=new O,$n=new O,gr=new O,_r=new O,mu=new O,Zl=new O,Kl=new O,Jl=new O,jl=new Je,$l=new Je,Ql=new Je,wi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),jn.subVectors(n,t),Yl.subVectors(e,t);let a=In.dot(In),o=In.dot(jn),l=In.dot(Yl),c=jn.dot(jn),h=jn.dot(Yl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return jl.setScalar(0),$l.setScalar(0),Ql.setScalar(0),jl.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jl,s.x),a.addScaledVector($l,s.y),a.addScaledVector(Ql,s.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),jn.subVectors(e,t),In.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),In.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;gr.subVectors(r,n),_r.subVectors(s,n),Zl.subVectors(e,n);let l=gr.dot(Zl),c=_r.dot(Zl);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,r);let h=gr.dot(Kl),u=_r.dot(Kl);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(gr,a);Jl.subVectors(e,s);let d=gr.dot(Jl),p=_r.dot(Jl);if(p>=0&&d<=p)return t.copy(s);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_r,o);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return mu.subVectors(s,r),o=(u-h)/(u-h+(d-p)),t.copy(r).addScaledVector(mu,o);let m=1/(g+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(gr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Ea.subVectors(this.max,rs),xr.subVectors(e.a,rs),vr.subVectors(e.b,rs),yr.subVectors(e.c,rs),yi.subVectors(vr,xr),bi.subVectors(yr,vr),zi.subVectors(xr,yr);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-zi.z,zi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,zi.z,0,-zi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-zi.y,zi.x,0];return!ec(t,xr,vr,yr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,xr,vr,yr,Ea))?!1:(Aa.crossVectors(yi,bi),t=[Aa.x,Aa.y,Aa.z],ec(t,xr,vr,yr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,Ta=new Zt,xr=new O,vr=new O,yr=new O,yi=new O,bi=new O,zi=new O,rs=new O,Ea=new O,Aa=new O,Gi=new O;function ec(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gi.fromArray(i,s);let o=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ni=Gm();function Gm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Vm(i){Math.abs(i)>65504&&Ee("DataUtils.toHalfFloat(): Value out of range."),i=Be(i,-65504,65504),ni.floatView[0]=i;let e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((e&8388607)>>ni.shiftTable[t])}function Hm(i){let e=i>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(i&1023)]+ni.exponentTable[e],ni.floatView[0]}var On=class{static toHalfFloat(e){return Vm(e)}static fromHalfFloat(e){return Hm(e)}},Et=new O,Ra=new Re,Wm=0,ln=class extends En{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=vt,this.version=0,this._normalizationScale=e!==void 0?ol(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$c(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qc(e,this.array)}};var Ji=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ys=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pt=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xm=new Zt,ss=new O,tc=new O,cn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);let t=ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ss,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(tc)),this.expandByPoint(ss.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qm=0,Mn=new Ge,nc=new _t,br=new O,_n=new Zt,as=new Zt,Ot=new O,hn=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pm(e)?ys:Ji)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(_n.min,as.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,as.max),_n.expandByPoint(Ot)):(_n.expandByPoint(as.min),_n.expandByPoint(as.max))}_n.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),Ot.add(br)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new O,l[D]=new O;let h=new O,u=new O,f=new O,d=new Re,p=new Re,v=new Re,g=new O,m=new O;function S(D,C,P){c[D]=c[C]=c[P]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,P),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,P),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let F=1/(p.x*v.y-v.x*p.y);isFinite(F)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(F),o[D].add(g),o[C].add(g),o[P].add(g),l[D].add(m),l[C].add(m),l[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,C=w.length;D<C;++D){let P=w[D],F=P.start,k=P.count;for(let R=F,B=F+k;R<B;R+=3)S(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new O,E=new O,T=new O,_=new O;function M(D){T.fromBufferAttribute(r,D),_.copy(T);let C=o[D];b.copy(C),b.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(_,C);let F=E.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,F)}for(let D=0,C=n.count;D<C;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ln(f,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function gu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Wn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var jt=new O,Ss=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?ol(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$c(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qc(e,this.data.array)}},ic=new O,Ym=new O,Zm=new Ue,xn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ic.subVectors(n,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ic),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zm.getNormalMatrix(e),r=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Km=0,Qt=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Wr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ei=new O,rc=new O,Ca=new O,Pa=new O,oi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(rc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Pa.dot(this.direction),l=-Pa.dot(Ca),c=Pa.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rc).addScaledVector(Ca,f),d}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,b=Math.abs(l),E=Math.abs(c),T=Math.abs(h),_,M,D,C,P,F,k,R,B,G,H,ne;if(b>=E&&b>=T?(D=l,F=u,B=p,ne=m,l>=0?(_=c,M=h,C=f,P=d,k=v,R=g,G=S,H=w):(_=h,M=c,C=d,P=f,k=g,R=v,G=w,H=S)):E>=T?(D=c,F=f,B=v,ne=S,c>=0?(_=h,M=l,C=d,P=u,k=g,R=p,G=w,H=m):(_=l,M=h,C=u,P=d,k=p,R=g,G=m,H=w)):(D=h,F=d,B=g,ne=w,h>=0?(_=l,M=c,C=u,P=f,k=p,R=v,G=m,H=S):(_=c,M=l,C=f,P=u,k=v,R=p,G=S,H=m)),D===0)return null;let W=_/D,Y=M/D,X=1/D,te=C-W*F,pe=P-Y*F,Z=k-W*B,ie=R-Y*B,ge=G-W*ne,we=H-Y*ne,le=ge*ie-we*Z,Ce=te*we-pe*ge,et=Z*pe-ie*te;if(r){if(le<0||Ce<0||et<0)return null}else if((le<0||Ce<0||et<0)&&(le>0||Ce>0||et>0))return null;let ve=le+Ce+et;if(ve===0)return null;let Ve=X*(le*F+Ce*B+et*ne);return(ve>0?Ve<0:Ve>0)?null:this.at(Ve/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ti=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_u=new Ge,Vi=new oi,Ia=new cn,xu=new O,La=new O,Da=new O,Na=new O,sc=new O,Ua=new O,vu=new O,Fa=new O,xt=class extends _t{constructor(e=new hn,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(sc.fromBufferAttribute(u,e),a?Ua.addScaledVector(sc,h):Ua.addScaledVector(sc.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ia,xu)===null||Vi.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(_u.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=S,E=w;b<E;b+=3){let T=o.getX(b),_=o.getX(b+1),M=o.getX(b+2);r=Oa(this,m,e,n,c,h,u,T,_,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=o.getX(g),w=o.getX(g+1),b=o.getX(g+2);r=Oa(this,a,e,n,c,h,u,S,w,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=S,E=w;b<E;b+=3){let T=b,_=b+1,M=b+2;r=Oa(this,m,e,n,c,h,u,T,_,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=g,w=g+1,b=g+2;r=Oa(this,a,e,n,c,h,u,S,w,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Jm(i,e,t,n,r,s,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Gn,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:i}}function Oa(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let h=Jm(i,e,t,n,La,Da,Na,vu);if(h){let u=new O;wi.getBarycoord(vu,La,Da,Na,u),r&&(h.uv=wi.getInterpolatedAttribute(r,o,l,c,u,new Re)),s&&(h.uv1=wi.getInterpolatedAttribute(s,o,l,c,u,new Re)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};wi.getNormal(La,Da,Na,f.normal),h.face=f,h.barycoord=u}return h}var os=new Je,yu=new Je,bu=new Je,jm=new Je,Su=new Ge,Ba=new O,ac=new cn,Mu=new Ge,oc=new oi,Ms=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ac.copy(this.boundingSphere),ac.applyMatrix4(r),e.ray.intersectsSphere(ac)!==!1&&(Mu.copy(r).invert(),oc.copy(e.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===md?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;yu.fromBufferAttribute(r.attributes.skinIndex,e),bu.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(os.copy(t),t.set(0,0,0,0)):(os.set(t.x,t.y,t.z,1),t.set(0,0,0)),os.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=bu.getComponent(s);if(a!==0){let o=yu.getComponent(s);Su.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(jm.copy(os).applyMatrix4(Su),a)}}return t.isVector4&&(t.w=os.w),t.applyMatrix4(this.bindMatrixInverse)}},Ur=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},It=class extends kt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=pt,h=pt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wu=new Ge,$m=new Ge,ws=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:$m;wu.multiplyMatrices(o,t[s]),wu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new It(t,e,e,St,vt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ee("Skeleton: No bone found with UUID:",s),a=new Ur),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},ji=class extends ln{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Ge,Tu=new Ge,ka=[],Eu=new Zt,Qm=new Ge,ls=new xt,cs=new cn,Ts=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Eu.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),cs.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Sr),Tu.multiplyMatrices(n,Sr),ls.matrixWorld=Tu,ls.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=s,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new It(new Float32Array(r*this.count),r,this.count,Ni,vt));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new cn,eg=new Re(.5,.5),za=new O,Ei=class{constructor(e=new xn,t=new xn,n=new xn,r=new xn,s=new xn,a=new xn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],v=s[9],g=s[10],m=s[11],S=s[12],w=s[13],b=s[14],E=s[15];if(r[0].setComponents(c-a,d-h,m-p,E-S).normalize(),r[1].setComponents(c+a,d+h,m+p,E+S).normalize(),r[2].setComponents(c+o,d+u,m+v,E+w).normalize(),r[3].setComponents(c-o,d-u,m-v,E-w).normalize(),n)r[4].setComponents(l,f,g,b).normalize(),r[5].setComponents(c-l,d-f,m-g,E-b).normalize();else if(r[4].setComponents(c-l,d-f,m-g,E-b).normalize(),t===wn)r[5].setComponents(c+l,d+f,m+g,E+b).normalize();else if(t===Pr)r[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=eg.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Au=new Ge,oo=class i{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Au.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Ei),n[r].setFromProjectionMatrix(Au,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ei),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Fr=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new O,co=new O,Ru=new Ge,hs=new oi,Ga=new cn,lc=new O,Cu=new O,$i=class extends _t{constructor(e=new hn,t=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)lo.fromBufferAttribute(t,r-1),co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Pt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;Ru.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Ru);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){let m=h.getX(v),S=h.getX(v+1),w=Va(this,e,hs,l,m,S,v);w&&t.push(w)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(d),m=Va(this,e,hs,l,v,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){let m=Va(this,e,hs,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Va(this,e,hs,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Va(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,r),co.fromBufferAttribute(o,s),t.distanceSqToSegment(lo,co,lc,Cu)>n)return;lc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(lc);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Pu=new O,Iu=new O,Es=class extends $i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Pu.fromBufferAttribute(t,r),Iu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new Pt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},As=class extends $i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Or=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lu=new Ge,fc=new oi,Ha=new cn,Wa=new O,Rs=class extends _t{constructor(e=new hn,t=new Or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Lu.copy(r).invert(),fc.copy(e.ray).applyMatrix4(Lu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,v=d;p<v;p++){let g=c.getX(p);Wa.fromBufferAttribute(u,g),Du(Wa,g,l,r,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,v=d;p<v;p++)Wa.fromBufferAttribute(u,p),Du(Wa,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Du(i,e,t,n,r,s,a){let o=fc.distanceSqToPoint(i);if(o<t){let l=new O;fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Cs=class extends kt{constructor(e=[],t=or,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var li=class extends kt{constructor(e,t,n=Nn,r,s,a,o=pt,l=pt,c,h=si,u=1){if(h!==si&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ps=class extends li{constructor(e,t=Nn,n=or,r,s,a=pt,o=pt,l,c=si){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Is=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Br=class i extends hn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,r,a,2),p("x","z","y",1,-1,e,n,-t,r,a,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function p(v,g,m,S,w,b,E,T,_,M,D){let C=b/_,P=E/M,F=b/2,k=E/2,R=T/2,B=_+1,G=M+1,H=0,ne=0,W=new O;for(let Y=0;Y<G;Y++){let X=Y*P-k;for(let te=0;te<B;te++){let pe=te*C-F;W[v]=pe*S,W[g]=X*w,W[m]=R,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[m]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(te/_),u.push(1-Y/M),H+=1}}for(let Y=0;Y<M;Y++)for(let X=0;X<_;X++){let te=f+X+B*Y,pe=f+X+B*(Y+1),Z=f+(X+1)+B*(Y+1),ie=f+(X+1)+B*Y;l.push(te,pe,ie),l.push(pe,Z,ie),ne+=6}o.addGroup(d,ne,D),d+=ne,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ls=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(a-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Re:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,r=[],s=[],a=[],o=new O,l=new Ge;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Be(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Be(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function tg(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ld(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=ag(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<r;f+=t){let d=i[f],p=i[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ds(s,a,t,o,l,c,0),a}function Ld(i,e,t,n,r){let s;if(r===_g(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Nu(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Nu(a/n|0,i[a],i[a+1],s);return s&&kr(s,s.next)&&(Us(s),s=s.next),s}function Qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||ft(t.prev,t,t.next)===0)){if(Us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ds(i,e,t,n,r,s,a){if(!i)return;!a&&s&&ug(i,n,r,s);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?ig(i,n,r,s):ng(i)){e.push(l.i,i.i,c.i),Us(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rg(Qi(i),e),Ds(i,e,t,n,r,s,2)):a===2&&sg(i,e,t,n,r,s):Ds(Qi(i),e,t,n,r,s,1);break}}}function ng(i){let e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(r,s,a),u=Math.min(o,l,c),f=Math.max(r,s,a),d=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&us(r,o,s,l,a,c,p.x,p.y)&&ft(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ig(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ft(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),v=Math.max(o,l,c),g=Math.max(h,u,f),m=pc(d,p,e,t,n),S=pc(v,g,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=m&&b&&b.z<=S;){if(w.x>=d&&w.x<=v&&w.y>=p&&w.y<=g&&w!==r&&w!==a&&us(o,h,l,u,c,f,w.x,w.y)&&ft(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=d&&b.x<=v&&b.y>=p&&b.y<=g&&b!==r&&b!==a&&us(o,h,l,u,c,f,b.x,b.y)&&ft(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=v&&w.y>=p&&w.y<=g&&w!==r&&w!==a&&us(o,h,l,u,c,f,w.x,w.y)&&ft(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=g&&b!==r&&b!==a&&us(o,h,l,u,c,f,b.x,b.y)&&ft(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function rg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!kr(n,r)&&Nd(n,t,t.next,r)&&Ns(n,r)&&Ns(r,n)&&(e.push(n.i,t.i,r.i),Us(t),Us(t.next),t=i=r),t=t.next}while(t!==i);return Qi(t)}function sg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pg(a,o)){let l=Ud(a,o);a=Qi(a,a.next),l=Qi(l,l.next),Ds(a,e,t,n,r,s,0),Ds(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function ag(i,e,t,n){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Ld(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(fg(c))}r.sort(og);for(let s=0;s<r.length;s++)t=lg(r[s],t);return t}function og(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function lg(i,e){let t=cg(i,e);if(!t)return e;let n=Ud(t,i);return Qi(n,n.next),Qi(t,t.next)}function cg(i,e){let t=e,n=i.x,r=i.y,s=-1/0,a;if(kr(i,t))return t;do{if(kr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dd(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);Ns(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&hg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function hg(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function ug(i,e,t,n){let r=i;do r.z===0&&(r.z=pc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,dg(r)}function dg(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function pc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Dd(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function us(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Dd(i,e,t,n,r,s,a,o)}function pg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mg(i,e)&&(Ns(i,e)&&Ns(e,i)&&gg(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||kr(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function Nd(i,e,t,n){let r=qa(ft(i,e,t)),s=qa(ft(i,e,n)),a=qa(ft(t,n,i)),o=qa(ft(t,n,e));return!!(r!==s&&a!==o||r===0&&Xa(i,t,e)||s===0&&Xa(i,n,e)||a===0&&Xa(t,i,n)||o===0&&Xa(t,e,n))}function Xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qa(i){return i>0?1:i<0?-1:0}function mg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function gg(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=mc(i.i,i.x,i.y),n=mc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Nu(i,e,t,n){let r=mc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _g(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}var gc=class{static triangulate(e,t,n=2){return tg(e,t,n)}},Fs=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Uu(e),Fu(n,e);let a=e.length;t.forEach(Uu);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Fu(n,t[l]);let o=gc.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Uu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bn=class i extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let S=m*f-a;for(let w=0;w<c;w++){let b=w*u-s;p.push(b,-S,0),v.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let w=S+c*m,b=S+c*(m+1),E=S+1+c*(m+1),T=S+1+c*m;d.push(w,b,T),d.push(b,E,T)}this.setIndex(d),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Os=class extends Qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ou(r))r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ou(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let r in n)e[r]=n[r]}return e}function Ou(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var ll={clone:hr,merge:Kt},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(r.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ci=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bs=class extends ci{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ks=class extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zs=class extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uo=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fo=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ds(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function bg(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Bu(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Sg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var kn=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends kn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wi,endingEnd:Wi}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xi:s=e,o=2*t-n;break;case ms:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xi:a=e,l=2*n-t;break;case ms:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(r-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,S=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,w=(-1-d)*g+(1.5+d)*v+.5*p,b=d*g-d*v;for(let E=0;E!==o;++E)s[E]=m*a[h+E]+S*a[c+E]+w*a[l+E]+b*a[u+E];return s}},Gs=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},mo=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},go=class extends kn{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(r-t),v=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*v+a[l+g]*p;return s}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let v=a[c+p],g=a[l+p],m=d*f+p*2,S=u[m],w=u[m+1],b=e*f+p*2,E=h[b],T=h[b+1],_=wg(n,t,S,E,r);s[p]=Fd(_,v,w,T,g)}return s}};function Fd(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Mg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function wg(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Fd(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let l=Mg(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mi(t,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mi(e.times,Array),values:Mi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),ds(e.settings)&&(n.settings={inTangents:Mi(e.settings.inTangents,Array),outTangents:Mi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break;case dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ds(this.settings)&&(ku(this.settings.inTangents,e),ku(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ds(this.settings)&&(zu(this.settings.inTangents,e),zu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&mm(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ka,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ds(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ku(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function zu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Cr;var hi=class extends un{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Yi;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends un{constructor(e,t,n,r){super(e,t,n,r)}};Vs.prototype.ValueTypeName="color";var Ai=class extends un{constructor(e,t,n,r){super(e,t,n,r)}};Ai.prototype.ValueTypeName="number";var _o=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ri=class extends un{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends un{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Yi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends un{constructor(e,t,n,r){super(e,t,n,r)}};er.prototype.ValueTypeName="vector";var tr=class{constructor(e="",t=-1,n=[],r=al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Eg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(un.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=bg(l);l=Bu(l,1,h),c=Bu(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ai(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],f=r[u];f||(r[u]=f=[]),f.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return Vs;case"quaternion":return Ri;case"bool":case"boolean":return hi;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Eg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tg(i.type);if(i.times===void 0){let n=[],r=[];Sg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ds(i.settings)&&(t.settings={inTangents:Mi(i.settings.inTangents,Float32Array),outTangents:Mi(i.settings.outTangents,Float32Array)}),t}var vn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ci=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cl=new Ci,An=class{constructor(e){this.manager=e!==void 0?e:cl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};An.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},_c=class extends Error{constructor(e,t){super(e),this.response=t}},zr=class extends An{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=vn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:r});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ti[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,v=0,g=new ReadableStream({start(m){S();function S(){u.read().then(({done:w,value:b})=>{if(w)m.close();else{v+=b.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let T=0,_=h.length;T<_;T++){let M=h[T];M.onProgress&&M.onProgress(E)}m.enqueue(b),S()}},w=>{m.error(w)})}}});return new Response(g)}else throw new _c(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{vn.add(`file:${e}`,c);let h=ti[e];delete ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mr=new WeakMap,Pi=class extends An{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Mr.get(a);u===void 0&&(u=[],Mr.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Ir("img");function l(){h(),t&&t(this);let u=Mr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Mr.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),vn.remove(`image:${e}`);let f=Mr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Mr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var nr=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new It,o=new zr(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){r!==void 0?r(h):Ne(h);return}s._applyTexData(a,c),t&&t(a,c)},n,r),a}createDataTexture(e){let t=new It;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:on,e.wrapT=t.wrapT!==void 0?t.wrapT:on,e.magFilter=t.magFilter!==void 0?t.magFilter:it,e.minFilter=t.minFilter!==void 0?t.minFilter:it,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=dn),t.mipmapCount===1&&(e.minFilter=it),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Hs=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=new kt,a=new Pi(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ir=class extends _t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var cc=new Ge,Vu=new O,Hu=new O,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=ut,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Pr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new O,Za=new Bt,Fn=new O,Ws=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Za,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ya,Za,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new O,Wu=new Re,Xu=new Re,Ct=class extends Ws{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xc=class extends Gr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xs=class extends ir{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vc=class extends Gr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}},qs=class extends ir{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dn=class extends Ws{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yc=class extends Gr{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ys=class extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hc=new WeakMap,Ks=class extends An{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=vn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{hc.has(a)===!0?(r&&r(hc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return vn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),hc.set(l,c),vn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});vn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=-90,Tr=1,Vr=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(wr,Tr,e,t);r.layers=this.layers,this.add(r);let s=new Ct(wr,Tr,e,t);s.layers=this.layers,this.add(s);let a=new Ct(wr,Tr,e,t);a.layers=this.layers,this.add(a);let o=new Ct(wr,Tr,e,t);o.layers=this.layers,this.add(o);let l=new Ct(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new Ct(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xo=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Js=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ag.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ag(){this._document.hidden===!1&&this.reset()}var vo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Bt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Bt.multiplyQuaternionsFlat(e,a,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},th="\\[\\]\\.:\\/",Rg=new RegExp("["+th+"]","g"),nh="[^"+th+"]",Cg="[^"+th.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",nh),Ig=/(WCOD+)?/.source.replace("WCOD",Cg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Ng=new RegExp("^"+Pg+Ig+Lg+Dg+"$"),Ug=["material","materials","bones","map"],bc=class{constructor(e,t,n){let r=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){let t=Ng.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ug.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=bc;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yo=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Wi,endingEnd:Wi};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=sl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case al:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===_d;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===gd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Xi,r.endingEnd=Xi):(e?r.endingStart=this.zeroSlopeAtStart?Xi:Wi:r.endingStart=ms,t?r.endingEnd=this.zeroSlopeAtEnd?Xi:Wi:r.endingEnd=ms)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},Fg=new Float32Array(1),js=class extends En{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let f=r[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new vo(nt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Gs(new Float32Array(2),new Float32Array(2),1,Fg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?tr.findByName(r,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=al),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new yo(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?tr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var zn=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};var $s=class extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ih(i,e,t,n){let r=Og(n);switch(t){case zc:return i*e;case Ni:return i*e/r.components*r.byteLength;case Eo:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case Ao:return i*e*2/r.components*r.byteLength;case Gc:return i*e*3/r.components*r.byteLength;case St:return i*e*4/r.components*r.byteLength;case Ro:return i*e*4/r.components*r.byteLength;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(i,8)*Math.max(e,8)/2;case Do:case No:case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case sa:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qo:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case aa:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case ut:case Fc:return{byteLength:1,components:1};case Yr:case Oc:case bt:return{byteLength:2,components:1};case wo:case To:return{byteLength:2,components:4};case Nn:case Mo:case vt:return{byteLength:4,components:1};case Bc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sf(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,I0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:zg,alphahash_pars_fragment:Gg,alphamap_fragment:Vg,alphamap_pars_fragment:Hg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:Zg,batching_vertex:Kg,begin_vertex:Jg,beginnormal_vertex:jg,bsdfs:$g,iridescence_fragment:Qg,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:l0,common:c0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:_0,envmap_common_pars_fragment:x0,envmap_pars_fragment:v0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:I0,envmap_vertex:b0,fog_vertex:S0,fog_pars_vertex:M0,fog_fragment:w0,fog_pars_fragment:T0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:z0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:Z0,map_particle_pars_fragment:K0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:j0,morphinstance_vertex:$0,morphcolor_vertex:Q0,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:r_,normal_pars_fragment:s_,normal_pars_vertex:a_,normal_vertex:o_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:__,dithering_pars_fragment:x_,roughnessmap_fragment:v_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:S_,shadowmap_vertex:M_,shadowmask_pars_fragment:w_,skinbase_vertex:T_,skinning_pars_vertex:E_,skinning_vertex:A_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:I_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:N_,uv_pars_fragment:U_,uv_pars_vertex:F_,uv_vertex:O_,worldpos_vertex:B_,background_vert:k_,background_frag:z_,backgroundCube_vert:G_,backgroundCube_frag:V_,cube_vert:H_,cube_frag:W_,depth_vert:X_,depth_frag:q_,distance_vert:Y_,distance_frag:Z_,equirect_vert:K_,equirect_frag:J_,linedashed_vert:j_,linedashed_frag:$_,meshbasic_vert:Q_,meshbasic_frag:ex,meshlambert_vert:tx,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:rx,meshnormal_vert:sx,meshnormal_frag:ax,meshphong_vert:ox,meshphong_frag:lx,meshphysical_vert:cx,meshphysical_frag:hx,meshtoon_vert:ux,meshtoon_frag:dx,points_vert:fx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:_x,sprite_frag:xx},xe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},qn={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};qn.physical={uniforms:Kt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var hl={r:0,b:0,g:0},vx=new Ge,af=new Ue;af.set(-1,0,0,0,1,0,0,0,1);function yx(i,e,t,n,r,s){let a=new Ie(0),o=r===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let b=S.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(S){let w=!1,b=d(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,w){let b=d(w);b&&b.isCubeTexture?(c===void 0&&(c=new xt(new Br(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:hr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vx.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,(h!==b||u!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xt(new Bn(2,2),new en({name:"BackgroundMaterial",uniforms:hr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(hl,eh(i)),t.buffers.color.setClear(hl.r,hl.g,hl.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:v,dispose:m}}function bx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(P,F,k,R,B){let G=!1,H=u(P,R,k,F);s!==H&&(s=H,c(s.object)),G=d(P,R,k,B),G&&p(P,R,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(P,F,k,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,F,k,R){let B=R.wireframe===!0,G=n[F.id];G===void 0&&(G={},n[F.id]=G);let H=P.isInstancedMesh===!0?P.id:0,ne=G[H];ne===void 0&&(ne={},G[H]=ne);let W=ne[k.id];W===void 0&&(W={},ne[k.id]=W);let Y=W[B];return Y===void 0&&(Y=f(l()),W[B]=Y),Y}function f(P){let F=[],k=[],R=[];for(let B=0;B<t;B++)F[B]=0,k[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,F,k,R){let B=s.attributes,G=F.attributes,H=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let X=B[W],te=G[W];if(te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;H++}return s.attributesNum!==H||s.index!==R}function p(P,F,k,R){let B={},G=F.attributes,H=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let X=G[W];X===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let te={};te.attribute=X,X&&X.data&&(te.data=X.data),B[W]=te,H++}s.attributes=B,s.attributesNum=H,s.index=R}function v(){let P=s.newAttributes;for(let F=0,k=P.length;F<k;F++)P[F]=0}function g(P){m(P,0)}function m(P,F){let k=s.newAttributes,R=s.enabledAttributes,B=s.attributeDivisors;k[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),B[P]!==F&&(i.vertexAttribDivisor(P,F),B[P]=F)}function S(){let P=s.newAttributes,F=s.enabledAttributes;for(let k=0,R=F.length;k<R;k++)F[k]!==P[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function w(P,F,k,R,B,G,H){H===!0?i.vertexAttribIPointer(P,F,k,B,G):i.vertexAttribPointer(P,F,k,R,B,G)}function b(P,F,k,R){v();let B=R.attributes,G=k.getAttributes(),H=F.defaultAttributeValues;for(let ne in G){let W=G[ne];if(W.location>=0){let Y=B[ne];if(Y===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let X=Y.normalized,te=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;let Z=pe.buffer,ie=pe.type,ge=pe.bytesPerElement,we=ie===i.INT||ie===i.UNSIGNED_INT||Y.gpuType===Mo;if(Y.isInterleavedBufferAttribute){let le=Y.data,Ce=le.isInterleavedBuffer===!0?le.stride:le.itemSize,et=Y.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve,le.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<W.locationSize;ve++)g(W.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ve=0;ve<W.locationSize;ve++)w(W.location+ve,te/W.locationSize,ie,X,Ce*ge,(et+te/W.locationSize*ve)*ge,we)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)m(W.location+le,Y.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<W.locationSize;le++)g(W.location+le);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let le=0;le<W.locationSize;le++)w(W.location+le,te/W.locationSize,ie,X,te*ge,te/W.locationSize*le*ge,we)}}else if(H!==void 0){let X=H[ne];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(W.location,X);break;case 3:i.vertexAttrib3fv(W.location,X);break;case 4:i.vertexAttrib4fv(W.location,X);break;default:i.vertexAttrib1fv(W.location,X)}}}}S()}function E(){D();for(let P in n){let F=n[P];for(let k in F){let R=F[k];for(let B in R){let G=R[B];for(let H in G)h(G[H].object),delete G[H];delete R[B]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let k in F){let R=F[k];for(let B in R){let G=R[B];for(let H in G)h(G[H].object),delete G[H];delete R[B]}}delete n[P.id]}function _(P){for(let F in n){let k=n[F];for(let R in k){let B=k[R];if(B[P.id]===void 0)continue;let G=B[P.id];for(let H in G)h(G[H].object),delete G[H];delete B[P.id]}}}function M(P){for(let F in n){let k=n[F],R=P.isInstancedMesh===!0?P.id:0,B=k[R];if(B!==void 0){for(let G in B){let H=B[G];for(let ne in H)h(H[ne].object),delete H[ne];delete B[G]}delete k[R],Object.keys(k).length===0&&delete n[F]}}}function D(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Sx(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Mx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==St&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==ut&&_!==vt&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:E,samples:T}}function wx(i){let e=this,t=null,n=0,r=!1,s=!1,a=new xn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):c();else{let S=s?0:n,w=S*4,b=m.clippingState||null;l.value=b,b=h(p,f,w,d);for(let E=0;E!==w;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,b=d;w!==v;++w,b+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var ha=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Br(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:di});s.uniforms.tEquirect.value=t;let a=new xt(r,s),o=t.minFilter;return t.minFilter===dn&&(t.minFilter=it),new Vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Od=256,Tx=3,Ex=20,of=256,lf=16,Ax=3,Rx=new O,Cx=new Ie,Jr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vr(1,10,null),this._boxMesh=new xt(new Br(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Rx}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Cx));let g=new Vr(n,r,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Od,jc(e))}_fromTexture(e,t){e.mapping===or||e.mapping===Xr?this._setSize(e.image.length===0?Od:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Bd(e,!1,!1),n=Math.log2(e)-Tx;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===or||e.mapping===Xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Px(),this._integrationMaterial=Ix());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/lf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ax)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(of*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lx());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};function Bd(i,e,t){return new ha(i,{minFilter:dn,generateMipmaps:e,type:bt,colorSpace:ai,depthBuffer:t})}function ua(i,e,t){return new en({name:i,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:tn,blending:di,depthTest:!1,depthWrite:!1})}function Px(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${of}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ix(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lx(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ex}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kd(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zd(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Di||d===bo)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new ha(p.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Di||d===bo,v=d===or||d===Xr;if(p||v){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Jr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let S=f.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Jr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===Di?f.mapping=or:d===bo&&(f.mapping=Xr),f}function l(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Nx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&qi("WebGLRenderer: "+n+" extension not supported."),r}}}function Ux(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(p=>delete r[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id],a.unregister(p);let v=s.get(p);v&&(e.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let S=v!==null?v.array.length:g.array.length/3-1,w=g.count>=65535?ys:Ji,b=new w(Math.ceil(S/3)*6,1),E=b.array;if(v!==null){let _=v.array;m=v.version;for(let M=0,D=0;M<S;M+=3){let C=_[M+0],P=_[M+1],F=_[M+2];E[D++]=C,E[D++]=P,E[D++]=P,E[D++]=F,E[D++]=F,E[D++]=C}}else{m=g.version;for(let _=0,M=0;_<S;_+=3){let D=_+0,C=_+1,P=_+2;E[M++]=D,E[M++]=C,E[M++]=C,E[M++]=P,E[M++]=P,E[M++]=D}}b.version=m;let T=s.get(p);T&&e.remove(T),s.set(p,b)}function f(p){let v=s.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&u(p)}else u(p);return s.get(p)}function d(){for(let p in r){let v=r[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Fx(i,e,t){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ox(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bx(i,e,t){let n=new WeakMap,r=new Je;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let b=o.attributes.position.count*w,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*E*4*u),_=new xs(T,b,E,u);_.type=vt,_.needsUpdate=!0;let M=w*4;for(let C=0;C<u;C++){let P=g[C],F=m[C],k=S[C],R=b*E*4*C;for(let B=0;B<P.count;B++){let G=B*M;d===!0&&(r.fromBufferAttribute(P,B),T[R+G+0]=r.x,T[R+G+1]=r.y,T[R+G+2]=r.z,T[R+G+3]=0),p===!0&&(r.fromBufferAttribute(F,B),T[R+G+4]=r.x,T[R+G+5]=r.y,T[R+G+6]=r.z,T[R+G+7]=0),v===!0&&(r.fromBufferAttribute(k,B),T[R+G+8]=r.x,T[R+G+9]=r.y,T[R+G+10]=r.z,T[R+G+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:_,size:new Re(b,E)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function kx(i,e,t,n,r){let s=new WeakMap;function a(c){let h=r.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var zx={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Gx(i,e,t,n,r,s){let a=new $t(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new hn;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let u=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new xt(h,u),d=new Dn(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,S=null,w=[],b=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let _=0;_<w.length;_++){let M=w[_];M.setSize&&M.setSize(E,T)}},this.setEffects=function(E){w=E,b=w.length>0&&w[0].isRenderPass===!0;let T=a.width,_=a.height;w.length>0&&o===null&&(o=new $t(T,_,{type:bt,depthBuffer:!1,stencilBuffer:!1}),l=new $t(T,_,{type:bt,depthBuffer:!1,stencilBuffer:!1}));let M=r===!0&&w.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new li(T,_),s===!0&&(c.format=fi,c.type=cr)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<w.length;D++){let C=w[D];C.setSize&&C.setSize(T,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(g||E.toneMapping===Vn&&w.length===0)return!1;if(S=T,T!==null){let _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return b===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Vn,!0},this.hasRenderPass=function(){return b},this.end=function(E,T){E.toneMapping=m,g=!0;let _=a,M=o;for(let D=0;D<w.length;D++){let C=w[D];C.enabled!==!1&&(C.render(E,M,_,T),C.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(p!==E.outputColorSpace||v!==E.toneMapping){p=E.outputColorSpace,v=E.toneMapping,u.defines={},Xe.getTransfer(p)===Qe&&(u.defines.SRGB_TRANSFER="");let D=zx[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(S),E.render(f,d),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var cf=new kt,hf=new li(1,1),uf=new Ps(1),df=new xs,ff=new ao,pf=new Cs,Gd=[],Vd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Gd[r];if(s===void 0&&(s=new Float32Array(r),Gd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Dt(t,n)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Dt(t,n)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),Dt(t,n)}}function Kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function pl(i){return i.version===0&&(i.compareFunction=Yc,i.needsUpdate=!0),i}function iv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=pl(hf):s=cf,t.setTexture2D(e||s,r)}function rv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ff,r)}function sv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=pl(uf):s=pf,t.setTextureCube(e||s,r)}function av(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||df,r)}function ov(i){switch(i){case 5126:return Vx;case 35664:return Hx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return Zx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return jx;case 35669:case 35673:return $x;case 5125:return Qx;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return av}}function lv(i,e){i.uniform1fv(this.addr,e)}function cv(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function hv(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function uv(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function dv(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fv(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pv(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mv(i,e){i.uniform1iv(this.addr,e)}function gv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function xv(i,e){i.uniform4iv(this.addr,e)}function vv(i,e){i.uniform1uiv(this.addr,e)}function yv(i,e){i.uniform2uiv(this.addr,e)}function bv(i,e){i.uniform3uiv(this.addr,e)}function Sv(i,e){i.uniform4uiv(this.addr,e)}function Mv(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=pl(hf):a=cf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function wv(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ff,s[a])}function Tv(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=pl(uf):a=pf;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Ev(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||df,s[a])}function Av(i){switch(i){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return bv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Ev}}var ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}},oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Av(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},rh=/(\w+)(\])?(\[|\.)?/g;function qd(i,e){i.seq.push(e),i.map[e.id]=e}function Rv(i,e,t){let n=i.name,r=n.length;for(rh.lastIndex=0;;){let s=rh.exec(n),a=rh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qd(t,c===void 0?new ah(o,i,e):new oh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new lh(o),qd(t,u)),t=u}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rv(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cv=37297,Pv=0;function Iv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zd=new Ue;function Lv(i){Xe._getMatrix(Zd,Xe.workingColorSpace,i);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case gs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Iv(i.getShaderSource(e),o)}else return s}function Dv(i,e){let t=Lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Nv={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[ea]:"ACESFilmic",[Dc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function Uv(i,e){let t=Nv[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ul=new O;function Fv(){Xe.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),e=ul.y.toFixed(4),t=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Bv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function Jd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(zv,Gv)}function Gv(i,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ch(t)}var Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(i){return i.replace(Vv,Hv)}function Hv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Wv={[sr]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function Xv(i){return Wv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qv={[Xr]:"ENVMAP_MODE_REFRACTION"};function Yv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zv={[Qs]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function Kv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zv[i.combine]||"ENVMAP_BLENDING_NONE"}function Jv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yv(t),u=Kv(t),f=Ov(t),d=Bv(s),p=r.createProgram(),v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ca).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ca).join(`
`),g.length>0&&(g+=`
`)):(v=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),g=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?We.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=ch(a),a=Jd(a,t),a=jd(a,t),o=ch(o),o=Jd(o,t),o=jd(o,t),a=$d(a),o=$d(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=m+v+a,w=m+g+o,b=Yd(r,r.VERTEX_SHADER,S),E=Yd(r,r.FRAGMENT_SHADER,w);r.attachShader(p,b),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function T(C){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(p)||"",F=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(E)||"",R=P.trim(),B=F.trim(),G=k.trim(),H=!0,ne=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,b,E);else{let W=Kd(r,b,"vertex"),Y=Kd(r,E,"fragment");Ne("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+W+`
`+Y)}else R!==""?Ee("WebGLProgram: Program Info Log:",R):(B===""||G==="")&&(ne=!1);ne&&(C.diagnostics={runnable:H,programLog:R,vertexShader:{log:B,prefix:v},fragmentShader:{log:G,prefix:g}})}r.deleteShader(b),r.deleteShader(E),_=new Kr(r,p),M=kv(r,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(p,Cv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}var jv=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uh(e),t.set(e,n)),n}},uh=class{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}};function $v(i){return i===Hn||i===sa||i===aa}function Qv(i,e,t,n,r,s){let a=new vs,o=new hh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,D,C,P,F){let k=C.fog,R=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||B,G),ne=f[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Ee("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Y=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=Y!==void 0?Y.length:0,te=0;R.morphAttributes.position!==void 0&&(te=1),R.morphAttributes.normal!==void 0&&(te=2),R.morphAttributes.color!==void 0&&(te=3);let pe,Z,ie,ge;if(ne){let _e=qn[ne];pe=_e.vertexShader,Z=_e.fragmentShader}else{pe=_.vertexShader,Z=_.fragmentShader;let _e=o.getVertexShaderStage(_),tt=o.getFragmentShaderStage(_);o.update(_,_e,tt),ie=_e.id,ge=tt.id}let we=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Ce=P.isInstancedMesh===!0,et=P.isBatchedMesh===!0,ve=!!_.map,Ve=!!_.matcap,Ze=!!H,ke=Ze&&H.isPMREMTexture===!0,mt=!!_.aoMap,gt=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,rt=!!_.normalMap,Sn=!!_.displacementMap,wt=!!_.emissiveMap,nn=!!_.metalnessMap,rn=!!_.roughnessMap,sn=_.anisotropy>0,N=_.clearcoat>0,an=_.diffuseRoughness>0,ot=_.dispersion>0,lt=_.retroreflectivity>0,me=_.iridescence>0,yt=_.sheen>0,Le=_.transmission>0,Fe=sn&&!!_.anisotropyMap,A=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,U=N&&!!_.clearcoatRoughnessMap,ee=an&&!!_.diffuseRoughnessMap,$=me&&!!_.iridescenceMap,ae=me&&!!_.iridescenceThicknessMap,de=yt&&!!_.sheenColorMap,J=yt&&!!_.sheenRoughnessMap,j=!!_.specularMap,ce=!!_.specularColorMap,I=!!_.specularIntensityMap,Q=Le&&!!_.transmissionMap,K=Le&&!!_.thicknessMap,he=!!_.gradientMap,se=!!_.alphaMap,oe=_.alphaTest>0,Ae=!!_.alphaHash,He=!!_.extensions,re=Vn;_.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(re=i.toneMapping);let Pe=ke?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ze={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:Z,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:et,batchingColor:et&&P._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:Ve,envMap:Ze,envMapMode:Ze&&H.mapping,envMapPMREM:ke,envMapMaxLod:ke?Pe.length-1:null,envMapSize:ke?Pe[0].width:null,aoMap:mt,lightMap:gt,bumpMap:zt,normalMap:rt,displacementMap:Sn,emissiveMap:wt,normalMapObjectSpace:rt&&_.normalMapType===yd,normalMapTangentSpace:rt&&_.normalMapType===Zr,packedNormalMap:rt&&_.normalMapType===Zr&&$v(_.normalMap.format),metalnessMap:nn,roughnessMap:rn,anisotropy:sn,anisotropyMap:Fe,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:an,diffuseRoughnessMap:ee,dispersion:ot,retroreflection:lt,iridescence:me,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:yt,sheenColorMap:de,sheenRoughnessMap:J,specularMap:j,specularColorMap:ce,specularIntensityMap:I,transmission:Le,transmissionMap:Q,thicknessMap:K,gradientMap:he,opaque:_.transparent===!1&&_.blending===Wr&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Ae,combine:_.combine,mapUv:ve&&d(_.map.channel),aoMapUv:mt&&d(_.aoMap.channel),lightMapUv:gt&&d(_.lightMap.channel),bumpMapUv:zt&&d(_.bumpMap.channel),normalMapUv:rt&&d(_.normalMap.channel),displacementMapUv:Sn&&d(_.displacementMap.channel),emissiveMapUv:wt&&d(_.emissiveMap.channel),metalnessMapUv:nn&&d(_.metalnessMap.channel),roughnessMapUv:rn&&d(_.roughnessMap.channel),anisotropyMapUv:Fe&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(_.sheenRoughnessMap.channel),specularMapUv:j&&d(_.specularMap.channel),specularColorMapUv:ce&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:K&&d(_.thicknessMap.channel),alphaMapUv:se&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(rt||sn),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(ve||se),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:te,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:wt&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function v(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(M,_),m(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let M=f[_.type],D;if(M){let C=qn[M];D=ll.clone(C.uniforms)}else D=_.uniforms;return D}function w(_,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new Jv(i,M,_,r),c.push(D),h.set(M,D)),D}function b(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:T}}function ey(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,v,g,m){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=a(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=g,S.group=m),e++,S}function l(f,d,p,v,g,m,S){S.reversedDepth===!0&&(g=-g);let w=o(f,d,p,v,g,m);p.transmission>0?n.push(w):p.transparent===!0?r.push(w):t.push(w)}function c(f,d,p,v,g,m){let S=o(f,d,p,v,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?r.unshift(S):t.unshift(S)}function h(f,d){t.length>1&&t.sort(f||ty),n.length>1&&n.sort(d||ef),r.length>1&&r.sort(d||ef)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function ny(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new tf,i.set(n,[a])):r>=s.length?(a=new tf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function iy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function ry(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sy=0;function ay(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oy(i){let e=new iy,t=ry(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new Ge,a=new Ge;function o(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,S=0,w=0,b=0,E=0,T=0,_=0,M=0,D=0,C=0;c.sort(ay);for(let F=0,k=c.length;F<k;F++){let R=c[F],B=R.color,G=R.intensity,H=R.distance,ne=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Hn?ne=R.shadow.map.texture:ne=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],G);C++}else if(R.isSunLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,X=t.get(R);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=X,n.sunShadowMap[p]=ne;let te=Y.getViewportCount();for(let pe=0;pe<te;pe++)n.sunShadowMatrix[v+pe]=Y.getMatrix(pe),n.sunShadowCascade[v+pe]=Y._cascadeData[pe];v+=te,p++}n.sun[d]=W,d++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,X=t.get(R);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=R.shadow.matrix,E++}n.directional[g]=W,g++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(G),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[S]=W;let Y=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,Y.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[S]=Y.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=ne,_++}S++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(B).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=W,w++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let Y=R.shadow,X=t.get(R);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=W,m++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(G),W.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[b]=W,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==S||P.rectAreaLength!==w||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==_||P.numSpotMaps!==M||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=S,P.rectAreaLength=w,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=_,P.numSpotMaps=M,P.numLightProbes=C,n.version=sy++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let b=c[S];if(b.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(b.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function nf(i){let e=new oy(i),t=[],n=[],r=[];function s(u){h.camera=u,t.length=0,n.length=0,r.length=0}function a(u){u.isLightProbeGrid?r.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),r.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ly(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new nf(i),e.set(r,[o])):s>=a.length?(o=new nf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uy=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],dy=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],rf=new Ge,la=new O,sh=new O;function fy(i,e,t){let n=new Ei,r=new Re,s=new Re,a=new Je,o=new uo,l=new fo,c={},h=t.maxTextureSize,u={[Gn]:tn,[tn]:Gn,[Vt]:Vt},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new hn;p.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(T,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Zu&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let D=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=m!==this.type;k&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=T.length;R<B;R++){let G=T[R],H=G.shadow;if(H===void 0){Ee("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ne=H.getFrameExtents();r.multiply(ne),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,H.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Hr){if(G.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $t(r.x,r.y,{format:Hn,type:bt,minFilter:it,magFilter:it,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new li(r.x,r.y,vt),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=si,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt}else G.isPointLight?(H.map=new ha(r.x),H.map.depthTexture=new Ps(r.x,Nn)):(H.map=new $t(r.x,r.y),H.map.depthTexture=new li(r.x,r.y,Nn)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=si,this.type===sr?(H.map.depthTexture.compareFunction=W?qc:Xc,H.map.depthTexture.minFilter=it,H.map.depthTexture.magFilter=it):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,M);let X=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let te=0;te<Y;te++){let pe=H.getCamera(te);if(G.isPointLight){let Z=H.camera,ie=H.matrix,ge=G.distance||Z.far;ge!==Z.far&&(Z.far=ge,Z.updateProjectionMatrix()),la.setFromMatrixPosition(G.matrixWorld),Z.position.copy(la),sh.copy(Z.position),sh.add(uy[te]),Z.up.copy(dy[te]),Z.lookAt(sh),Z.updateMatrixWorld(),ie.makeTranslation(-la.x,-la.y,-la.z),rf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rf,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,te),i.clear();else{te===0&&(i.setRenderTarget(H.map),i.clear());let Z=H.getViewport(te);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),F.viewport(a)}n=H.getFrustum(te),b(_,M,pe,G,X,this.type)}H.isPointLightShadow!==!0&&this.type===Hr&&S(H,M),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(D,C,P)};function S(T,_){let M=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(r.x,r.y,{format:Hn,type:bt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,M,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,M,d,v,null)}function w(T,_,M,D){let C=null,P=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,k=_.uuid,R=c[F];R===void 0&&(R={},c[F]=R);let B=R[k];B===void 0&&(B=C.clone(),R[k]=B,_.addEventListener("dispose",E)),C=B}if(C.visible=_.visible,C.wireframe=_.wireframe,D===Hr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=M}return C}function b(T,_,M,D,C,P){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Hr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let R=e.update(T),B=T.material;if(Array.isArray(B)){let G=R.groups;for(let H=0,ne=G.length;H<ne;H++){let W=G[H],Y=B[W.materialIndex];if(Y&&Y.visible){let X=w(T,Y,D,P);T.onBeforeShadow(i,T,_,M,R,X,W),i.renderBufferDirect(M,null,R,X,T,W),T.onAfterShadow(i,T,_,M,R,X,W)}}}else if(B.visible){let G=w(T,B,D,P);T.onBeforeShadow(i,T,_,M,R,G,null),i.renderBufferDirect(M,null,R,G,T,null),T.onAfterShadow(i,T,_,M,R,G,null)}}let k=T.children;for(let R=0,B=k.length;R<B;R++)b(k[R],_,M,D,C,P)}function E(T){T.target.removeEventListener("dispose",E);for(let M in c){let D=c[M],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function py(i,e){function t(){let I=!1,Q=new Je,K=null,he=new Je(0,0,0,0);return{setMask:function(se){K!==se&&!I&&(i.colorMask(se,se,se,se),K=se)},setLocked:function(se){I=se},setClear:function(se,oe,Ae,He,re){re===!0&&(se*=He,oe*=He,Ae*=He),Q.set(se,oe,Ae,He),he.equals(Q)===!1&&(i.clearColor(se,oe,Ae,He),he.copy(Q))},reset:function(){I=!1,K=null,he.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,K=null,he=null,se=null;return{setReversed:function(oe){if(Q!==oe){let Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Q=oe;let He=se;se=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function(oe){oe?le(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(oe){K!==oe&&!I&&(i.depthMask(oe),K=oe)},setFunc:function(oe){if(Q&&(oe=Pd[oe]),he!==oe){switch(oe){case ja:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=oe}},setLocked:function(oe){I=oe},setClear:function(oe){se!==oe&&(se=oe,Q&&(oe=1-oe),i.clearDepth(oe))},reset:function(){I=!1,K=null,he=null,se=null,Q=!1}}}function r(){let I=!1,Q=null,K=null,he=null,se=null,oe=null,Ae=null,He=null,re=null;return{setTest:function(Pe){I||(Pe?le(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Pe){Q!==Pe&&!I&&(i.stencilMask(Pe),Q=Pe)},setFunc:function(Pe,ze,_e){(K!==Pe||he!==ze||se!==_e)&&(i.stencilFunc(Pe,ze,_e),K=Pe,he=ze,se=_e)},setOp:function(Pe,ze,_e){(oe!==Pe||Ae!==ze||He!==_e)&&(i.stencilOp(Pe,ze,_e),oe=Pe,Ae=ze,He=_e)},setLocked:function(Pe){I=Pe},setClear:function(Pe){re!==Pe&&(i.clearStencil(Pe),re=Pe)},reset:function(){I=!1,Q=null,K=null,he=null,se=null,oe=null,Ae=null,He=null,re=null}}}let s=new t,a=new n,o=new r,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,S=null,w=null,b=null,E=null,T=null,_=null,M=new Ie(0,0,0),D=0,C=!1,P=null,F=null,k=null,R=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ne=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=ne>=2);let Y=null,X={},te=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Z=new Je().fromArray(te),ie=new Je().fromArray(pe);function ge(I,Q,K,he){let se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<K;Ae++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Q+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return oe}let we={};we[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Ar),zt(!1),rt(Mc),le(i.CULL_FACE),mt(di);function le(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ce(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function et(I,Q){return f[I]!==Q?(i.bindFramebuffer(I,Q),f[I]=Q,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function ve(I,Q){let K=p,he=!1;if(I){K=d.get(Q),K===void 0&&(K=[],d.set(Q,K));let se=I.textures;if(K.length!==se.length||K[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ae=se.length;oe<Ae;oe++)K[oe]=i.COLOR_ATTACHMENT0+oe;K.length=se.length,he=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,he=!0);he&&i.drawBuffers(K)}function Ve(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let Ze={[ar]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Ze[$u]=i.MIN,Ze[Qu]=i.MAX;let ke={[ed]:i.ZERO,[td]:i.ONE,[nd]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[hd]:i.ONE_MINUS_CONSTANT_COLOR,[ud]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(I,Q,K,he,se,oe,Ae,He,re,Pe){if(I===di){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),I!==Ku){if(I!==m||Pe!==C){if((S!==ar||E!==ar)&&(i.blendEquation(i.FUNC_ADD),S=ar,E=ar),Pe)switch(I){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",I);break}else switch(I){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",I);break}w=null,b=null,T=null,_=null,M.set(0,0,0),D=0,m=I,C=Pe}return}se=se||Q,oe=oe||K,Ae=Ae||he,(Q!==S||se!==E)&&(i.blendEquationSeparate(Ze[Q],Ze[se]),S=Q,E=se),(K!==w||he!==b||oe!==T||Ae!==_)&&(i.blendFuncSeparate(ke[K],ke[he],ke[oe],ke[Ae]),w=K,b=he,T=oe,_=Ae),(He.equals(M)===!1||re!==D)&&(i.blendColor(He.r,He.g,He.b,re),M.copy(He),D=re),m=I,C=!1}function gt(I,Q){I.side===Vt?Ce(i.CULL_FACE):le(i.CULL_FACE);let K=I.side===tn;Q&&(K=!K),zt(K),I.blending===Wr&&I.transparent===!1?mt(di):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function rt(I){I!==qu?(le(i.CULL_FACE),I!==F&&(I===Mc?i.cullFace(i.BACK):I===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),F=I}function Sn(I){I!==k&&(H&&i.lineWidth(I),k=I)}function wt(I,Q,K){I?(le(i.POLYGON_OFFSET_FILL),(R!==Q||B!==K)&&(R=Q,B=K,a.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Ce(i.POLYGON_OFFSET_FILL)}function nn(I){I?le(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function rn(I){I===void 0&&(I=i.TEXTURE0+G-1),Y!==I&&(i.activeTexture(I),Y=I)}function sn(I,Q,K){K===void 0&&(Y===null?K=i.TEXTURE0+G-1:K=Y);let he=X[K];he===void 0&&(he={type:void 0,texture:void 0},X[K]=he),(he.type!==I||he.texture!==Q)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(I,Q||we[I]),he.type=I,he.texture=Q)}function N(){let I=X[Y];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function an(){try{i.compressedTexImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function lt(){try{i.texSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function me(){try{i.texSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function Fe(){try{i.texStorage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function x(){try{i.texImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function U(){try{i.texImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function ee(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function $(I,Q){u[I]!==Q&&(i.pixelStorei(I,Q),u[I]=Q)}function ae(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function de(I){ie.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function J(I,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let he=K.get(I);he===void 0&&(he=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,he,he),K.set(I,he))}function j(I,Q,K){let se=c.get(Q).get(I);l[se]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,K),l[se]=K)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,X={},f={},l={},d=new WeakMap,p=[],v=null,g=!1,m=null,S=null,w=null,b=null,E=null,T=null,_=null,M=new Ie(0,0,0),D=0,C=!1,P=null,F=null,k=null,R=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:et,drawBuffers:ve,useProgram:Ve,setBlending:mt,setMaterial:gt,setFlipSided:zt,setCullFace:rt,setLineWidth:Sn,setPolygonOffset:wt,setScissorTest:nn,activeTexture:rn,bindTexture:sn,unbindTexture:N,compressedTexImage2D:an,compressedTexImage3D:ot,texImage2D:x,texImage3D:U,pixelStorei:$,getParameter:ee,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:Fe,texStorage3D:A,texSubImage2D:lt,texSubImage3D:me,compressedTexSubImage2D:yt,compressedTexSubImage3D:Le,scissor:ae,viewport:de,reset:ce}}function my(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return g?new OffscreenCanvas(A,x):Ir("canvas")}function S(A,x,U){let ee=1,$=Fe(A);if(($.width>U||$.height>U)&&(ee=U/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(ee*$.width),de=Math.floor(ee*$.height);f===void 0&&(f=m(ae,de));let J=x?m(ae,de):f;return J.width=ae,J.height=de,J.getContext("2d").drawImage(A,0,0,ae,de),Ee("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+de+")."),J}else return"data"in A&&Ee("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function w(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,U,ee,$,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;ee&&(de=e.get("EXT_texture_norm16"),de||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8),U===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),U===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),x===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8),U===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),U===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RG8UI),U===i.UNSIGNED_SHORT&&(J=i.RG16UI),U===i.UNSIGNED_INT&&(J=i.RG32UI),U===i.BYTE&&(J=i.RG8I),U===i.SHORT&&(J=i.RG16I),U===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGB8UI),U===i.UNSIGNED_SHORT&&(J=i.RGB16UI),U===i.UNSIGNED_INT&&(J=i.RGB32UI),U===i.BYTE&&(J=i.RGB8I),U===i.SHORT&&(J=i.RGB16I),U===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),U===i.UNSIGNED_INT&&(J=i.RGBA32UI),U===i.BYTE&&(J=i.RGBA8I),U===i.SHORT&&(J=i.RGBA16I),U===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),U===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let j=ae?gs:Xe.getTransfer($);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=j===Qe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),U===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(A,x){let U;return A?x===null||x===Nn||x===cr?U=i.DEPTH24_STENCIL8:x===vt?U=i.DEPTH32F_STENCIL8:x===Yr&&(U=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===cr?U=i.DEPTH_COMPONENT24:x===vt?U=i.DEPTH_COMPONENT32F:x===Yr&&(U=i.DEPTH_COMPONENT16),U}function M(A,x){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==pt&&A.minFilter!==it?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){let x=new WeakRef(A);n.get(A).__ref=x,p.add(x),v.register(A,x,x)}function C(A){let x=n.get(A).__ref;x!==void 0&&(p.delete(x),v.unregister(x))}function P(A){k(A.target)}function F(A){R(A.target)}function k(A){A.removeEventListener("dispose",P),C(A),G(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function R(A){A.removeEventListener("dispose",F),C(A),ne(A)}function B(){for(let A of p){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):k(x))}p.clear(),u.clear()}function G(A){let x=n.get(A);if(x.__webglInit===void 0)return;let U=A.source,ee=d.get(U);if(ee){let $=ee[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(A),Object.keys(ee).length===0&&d.delete(U)}n.remove(A)}function H(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let U=A.source,ee=d.get(U);delete ee[x.__cacheKey],a.memory.textures--}function ne(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=A.depthTexture;if(U&&U.renderTarget===A&&k(U),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ae=0;ae<x.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ee=A.textures;for(let $=0,ae=ee.length;$<ae;$++){let de=n.get(ee[$]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(ee[$])}n.remove(A)}let W=0;function Y(){W=0}function X(){return W}function te(A){W=A}function pe(){let A=W;return A>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,A}function Z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ie(A,x){let U=n.get(A);if(A.isVideoTexture&&yt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let ee=A.image;if(ee===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function ge(A,x){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){gt(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function we(A,x){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){gt(U,A,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function le(A,x){let U=n.get(A);if(A.version>0&&U.__version!==A.version){zt(U,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}let Ce={[Tn]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},et={[pt]:i.NEAREST,[So]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[it]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},ve={[Sd]:i.NEVER,[Yc]:i.ALWAYS,[Md]:i.LESS,[Xc]:i.LEQUAL,[wd]:i.EQUAL,[qc]:i.GEQUAL,[Td]:i.GREATER,[Ed]:i.NOTEQUAL};function Ve(A,x){if(x.type===vt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===it||x.magFilter===qr||x.magFilter===lr||x.magFilter===dn||x.minFilter===it||x.minFilter===qr||x.minFilter===lr||x.minFilter===dn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ce[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ce[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ce[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,et[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,et[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pt||x.minFilter!==lr&&x.minFilter!==dn||x.type===vt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P),D(x));let ee=x.source,$=d.get(ee);$===void 0&&($={},d.set(ee,$));let ae=Z(x);if(ae!==A.__cacheKey){$[ae]===void 0&&($[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[ae].usedTimes++;let de=$[A.__cacheKey];de!==void 0&&($[A.__cacheKey].usedTimes--,de.usedTimes===0&&H(x)),A.__cacheKey=ae,A.__webglTexture=$[ae].texture}return U}function ke(A,x,U){return Math.floor(Math.floor(A/U)/x)}function mt(A,x,U,ee){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,ee,x.data);else{ae.sort((I,Q)=>I.start-Q.start);let de=0;for(let I=1;I<ae.length;I++){let Q=ae[de],K=ae[I],he=Q.start+Q.count,se=ke(K.start,x.width,4),oe=ke(Q.start,x.width,4);K.start<=he+1&&se===oe&&ke(K.start+K.count-1,x.width,4)===se?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++de,ae[de]=K)}ae.length=de+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let I=0,Q=ae.length;I<Q;I++){let K=ae[I],he=Math.floor(K.start/4),se=Math.ceil(K.count/4),oe=he%x.width,Ae=Math.floor(he/x.width),He=se,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,oe,Ae,He,re,U,ee,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function gt(A,x,U){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);let $=Ze(A,x),ae=x.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+U);let de=n.get(ae);if(ae.version!==de.__version||$===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=Xe.getPrimaries(Xe.workingColorSpace),Pe=x.colorSpace===At?null:Xe.getPrimaries(x.colorSpace),ze=x.colorSpace===At||re===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=S(x.image,!1,r.maxTextureSize);j=Le(x,j);let ce=s.convert(x.format,x.colorSpace),I=s.convert(x.type),Q=T(x.internalFormat,ce,I,x.normalized,x.colorSpace,x.isVideoTexture);Ve(ee,x);let K,he=x.mipmaps,se=x.isVideoTexture!==!0,oe=de.__version===void 0||$===!0,Ae=ae.dataReady,He=M(x,j);if(x.isDepthTexture)Q=_(x.format===fi,x.type),oe&&(se?t.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,ce,I,null));else if(x.isDataTexture)if(he.length>0){se&&oe&&t.texStorage2D(i.TEXTURE_2D,He,Q,he[0].width,he[0].height);for(let re=0,Pe=he.length;re<Pe;re++)K=he[re],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,I,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,ce,I,K.data);x.generateMipmaps=!1}else se?(oe&&t.texStorage2D(i.TEXTURE_2D,He,Q,j.width,j.height),Ae&&mt(x,j,ce,I)):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,ce,I,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Q,he[0].width,he[0].height,j.depth);for(let re=0,Pe=he.length;re<Pe;re++)if(K=he[re],x.format!==St)if(ce!==null)if(se){if(Ae)if(x.layerUpdates.size>0){let ze=ih(K.width,K.height,x.format,x.type);for(let _e of x.layerUpdates){let tt=K.data.subarray(_e*ze/K.data.BYTES_PER_ELEMENT,(_e+1)*ze/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,_e,K.width,K.height,1,ce,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,ce,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,K.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,ce,I,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,ce,I,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(i.TEXTURE_2D,He,Q,he[0].width,he[0].height);for(let re=0,Pe=he.length;re<Pe;re++)K=he[re],x.format!==St?ce!==null?se?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,K.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,K.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,I,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,ce,I,K.data)}else if(x.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Q,j.width,j.height,j.depth),Ae)if(x.layerUpdates.size>0){let re=ih(j.width,j.height,x.format,x.type);for(let Pe of x.layerUpdates){let ze=j.data.subarray(Pe*re/j.data.BYTES_PER_ELEMENT,(Pe+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,j.width,j.height,1,ce,I,ze)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,I,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ce,I,j.data);else if(x.isData3DTexture)se?(oe&&t.texStorage3D(i.TEXTURE_3D,He,Q,j.width,j.height,j.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,I,j.data)):t.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ce,I,j.data);else if(x.isFramebufferTexture){if(oe)if(se)t.texStorage2D(i.TEXTURE_2D,He,Q,j.width,j.height);else{let re=j.width,Pe=j.height;for(let ze=0;ze<He;ze++)t.texImage2D(i.TEXTURE_2D,ze,Q,re,Pe,0,ce,I,null),re>>=1,Pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),u.add(x),re.onpaint=Pe=>{let ze=Pe.changedElements;for(let _e of u)ze.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ze=i.RGBA,_e=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,_e,tt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(se&&oe){let re=Fe(he[0]);t.texStorage2D(i.TEXTURE_2D,He,Q,re.width,re.height)}for(let re=0,Pe=he.length;re<Pe;re++)K=he[re],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ce,I,K):t.texImage2D(i.TEXTURE_2D,re,Q,ce,I,K);x.generateMipmaps=!1}else if(se){if(oe){let re=Fe(j);t.texStorage2D(i.TEXTURE_2D,He,Q,re.width,re.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,I,j)}else t.texImage2D(i.TEXTURE_2D,0,Q,ce,I,j);w(x)&&x.mipmapsAutoUpdate===!0&&b(ee),de.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function zt(A,x,U){if(x.image.length!==6)return;let ee=Ze(A,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let ae=n.get($);if($.version!==ae.__version||ee===!0){t.activeTexture(i.TEXTURE0+U);let de=Xe.getPrimaries(Xe.workingColorSpace),J=x.colorSpace===At?null:Xe.getPrimaries(x.colorSpace),j=x.colorSpace===At||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ce&&!I?Q[_e]=S(x.image[_e],!0,r.maxCubemapSize):Q[_e]=I?x.image[_e].image:x.image[_e],Q[_e]=Le(x,Q[_e]);let K=Q[0],he=s.convert(x.format,x.colorSpace),se=s.convert(x.type),oe=T(x.internalFormat,he,se,x.normalized,x.colorSpace),Ae=x.isVideoTexture!==!0,He=ae.__version===void 0||ee===!0,re=$.dataReady,Pe=M(x,K);Ve(i.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(oe=_(x.format===fi,x.type),He)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,K.width,K.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,K.width,K.height,0,he,se,null)}else if(ce){Ae&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,oe,K.width,K.height);for(let _e=0;_e<6;_e++){ze=Q[_e].mipmaps;for(let tt=0;tt<ze.length;tt++){let Ut=ze[tt];x.format!==St?he!==null?Ae?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,Ut.width,Ut.height,he,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,oe,Ut.width,Ut.height,0,Ut.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,Ut.width,Ut.height,he,se,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,oe,Ut.width,Ut.height,0,he,se,Ut.data)}}}else{if(ze=x.mipmaps,Ae&&He){ze.length>0&&Pe++;let _e=Fe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(I){Ae?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,he,se,Q[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,Q[_e].width,Q[_e].height,0,he,se,Q[_e].data);for(let tt=0;tt<ze.length;tt++){let gi=ze[tt].image[_e].image;Ae?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,gi.width,gi.height,he,se,gi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,oe,gi.width,gi.height,0,he,se,gi.data)}}else{Ae?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,se,Q[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,he,se,Q[_e]);for(let tt=0;tt<ze.length;tt++){let Ut=ze[tt];Ae?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,he,se,Ut.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,oe,he,se,Ut.image[_e])}}}w(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ae.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function rt(A,x,U,ee,$,ae){let de=s.convert(U.format,U.colorSpace),J=s.convert(U.type),j=T(U.internalFormat,de,J,U.normalized,U.colorSpace),ce=n.get(x),I=n.get(U);if(I.__renderTarget=x,!ce.__hasExternalTextures){let Q=Math.max(1,x.width>>ae),K=Math.max(1,x.height>>ae);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ae,j,Q,K,x.depth,0,de,J,null):t.texImage2D($,ae,j,Q,K,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,I.__webglTexture,0,lt(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,I.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Sn(A,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let ee=x.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,ae=_(x.stencilBuffer,$),de=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(x),ae,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,A)}else{let ee=x.textures;for(let $=0;$<ee.length;$++){let ae=ee[$],de=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),j=T(ae.internalFormat,de,J,ae.normalized,ae.colorSpace);me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(x),j,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(A,x,U){let ee=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);$.__renderTarget=x;let ae=ee?x.depthTexture.image[0]:x.depthTexture.image;(!$.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ee?le(x.depthTexture,0):ie(x.depthTexture,0);let de=$.__webglTexture,J=lt(x),j=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ce=x.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,j,de,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ce,j,de,0);else if(x.depthTexture.format===fi)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,j,de,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ce,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(A){let x=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let ee=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=ee}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let ee=0;ee<6;ee++)wt(x.__webglFramebuffer[ee],A,ee);else A.texture.mipmaps.length>0?wt(x.__webglFramebuffer[0],A,0):wt(x.__webglFramebuffer,A,0);else if(U){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=i.createRenderbuffer(),Sn(x.__webglDepthbuffer[ee],A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Sn(x.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(A,x,U){let ee=n.get(A);x!==void 0&&rt(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&nn(A)}function sn(A){let x=A.texture,U=n.get(A),ee=n.get(x);A.addEventListener("dispose",F),D(A);let $=A.textures,ae=A.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,a.memory.textures++),ae){U.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){U.__webglFramebuffer[J]=[];for(let j=0;j<x.mipmaps.length;j++)U.__webglFramebuffer[J][j]=i.createFramebuffer()}else U.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[J]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,j=$.length;J<j;J++){let ce=n.get($[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let j=$[J];U.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[J]);let ce=s.convert(j.format,j.colorSpace),I=s.convert(j.type),Q=T(j.internalFormat,ce,I,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),K=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,U.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Sn(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)rt(U.__webglFramebuffer[J][j],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else rt(U.__webglFramebuffer[J],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let J=0,j=$.length;J<j;J++){let ce=$[J],I=n.get(ce),Q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),Ve(Q,ce),rt(U.__webglFramebuffer,A,ce,i.COLOR_ATTACHMENT0+J,Q,0),w(ce)&&b(Q)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ee.__webglTexture),Ve(J,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)rt(U.__webglFramebuffer[j],A,x,i.COLOR_ATTACHMENT0,J,j);else rt(U.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,J,0);w(x)?b(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&nn(A)}function N(A){let x=A.textures;for(let U=0,ee=x.length;U<ee;U++){let $=x[U];if(w($)&&$.mipmapsAutoUpdate===!0){let ae=E(A),de=n.get($).__webglTexture;t.bindTexture(ae,de),b(ae),t.unbindTexture()}}}let an=[];function ot(A){if(A.samples>0){if(me(A)===!1){let x=A.textures,U=A.width,ee=A.height,$=i.COLOR_BUFFER_BIT,ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(A),J=x.length>1;if(J)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let I=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,U,ee,0,0,U,ee,$,i.NEAREST),l===!0&&(an.length=0,an.push(i.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&an.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let I=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function me(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Le(A,x){let U=A.colorSpace,ee=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==ai&&U!==At&&(Xe.getTransfer(U)===Qe?(ee!==St||$!==ut)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",U)),x}function Fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=pe,this.resetTextureUnits=Y,this.getTextureUnits=X,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=ge,this.setTexture3D=we,this.setTextureCube=le,this.rebindTextures=rn,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=me,this.dispose=B}function gy(i,e){function t(n,r=At){let s,a=Xe.getTransfer(r);if(n===ut)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===To)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===vt)return i.FLOAT;if(n===bt)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===St)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Ni)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===ra)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Io||n===Lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===No||n===Uo||n===Fo||n===Oo||n===sa||n===Bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Do||n===No)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fo)return s.COMPRESSED_R11_EAC;if(n===Oo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return s.COMPRESSED_RG11_EAC;if(n===Bo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Ko||n===Jo||n===jo||n===$o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===el||n===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qo)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===aa||n===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Is(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:_y,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends En{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new dh,m={},S=t.getContextAttributes(),w=null,b=null,E=[],T=[],_=new Re,M=null,D=null,C=new Ct;C.viewport=new Je;let P=new Ct;P.viewport=new Je;let F=[C,P],k=new xo,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=E[Z];return ie===void 0&&(ie=new Nr,E[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=E[Z];return ie===void 0&&(ie=new Nr,E[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=E[Z];return ie===void 0&&(ie=new Nr,E[Z]=ie),ie.getHandSpace()};function G(Z){let ie=T.indexOf(Z.inputSource);if(ie===-1)return;let ge=E[ie];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,c||a),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<E.length;Z++){let ie=T[Z];ie!==null&&(T[Z]=null,E[Z].disconnect(ie))}R=null,B=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(w),d=null,f=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,we=null,le=null;S.depth&&(le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?fi:si,we=S.stencil?cr:Nn);let Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $t(f.textureWidth,f.textureHeight,{format:St,type:ut,depthTexture:new li(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $t(d.framebufferWidth,d.framebufferHeight,{format:St,type:ut,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(Z){for(let ie=0;ie<Z.removed.length;ie++){let ge=Z.removed[ie],we=T.indexOf(ge);we>=0&&(T[we]=null,E[we].disconnect(ge))}for(let ie=0;ie<Z.added.length;ie++){let ge=Z.added[ie],we=T.indexOf(ge);if(we===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=T.length){T.push(ge),we=Ce;break}else if(T[Ce]===null){T[Ce]=ge,we=Ce;break}if(we===-1)break}let le=E[we];le&&le.connect(ge)}}function W(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ie=Z.near,ge=Z.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),k.near=P.near=C.near=ie,k.far=P.far=C.far=ge,(R!==k.near||B!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),R=k.near,B=k.far),k.layers.mask=Z.layers.mask|6,C.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let we=Z.parent,le=k.cameras;W(k,we);for(let Ce=0;Ce<le.length;Ce++)W(le[Ce],we);k.projectionMatrix.copy(C.projectionMatrix),k.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),Y(Z,k,we)};function Y(Z,ie,ge){ge===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Z){return m[Z]};let X=null;function te(Z,ie){if(h=ie.getViewerPose(c||a),p=ie,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let we=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,we=!0);for(let ve=0;ve<ge.length;ve++){let Ve=ge[ve],Ze=null;if(d!==null)Ze=d.getViewport(Ve);else{let mt=u.getViewSubImage(f,Ve);Ze=mt.viewport,ve===0&&(e.setRenderTargetTextures(b,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(b))}let ke=F[ve];ke===void 0&&(ke=new Ct,ke.layers.enable(ve),ke.viewport=new Je,F[ve]=ke),ke.matrix.fromArray(Ve.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ve.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ve===0&&(k.matrix.copy(ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),we===!0&&k.cameras.push(ke)}let le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ve=u.getDepthInformation(ge[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(le&&le.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ve=0;ve<ge.length;ve++){let Ve=ge[ve].camera;if(Ve){let Ze=m[Ve];Ze||(Ze=new Is,m[Ve]=Ze);let ke=u.getCameraImage(Ve);Ze.sourceTexture=ke}}}}for(let ge=0;ge<E.length;ge++){let we=T[ge],le=E[ge];we!==null&&le!==void 0&&le.update(we,ie,c||a)}X&&X(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let pe=new sf;pe.setAnimationLoop(te),this.setAnimationLoop=function(Z){X=Z},this.dispose=function(){}}},vy=new Ge,mf=new Ue;mf.set(-1,0,0,0,1,0,0,0,1);function yy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,eh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,b=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function by(i,e,t,n){let r={},s={};function a(S,w){let b=w.program;n.uniformBlockBinding(S,b,r[S.id])}function o(S,w){let b=r[S.id];b===void 0&&(p(S),b=l(S),r[S.id]=b,S.addEventListener("dispose",g));let E=w.program;n.updateUBOMapping(S,E);let T=e.render.frame;s[S.id]!==T&&(c(S),s[S.id]=T)}function l(S){let w=i.createBuffer(),b=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(S){let w=r[S.id],b=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,_=b.length;T<_;T++){let M=b[T];if(Array.isArray(M))for(let D=0,C=M.length;D<C;D++)h(M[D],T,D,E);else h(M,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,w,b,E){if(f(S,w,b,E)===!0){let T=S.__offset,_=S.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){let C=_[D],P=v(C,!0);u(C,S.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function u(S,w,b){typeof S=="number"||typeof S=="boolean"?w[b]=S:S.isMatrix3?(w[b]=S.elements[0],w[b+1]=S.elements[1],w[b+2]=S.elements[2],w[b+3]=0,w[b+4]=S.elements[3],w[b+5]=S.elements[4],w[b+6]=S.elements[5],w[b+7]=0,w[b+8]=S.elements[6],w[b+9]=S.elements[7],w[b+10]=S.elements[8],w[b+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-b),b):S.toArray(w,b)}function f(S,w,b,E){let T=S.value,_=w+"_"+b;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let M=E[_],D=!1;for(let C=0;C<T.length;C++)d(T[C],M,C)===!0&&(D=!0);return D}return d(T,E,_)}function d(S,w,b){if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:ArrayBuffer.isView(S)?w[b]=S.slice():w[b]=S.clone(),!0;{let E=w[b];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return w[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function p(S){let w=S.uniforms,b=0,E=16;for(let _=0,M=w.length;_<M;_++){let D=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,P=D.length;C<P;C++){let F=D[C],k=Array.isArray(F.value)?F.value:[F.value],R=Array.isArray(w[_])||Array.isArray(F.value),B=b;for(let H=0,ne=k.length;H<ne;H++){let W=k[H],Y=v(W,R),X=b%E,te=X%Y.boundary,pe=X+te;b+=te,pe!==0&&E-pe<Y.storage&&(b+=E-pe),H===0&&(B=b),b+=Y.storage}let G=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new G((b-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let T=b%E;return T>0&&(b+=E-T),S.__size=b,S.__cache={},this}function v(S,w){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(S){let w=S.target;w.removeEventListener("dispose",g),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function m(){for(let S in r)i.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:m}}var Sy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function My(){return Xn===null&&(Xn=new It(Sy,16,16,Hn,bt),Xn.name="DFG_LUT",Xn.minFilter=it,Xn.magFilter=it,Xn.wrapS=on,Xn.wrapT=on,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var dl=class{constructor(e={}){let{canvas:t=Ad(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ut}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Ro,Ao,Eo]),m=new Set([ut,Nn,Yr,cr,wo,To]),S=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,k=null,R=null,B=null;this._outputColorSpace=Rt;let G=0,H=0,ne=null,W=-1,Y=null,X=new Je,te=new Je,pe=null,Z=new Ie(0),ie=0,ge=t.width,we=t.height,le=1,Ce=null,et=null,ve=new Je(0,0,ge,we),Ve=new Je(0,0,ge,we),Ze=!1,ke=new Ei,mt=new oo,gt=!1,zt=!1,rt=new Ge,Sn=new O,wt=new Je,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rn=!1;function sn(){return ne===null?le:1}let N=n;function an(y,L){return t.getContext(y,L)}let ot,lt,me,yt,Le,Fe,A,x,U,ee,$,ae,de,J,j,ce,I,Q,K,he,se,oe,Ae;try{let y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){let L="webgl2";if(N=an(L,y),N===null)throw an(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(y){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ne("WebGLRenderer: "+y.message),y}function He(){ot=new Nx(N),ot.init(),se=new gy(N,ot),lt=new Mx(N,ot,e,se),me=new py(N,ot),lt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),k=N.createFramebuffer(),R=N.createFramebuffer(),B=N.createFramebuffer(),yt=new Ox(N),Le=new ey,Fe=new my(N,ot,me,Le,lt,se,yt),A=new Dx(C),x=new kg(N),oe=new bx(N,x),U=new Ux(N,x,yt,oe),ee=new kx(N,U,x,oe,yt),Q=new Bx(N,lt,Fe),j=new wx(Le),$=new Qv(C,A,ot,lt,oe,j),ae=new yy(C,Le),de=new ny,J=new ly(ot),I=new yx(C,A,me,ee,p,l),ce=new fy(C,ee,lt),Ae=new by(N,yt,lt,me),K=new Sx(N,ot,yt),he=new Fx(N,ot,yt),yt.programs=$.programs,C.capabilities=lt,C.extensions=ot,C.properties=Le,C.renderLists=de,C.shadowMap=ce,C.state=me,C.info=yt}v!==ut&&(D=new Gx(v,t.width,t.height,o,r,s));let re=new fh(C,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(y){y!==void 0&&(le=y,this.setSize(ge,we,!1))},this.getSize=function(y){return y.set(ge,we)},this.setSize=function(y,L,q=!0){if(re.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=y,we=L,t.width=Math.floor(y*le),t.height=Math.floor(L*le),q===!0&&(t.style.width=y+"px",t.style.height=L+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(ge*le,we*le).floor()},this.setDrawingBufferSize=function(y,L,q){ge=y,we=L,le=q,t.width=Math.floor(y*q),t.height=Math.floor(L*q),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===ut){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,L,q,z){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,L,q,z),me.viewport(X.copy(ve).multiplyScalar(sn()).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,L,q,z){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,L,q,z),me.scissor(te.copy(Ve).multiplyScalar(sn()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){me.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){Ce=y},this.setTransparentSort=function(y){et=y},this.getClearColor=function(y){return y.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,q=!0){let z=0;if(y){let V=!1;if(ne!==null){let fe=ne.texture.format;V=g.has(fe)}if(V){let fe=ne.texture.type,be=m.has(fe),ue=I.getClearColor(),ye=I.getClearAlpha(),Te=ue.r,Oe=ue.g,qe=ue.b;be?(S[0]=Te,S[1]=Oe,S[2]=qe,S[3]=ye,N.clearBufferuiv(N.COLOR,0,S)):(w[0]=Te,w[1]=Oe,w[2]=qe,w[3]=ye,N.clearBufferiv(N.COLOR,0,w))}else z|=N.COLOR_BUFFER_BIT}L&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),I.dispose(),de.dispose(),J.dispose(),Fe.dispose(),Le.dispose(),A.dispose(),ee.dispose(),U.dispose(),oe.dispose(),Ae.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",Xh),re.removeEventListener("sessionend",qh),Fi.stop()};function Pe(y){y.preventDefault(),_s("WebGLRenderer: Context Lost."),P=!0}function ze(){_s("WebGLRenderer: Context Restored."),P=!1;let y=yt.autoReset,L=ce.enabled,q=ce.autoUpdate,z=ce.needsUpdate,V=ce.type;He(),yt.autoReset=y,ce.enabled=L,ce.autoUpdate=q,ce.needsUpdate=z,ce.type=V}function _e(y){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function tt(y){let L=y.target;L.removeEventListener("dispose",tt),Ut(L)}function Ut(y){gi(y),Le.remove(y)}function gi(y){let L=Le.get(y).programs;L!==void 0&&(L.forEach(function(q){$.releaseProgram(q)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,q,z,V,fe){L===null&&(L=nn);let be=V.isMesh&&V.matrixWorld.determinantAffine()<0,ue=sm(y,L,q,z,V);me.setMaterial(z,be);let ye=q.index,Te=1;if(z.wireframe===!0){if(ye=U.getWireframeAttribute(q),ye===void 0)return;Te=2}let Oe=q.drawRange,qe=q.attributes.position,Se=Oe.start*Te,Ye=(Oe.start+Oe.count)*Te;fe!==null&&(Se=Math.max(Se,fe.start*Te),Ye=Math.min(Ye,(fe.start+fe.count)*Te)),ye!==null?(Se=Math.max(Se,0),Ye=Math.min(Ye,ye.count)):qe!=null&&(Se=Math.max(Se,0),Ye=Math.min(Ye,qe.count));let Tt=Ye-Se;if(Tt<0||Tt===1/0)return;oe.setup(V,z,ue,q,ye);let ct,st=K;if(ye!==null&&(ct=x.get(ye),st=he,st.setIndex(ct)),V.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*sn()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(V.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),me.setLineWidth(Wt*sn()),V.isLineSegments?st.setMode(N.LINES):V.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else V.isPoints?st.setMode(N.POINTS):V.isSprite&&st.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Wt=V._multiDrawStarts,Me=V._multiDrawCounts,Jt=V._multiDrawCount,je=ye?x.get(ye).bytesPerElement:1,Oi=Le.get(z).currentProgram.getUniforms();for(let Xt=0;Xt<Jt;Xt++)Oi.setValue(N,"_gl_DrawID",Xt),st.render(Wt[Xt]/je,Me[Xt])}else if(V.isInstancedMesh)st.renderInstances(Se,Tt,V.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Wt);st.renderInstances(Se,Tt,Me)}else st.render(Se,Tt)};function Wh(y,L,q,z){F!==null&&y.isNodeMaterial&&F.setObject(z,y),gt===!0&&j.setState(y,q,!1),y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,ns(y,L,z),y.side=Gn,y.needsUpdate=!0,ns(y,L,z),y.side=Vt):ns(y,L,z)}this.compile=function(y,L,q=null){q===null&&(q=y),F!==null&&F.renderStart(y,L,q),T=J.get(q),T.init(L),M.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),y!==q&&y.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,gt=j.init(this.clippingPlanes,zt),gt===!0&&j.setGlobalState(this.clippingPlanes,L),F!==null&&ce.render(T.state.shadowsArray,q,L);let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let fe=V.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){let ue=fe[be];Wh(ue,q,L,V),z.add(ue)}else Wh(fe,q,L,V),z.add(fe)}),T=M.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(y,L,q=null){let z=this.compile(y,L,q);return new Promise(V=>{function fe(){if(z.forEach(function(be){let ye=Le.get(be).currentProgram;(ye===void 0||ye.isReady())&&z.delete(be)}),z.size===0){V(y);return}setTimeout(fe,10)}ot.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let kl=null;function im(y){kl&&kl(y)}function Xh(){Fi.stop()}function qh(){Fi.start()}let Fi=new sf;Fi.setAnimationLoop(im),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(y){kl=y,re.setAnimationLoop(y),y===null?Fi.stop():Fi.start()},re.addEventListener("sessionstart",Xh),re.addEventListener("sessionend",qh),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(y,L);let q=re.enabled===!0&&re.isPresenting===!0,z=D!==null&&(ne===null||q)&&D.begin(C,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(L),L=re.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,L,ne),T=J.get(y,M.length),T.init(L),T.state.textureUnits=Fe.getTextureUnits(),M.push(T),rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?mt.setFromArrayCamera(L):ke.setFromProjectionMatrix(rt,wn,L.reversedDepth),zt=this.localClippingEnabled,gt=j.init(this.clippingPlanes,zt),E=de.get(y,_.length),E.init(),_.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let be=C.xr.getDepthSensingMesh();be!==null&&zl(be,L,-1/0,C.sortObjects)}zl(y,L,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Ce,et),rn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,rn&&I.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),gt===!0&&j.beginShadows();let V=T.state.shadowsArray;if(ce.render(V,y,L),gt===!0&&j.endShadows(),(z&&D.hasRenderPass())===!1){let be=E.opaque,ue=E.transmissive;if(T.setupLights(),L.isArrayCamera){let ye=L.cameras;if(ue.length>0)for(let Te=0,Oe=ye.length;Te<Oe;Te++){let qe=ye[Te];Zh(be,ue,y,qe)}rn&&I.render(y);for(let Te=0,Oe=ye.length;Te<Oe;Te++){let qe=ye[Te];Yh(E,y,qe,qe.viewport)}}else ue.length>0&&Zh(be,ue,y,L),rn&&I.render(y),Yh(E,y,L)}ne!==null&&H===0&&(Fe.updateMultisampleRenderTarget(ne),Fe.updateRenderTargetMipmap(ne)),z&&D.end(C),y.isScene===!0&&y.onAfterRender(C,y,L),oe.resetDefaultState(),W=-1,Y=null,M.pop(),M.length>0?(T=M[M.length-1],Fe.setTextureUnits(T.state.textureUnits),gt===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,F!==null&&F.renderEnd()};function zl(y,L,q,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let be=L.isArrayCamera?mt:ke;if(!y.frustumCulled||y.intersectsFrustum(be)){z&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(rt);let ue=ee.update(y),ye=y.material;ye.visible&&E.push(y,ue,ye,q,wt.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let be=L.isArrayCamera?mt:ke;if(!y.frustumCulled||y.intersectsFrustum(be)){let ue=ee.update(y),ye=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),wt.copy(ue.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(rt)),Array.isArray(ye)){let Te=ue.groups;for(let Oe=0,qe=Te.length;Oe<qe;Oe++){let Se=Te[Oe],Ye=ye[Se.materialIndex];Ye&&Ye.visible&&E.push(y,ue,Ye,q,wt.z,Se,L)}}else ye.visible&&E.push(y,ue,ye,q,wt.z,null,L)}}}let fe=y.children;for(let be=0,ue=fe.length;be<ue;be++)zl(fe[be],L,q,z)}function Yh(y,L,q,z){let{opaque:V,transmissive:fe,transparent:be}=y;T.setupLightsView(q),gt===!0&&j.setGlobalState(C.clippingPlanes,q),z&&me.viewport(X.copy(z)),V.length>0&&va(V,L,q),fe.length>0&&va(fe,L,q),be.length>0&&va(be,L,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Zh(y,L,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Se=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new $t(1,1,{generateMipmaps:!0,type:Se?bt:ut,minFilter:dn,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let fe=T.state.transmissionRenderTarget[z.id],be=z.viewport||X;fe.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);let ue=C.getRenderTarget(),ye=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Z),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),rn&&I.render(q);let Oe=C.toneMapping;C.toneMapping=Vn;let qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),gt===!0&&j.setGlobalState(C.clippingPlanes,z),va(y,q,z),Fe.updateMultisampleRenderTarget(fe),Fe.updateRenderTargetMipmap(fe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ye=0,Tt=L.length;Ye<Tt;Ye++){let ct=L[Ye],{object:st,geometry:Wt,material:Me,group:Jt}=ct;if(Me.side===Vt&&st.layers.test(z.layers)){let je=Me.side;Me.side=tn,Me.needsUpdate=!0,Kh(st,q,z,Wt,Me,Jt),Me.side=je,Me.needsUpdate=!0,Se=!0}}Se===!0&&(Fe.updateMultisampleRenderTarget(fe),Fe.updateRenderTargetMipmap(fe))}C.setRenderTarget(ue,ye,Te),C.setClearColor(Z,ie),qe!==void 0&&(z.viewport=qe),C.toneMapping=Oe}function va(y,L,q){let z=L.isScene===!0?L.overrideMaterial:null;for(let V=0,fe=y.length;V<fe;V++){let be=y[V],{object:ue,geometry:ye,group:Te}=be,Oe=be.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ue.layers.test(q.layers)&&Kh(ue,L,q,ye,Oe,Te)}}function Kh(y,L,q,z,V,fe){F!==null&&V.isNodeMaterial&&F.setObject(y,V),y.onBeforeRender(C,L,q,z,V,fe),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,L,q,z,y,fe),V.transparent===!0&&V.side===Vt&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,C.renderBufferDirect(q,L,z,V,y,fe),V.side=Gn,V.needsUpdate=!0,C.renderBufferDirect(q,L,z,V,y,fe),V.side=Vt):C.renderBufferDirect(q,L,z,V,y,fe),y.onAfterRender(C,L,q,z,V,fe)}function Jh(y){let L=0;for(let q of y)q.texture!==null&&L++;return L}function ns(y,L,q){L.isScene!==!0&&(L=nn);let z=Le.get(y),V=T.state.lights,fe=T.state.shadowsArray,be=V.state.version,ue=$.getParameters(y,V.state,fe,L,q,T.state.lightProbeGridArray),ye=$.getProgramCacheKey(ue),Te=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=A.get(y.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",tt),Te=new Map,z.programs=Te,z.programVariants=new Map);let qe=Te.get(ye);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===be)return $h(y,ue),qe}else ue.uniforms=$.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,q,ue),y.onBeforeCompile(ue,C),qe=$.acquireProgram(ue,ye),Te.set(ye,qe),z.uniforms=ue.uniforms;let Se=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=j.uniform),$h(y,ue),z.needsLights=om(y),z.lightsStateVersion=be,z.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),z.numLightProbeGrids=Jh(T.state.lightProbeGridArray),z.currentProgram=qe,z.uniformsList=null,qe}function rm(y,L,q,z,V){let fe=Le.get(y),be=fe.currentProgram.id+","+z+","+V,ue=fe.programVariants.get(be);return ue===void 0?(ue=ns(y,L,q),fe.programVariants.set(be,ue)):(fe.currentProgram=ue,fe.uniformsList=null,fe.outputColorSpace=z,fe.toneMapping=V),ue}function jh(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Kr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function $h(y,L){let q=Le.get(y);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function sm(y,L,q,z,V){L.isScene!==!0&&(L=nn),Fe.resetTextureUnits();let fe=L.fog,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ue=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=A.get(z.envMap||be,ye),Oe=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!q.morphAttributes.position,Ye=!!q.morphAttributes.normal,Tt=!!q.morphAttributes.color,ct=Vn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ct=C.toneMapping);let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=st!==void 0?st.length:0,Me=Le.get(z),Jt=T.state.lights;if(gt===!0&&(zt===!0||y!==Y)){let dt=y===Y&&z.id===W;j.setState(z,y,dt)}let je=!1,Oi=!1;z.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Jt.state.version||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==Te||z.fog===!0&&Me.fog!==fe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==j.numPlanes||Me.numIntersection!==j.numIntersection)||Me.vertexAlphas!==Oe||Me.vertexTangents!==qe||Me.morphTargets!==Se||Me.morphNormals!==Ye||Me.morphColors!==Tt||Me.morphTargetsCount!==Wt||Me.numLightProbeGrids!==Jh(T.state.lightProbeGridArray)?je=!0:(Me.outputColorSpace!==ue||Me.toneMapping!==ct)&&(Oi=!0):(je=!0,Me.__version=z.version);let Xt=Me.currentProgram;(je===!0||Oi===!0)&&(Xt=Oi===!0?rm(z,L,V,ue,ct):ns(z,L,V),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Xt,Me));let ya=!1,_i=!1,Bi=!1,Ke=Xt.getUniforms(),Gt=Me.uniforms;if(me.useProgram(Xt.program)&&(ya=!0,_i=!0,Bi=!0),z.id!==W&&(W=z.id,_i=!0),ya||Y!==y){me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ke.setValue(N,"projectionMatrix",y.projectionMatrix),Ke.setValue(N,"viewMatrix",y.matrixWorldInverse);let Ft=Ke.map.cameraPosition;Ft!==void 0&&Ft.setValue(N,Sn.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&Ke.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ke.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,_i=!0,Bi=!0)}if(Me.needsLights&&(Jt.state.sunShadowMap.length>0&&Ke.setValue(N,"sunShadowMap",Jt.state.sunShadowMap,Fe),Jt.state.directionalShadowMap.length>0&&Ke.setValue(N,"directionalShadowMap",Jt.state.directionalShadowMap,Fe),Jt.state.spotShadowMap.length>0&&Ke.setValue(N,"spotShadowMap",Jt.state.spotShadowMap,Fe),Jt.state.pointShadowMap.length>0&&Ke.setValue(N,"pointShadowMap",Jt.state.pointShadowMap,Fe)),V.isSkinnedMesh){Ke.setOptional(N,V,"bindMatrix"),Ke.setOptional(N,V,"bindMatrixInverse");let dt=V.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Ke.setValue(N,"boneTexture",dt.boneTexture,Fe))}V.isBatchedMesh&&(Ke.setOptional(N,V,"batchingTexture"),Ke.setValue(N,"batchingTexture",V._matricesTexture,Fe),Ke.setOptional(N,V,"batchingIdTexture"),Ke.setValue(N,"batchingIdTexture",V._indirectTexture,Fe),Ke.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Ke.setValue(N,"batchingColorTexture",V._colorsTexture,Fe));let Cn=q.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Q.update(V,q,Xt),(_i||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,Ke.setValue(N,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Gt.envMapIntensity.value=L.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=My()),_i){if(Ke.setValue(N,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&am(Gt,Bi),fe&&z.fog===!0&&ae.refreshFogUniforms(Gt,fe),ae.refreshMaterialUniforms(Gt,z,le,we,T.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){let dt=b,Ft=0;for(let Kn of T.state.lightProbeGridArray)Kn.texture!==null&&(dt.textures[Ft]=Kn.texture,dt.min[Ft]=Kn.boundingBox.min,dt.max[Ft]=Kn.boundingBox.max,dt.resolution[Ft]=Kn.resolution,Ft++);for(let Kn in dt)dt[Kn].length=Ft;Gt.probesSH.value=dt.textures,Gt.probesMin.value=dt.min,Gt.probesMax.value=dt.max,Gt.probesResolution.value=dt.resolution}Kr.upload(N,jh(Me),Gt,Fe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Kr.upload(N,jh(Me),Gt,Fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ke.setValue(N,"center",V.center),Ke.setValue(N,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(N,"normalMatrix",V.normalMatrix),Ke.setValue(N,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let dt=z.uniformsGroups;for(let Ft=0,Kn=dt.length;Ft<Kn;Ft++){let eu=dt[Ft];Ae.update(eu,Xt),Ae.bind(eu,Xt)}}return Xt}function am(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function om(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,L,q){let z=Le.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Le.get(y.texture).__webglTexture=L,Le.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let q=Le.get(y);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,q=0){ne=y,G=L,H=q;let z=null,V=!1,fe=!1;if(y){let ue=Le.get(y);if(ue.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),X.copy(y.viewport),te.copy(y.scissor),pe=y.scissorTest,me.viewport(X),me.scissor(te),me.setScissorTest(pe),W=-1;return}else if(ue.__webglFramebuffer===void 0)Fe.setupRenderTarget(y);else if(ue.__hasExternalTextures)Fe.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Oe=y.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&Le.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Te=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?z=Te[L][q]:z=Te[L],V=!0):y.samples>0&&Fe.useMultisampledRTT(y)===!1?z=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[q]:z=Te,X.copy(y.viewport),te.copy(y.scissor),pe=y.scissorTest}else X.copy(ve).multiplyScalar(le).floor(),te.copy(Ve).multiplyScalar(le).floor(),pe=Ze;if(q!==0&&(z=k),me.bindFramebuffer(N.FRAMEBUFFER,z)&&me.drawBuffers(y,z),me.viewport(X),me.scissor(te),me.setScissorTest(pe),V){let ue=Le.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,q)}else if(fe){let ue=L;for(let ye=0;ye<y.textures.length;ye++){let Te=Le.get(y.textures[ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ye,Te.__webglTexture,q,ue)}}else if(y!==null&&q!==0){let ue=Le.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,q)}W=-1};function Qh(y){let L=Le.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=lt.textureFormatReadable(y.format),L.__typeReadable=lt.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,q,z,V,fe,be,ue=0){if(!(y&&y.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye){me.bindFramebuffer(N.FRAMEBUFFER,ye);try{let Te=y.textures[ue],Oe=Te.format,qe=Te.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let Se=Qh(Te);if(Se.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&q>=0&&q<=y.height-V&&N.readPixels(L,q,z,V,se.convert(Oe),se.convert(qe),fe)}finally{let Te=ne!==null?Le.get(ne).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,L,q,z,V,fe,be,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye)if(L>=0&&L<=y.width-z&&q>=0&&q<=y.height-V){me.bindFramebuffer(N.FRAMEBUFFER,ye);let Te=y.textures[ue],Oe=Te.format,qe=Te.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let Se=Qh(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(L,q,z,V,se.convert(Oe),se.convert(qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Tt=ne!==null?Le.get(ne).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Tt);let ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Cd(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ye),N.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,q=0){let z=Math.pow(2,-q),V=Math.floor(y.image.width*z),fe=Math.floor(y.image.height*z),be=L!==null?L.x:0,ue=L!==null?L.y:0;Fe.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,be,ue,V,fe),me.unbindTexture()},this.copyTextureToTexture=function(y,L,q=null,z=null,V=0,fe=0){let be,ue,ye,Te,Oe,qe,Se,Ye,Tt,ct=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(q!==null)be=q.max.x-q.min.x,ue=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Oe=q.min.y,qe=q.isBox3?q.min.z:0;else{let Ke=Math.pow(2,-V);be=Math.floor(ct.width*Ke),ue=Math.floor(ct.height*Ke),y.isDataArrayTexture?ye=ct.depth:y.isData3DTexture?ye=Math.floor(ct.depth*Ke):ye=1,Te=0,Oe=0,qe=0}z!==null?(Se=z.x,Ye=z.y,Tt=z.z):(Se=0,Ye=0,Tt=0);let st=se.convert(L.format),Wt=se.convert(L.type),Me;L.isData3DTexture?(Fe.setTexture3D(L,0),Me=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Fe.setTexture2DArray(L,0),Me=N.TEXTURE_2D_ARRAY):(Fe.setTexture2D(L,0),Me=N.TEXTURE_2D),me.activeTexture(N.TEXTURE0),me.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),me.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),me.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Jt=me.getParameter(N.UNPACK_ROW_LENGTH),je=me.getParameter(N.UNPACK_IMAGE_HEIGHT),Oi=me.getParameter(N.UNPACK_SKIP_PIXELS),Xt=me.getParameter(N.UNPACK_SKIP_ROWS),ya=me.getParameter(N.UNPACK_SKIP_IMAGES);me.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),me.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),me.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),me.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);let _i=y.isDataArrayTexture||y.isData3DTexture,Bi=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let Ke=Le.get(y),Gt=Le.get(L),Cn=Le.get(Ke.__renderTarget),dt=Le.get(Gt.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Cn.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Ft=0;Ft<ye;Ft++)_i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(y).__webglTexture,V,qe+Ft),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(L).__webglTexture,fe,Tt+Ft)),N.blitFramebuffer(Te,Oe,Te+be,Oe+ue,Se,Ye,Se+be,Ye+ue,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||Le.has(y)){let Ke=Le.get(y),Gt=Le.get(L);me.bindFramebuffer(N.READ_FRAMEBUFFER,R),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let Cn=0;Cn<ye;Cn++)_i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ke.__webglTexture,V,qe+Cn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ke.__webglTexture,V),Bi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Gt.__webglTexture,fe,Tt+Cn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Gt.__webglTexture,fe),V!==0?N.blitFramebuffer(Te,Oe,Te+be,Oe+ue,Se,Ye,Se+be,Ye+ue,N.COLOR_BUFFER_BIT,N.NEAREST):Bi?N.copyTexSubImage3D(Me,fe,Se,Ye,Tt+Cn,Te,Oe,be,ue):N.copyTexSubImage2D(Me,fe,Se,Ye,Te,Oe,be,ue);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bi?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Me,fe,Se,Ye,Tt,be,ue,ye,st,Wt,ct.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,fe,Se,Ye,Tt,be,ue,ye,st,ct.data):N.texSubImage3D(Me,fe,Se,Ye,Tt,be,ue,ye,st,Wt,ct):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Se,Ye,be,ue,st,Wt,ct.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Se,Ye,ct.width,ct.height,st,ct.data):N.texSubImage2D(N.TEXTURE_2D,fe,Se,Ye,be,ue,st,Wt,ct);me.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),me.pixelStorei(N.UNPACK_SKIP_PIXELS,Oi),me.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),me.pixelStorei(N.UNPACK_SKIP_IMAGES,ya),fe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Me),me.unbindTexture()},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&Fe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Fe.setTextureCube(y,0):y.isData3DTexture?Fe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Fe.setTexture2DArray(y,0):Fe.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){G=0,H=0,ne=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var ml=Object.freeze({fbx:Object.freeze({id:"dsh-3d-viewer/fbx",format:"fbx",extensions:Object.freeze(["fbx"]),titleKey:"rendererTitle",badgeKey:"badge",label:"FBX"}),obj:Object.freeze({id:"dsh-3d-viewer/obj",format:"obj",extensions:Object.freeze(["obj"]),titleKey:"objRendererTitle",badgeKey:"objBadge",label:"OBJ"}),gltf:Object.freeze({id:"dsh-3d-viewer/gltf",format:"gltf",extensions:Object.freeze(["gltf","glb"]),titleKey:"gltfRendererTitle",badgeKey:"gltfBadge",glbBadgeKey:"glbBadge",label:"glTF / GLB"}),stl:Object.freeze({id:"dsh-3d-viewer/stl",format:"stl",extensions:Object.freeze(["stl"]),titleKey:"stlRendererTitle",badgeKey:"stlBadge",label:"STL"})}),wy=Object.freeze(Object.keys(ml)),gf=Object.freeze(wy.map(i=>ml[i]));function mh(i){return i==="glb"?"gltf":typeof i=="string"&&Object.hasOwn(ml,i)?i:"fbx"}function _f(i,e=!1){let t=ml[mh(i)];return e===!0&&t.glbBadgeKey!==void 0?t.glbBadgeKey:t.badgeKey}function xf(i){return typeof i=="string"&&/\.glb(?:[?#]|$)/iu.test(i)}var vf=Object.freeze({tga:Object.freeze({id:"dsh-3d-viewer/tga",format:"tga",extensions:Object.freeze(["tga"]),titleKey:"tgaRendererTitle",badgeKey:"tgaBadge",label:"TGA"}),exr:Object.freeze({id:"dsh-3d-viewer/exr",format:"exr",extensions:Object.freeze(["exr"]),titleKey:"exrRendererTitle",badgeKey:"exrBadge",label:"EXR"}),hdr:Object.freeze({id:"dsh-3d-viewer/hdr",format:"hdr",extensions:Object.freeze(["hdr"]),titleKey:"hdrRendererTitle",badgeKey:"hdrBadge",label:"HDR"})}),Ty=Object.freeze(Object.keys(vf)),yf=Object.freeze(Ty.map(i=>vf[i]));var fT=new TextDecoder("utf-8");function bf(i){if(i instanceof ArrayBuffer)return i;if(ArrayBuffer.isView(i))return i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer:i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength);if(typeof i=="string")return new TextEncoder().encode(i).buffer;throw new TypeError("The 3D preview was not given binary data")}function Sf(i){if(typeof Uint8Array.fromBase64=="function")return Uint8Array.fromBase64(i);let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n);return t}function $r(i){let e=globalThis.__DSH3DV_REQUIRE__;return e===void 0||typeof e.async!="function"?Promise.reject(new Error("The DSH module loader is unavailable for 3D format chunks.")):e.async(i)}var Ey="./client.tex-worker.js",Ay=2,Mf=Symbol.for("dsh3d.texture-worker-pool.v1");function Ry(){let i=globalThis[Mf];return i===void 0&&(i={workerPoolPromise:null,workerPool:[],workerIndex:0,nextRequestId:0,pendingRequests:new Map},Object.defineProperty(globalThis,Mf,{value:i,configurable:!0})),i}var ht=Ry();function Cy(i=globalThis.navigator){let e=Number(i?.hardwareConcurrency),t=Number(i?.deviceMemory);return Number.isFinite(t)&&t>0&&t<=4||Number.isFinite(e)&&e>0&&e<=4?1:Ay}function _l(i){let e=new Error("The texture worker is unavailable.");return e.code="worker-unavailable",e.cause=i,e}function gl(){let i=new Error("Texture decoding was cancelled.");return i.name="AbortError",i.code="abort",i}function Tf(i){if(i instanceof ArrayBuffer)return i.slice(0);if(ArrayBuffer.isView(i))return i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength);throw new Error("The texture bytes are not an ArrayBuffer or typed array.")}function Py(i){return i instanceof ArrayBuffer?i:ArrayBuffer.isView(i)&&i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer:Tf(i)}function xl(i){i!==void 0&&i.signal?.removeEventListener("abort",i.onAbort)}function Ef(i){i.worker.terminate(),i.url!==""&&(URL.revokeObjectURL(i.url),i.url="");let e=ht.workerPool.indexOf(i);e!==-1&&ht.workerPool.splice(e,1),ht.workerIndex=0,ht.workerPool.length===0&&(ht.workerPoolPromise=null)}function Iy(i,e){for(let t of i.pending){let n=ht.pendingRequests.get(t);ht.pendingRequests.delete(t),xl(n),n?.reject(e)}i.pending.clear()}function Ly(i,e){i.url!==""&&(URL.revokeObjectURL(i.url),i.url="");let t=e.data?.id,n=ht.pendingRequests.get(t);n!==void 0&&(ht.pendingRequests.delete(t),i.pending.delete(t),xl(n),e.data.ok===!0?n.resolve(e.data):n.reject(new Error(e.data.error??"The texture worker failed.")))}function wf(i,e){let t=_l(new Error(e.message||"The texture worker failed."));i.rejectReady?.(t),Iy(i,t),Ef(i)}function Dy(i){let e=ht.pendingRequests.get(i);e!==void 0&&(ht.pendingRequests.delete(i),e.entry.pending.delete(i),xl(e),e.reject(gl()),e.entry.pending.size===0&&Ef(e.entry))}function Ny(i){let e=URL.createObjectURL(new Blob([i],{type:"text/javascript"})),t;try{t=new Worker(e)}catch(o){throw URL.revokeObjectURL(e),o}let n,r,s=new Promise((o,l)=>{n=o,r=l}),a={worker:t,url:e,pending:new Set,ready:!1,readyPromise:s,rejectReady:r};return t.onmessage=o=>{if(o.data?.ready===!0){a.ready||(a.ready=!0,n());return}Ly(a,o)},t.onerror=o=>wf(a,o),t.onmessageerror=o=>wf(a,o),a}function Uy(){return ht.workerPoolPromise!==null||(ht.workerPoolPromise=(async()=>{if(typeof Worker!="function")throw new Error("Workers are unavailable.");let i=await $r(Ey);if(typeof i.workerSource!="string")throw new Error("The texture worker chunk is unavailable.");let e=[];try{let t=Cy();for(let n=0;n<t;n+=1)e.push(Ny(i.workerSource));await Promise.all(e.map(n=>n.readyPromise))}catch(t){for(let n of e)n.worker.terminate(),URL.revokeObjectURL(n.url);throw t}return ht.workerPool=e,ht.workerIndex=0,ht.workerPool})().catch(i=>{throw ht.workerPoolPromise=null,ht.workerPool=[],_l(i)})),ht.workerPoolPromise}function Fy(i,e){let t=e.type===vt?Float32Array:e.type===ut?Uint8Array:Uint16Array,n=new It(new t(e.data),e.width,e.height,e.format??St,e.type??bt);return n.colorSpace=e.colorSpace??At,n.flipY=e.flipY??i==="hdr",n.generateMipmaps=e.generateMipmaps??!1,n.minFilter=e.minFilter??it,n.magFilter=e.magFilter??it,n.unpackAlignment=e.unpackAlignment??1,n.userData.dsh3dHdr=!0,i==="exr"&&(n.userData.dsh3dSourceBottomUp=!0),n.needsUpdate=!0,n}async function Af(i,e,t,n={}){let{signal:r,transfer:s=!1}=n;if(r?.aborted===!0)throw gl();if(i!=="exr"&&i!=="hdr")return t(i,e);let a=!1;try{let o=await Uy();if(r?.aborted===!0)throw gl();if(o.length===0)throw _l(new Error("No texture workers are available."));let l=o[ht.workerIndex%o.length];ht.workerIndex=(ht.workerIndex+1)%o.length;let c=ht.nextRequestId+=1,h=s?Py(e):Tf(e),u=await new Promise((f,d)=>{let p={resolve:f,reject:d,entry:l,signal:r,onAbort:null};p.onAbort=()=>Dy(c),ht.pendingRequests.set(c,p),l.pending.add(c),r?.addEventListener("abort",p.onAbort,{once:!0});try{l.worker.postMessage({id:c,format:i,bytes:h},[h]),a=s&&(e instanceof ArrayBuffer,e.byteLength===0)}catch(v){ht.pendingRequests.delete(c),l.pending.delete(c),xl(p),d(_l(v))}});return Fy(i,u)}catch(o){if(o?.code==="abort"||r?.aborted===!0)throw o?.code==="abort"?o:gl();if(o?.code!=="worker-unavailable"||a)throw o;return t(i,e)}}var Rf="dsh-resource://file/";var CT=new Pi(new Ci),gh=new Map;function Oy(i){let e=`./client.tex-${i}.js`,t=gh.get(e);return t===void 0&&(t=$r(e),gh.set(e,t),t.catch(()=>gh.delete(e))),t}async function By(i,e){let r=(await Oy(i))[{tga:"decodeTga",exr:"decodeExr",hdr:"decodeHdr"}[i]];if(typeof r!="function")throw new Error(`The ${i.toUpperCase()} decoder chunk is unavailable.`);return r(bf(e))}async function Cf(i,e,t={}){return Af(i,e,By,t)}function _h(i){if(!(typeof i!="string"||!i.startsWith(Rf)))try{let e=i.search(/[?#]/),[t,...n]=i.slice(Rf.length,e===-1?void 0:e).split("/");if(t!=="session")return;let[r,...s]=n;return r===void 0||r===""||s.length===0?void 0:{scope:"session",sessionId:decodeURIComponent(r),path:s.map(decodeURIComponent).join("/")}}catch{return}}async function Pf(i,e,t,n={}){let r=_h(e);if(r===void 0)return{ok:!1,error:{message:`Not a session file address: ${String(e)}`}};let s=i?.workspaceFiles;if(s===void 0||typeof s.readBytes!="function")return{ok:!1,error:{message:"The workspaceFiles Remote is unavailable."}};let a={},o=typeof n.baseFile=="string"&&n.baseFile!==""?n.baseFile:r.path;o!==""&&(a.baseFile=o);try{return await s.readBytes(r.sessionId,t.replaceAll("\\","/"),a,n.signal)}catch(l){return{ok:!1,error:{message:l instanceof Error?l.message:String(l)}}}}var Ht=ki(require("react"),1);var xh=2143289344;function ky(i,e,t){let n=Math.imul(i^2654435769,2246822507);return n=Math.imul(n^e,3266489909),n=Math.imul(n^t,668265263),n^n>>>15}function If(i,e,t){let n=e*3,r=t*3;for(let s=0;s<3;s+=1){let a=i[n+s],o=i[r+s];if(a!==o&&!(a!==a&&o!==o))return!1}return!0}function zy(i,e){let t=new Uint32Array(i.buffer,i.byteOffset,i.length),n=new Map,r=0;for(let s=0;s<e;s+=1){let a=s*3,o=i[a],l=i[a+1],c=i[a+2],h=o===0?0:o!==o?xh:t[a],u=l===0?0:l!==l?xh:t[a+1],f=c===0?0:c!==c?xh:t[a+2],d=ky(h,u,f),p=n.get(d);if(p===void 0){n.set(d,s),r+=1;continue}if(typeof p=="number"){if(If(i,p,s))continue;n.set(d,[p,s]),r+=1;continue}let v=!1;for(let g=0;g<p.length;g+=1)if(If(i,p[g],s)){v=!0;break}v||(p.push(s),r+=1)}return r}function Gy(i){let e=i.count;if(e<=0)return 0;if(i.itemSize===3&&i.array instanceof Float32Array&&i.isInterleavedBufferAttribute!==!0)return zy(i.array,e);let t=new Set;for(let n=0;n<e;n+=1)t.add(`${i.getX(n)},${i.getY(n)},${i.getZ(n)}`);return t.size}function Vy(i,e){if(Array.isArray(i))for(let t of i)t!=null&&e.add(t);else i!=null&&e.add(i)}function Lf(i){i.updateMatrixWorld(!0);let e=new Zt,t=new O,n=new O,r=new Zt,s=0,a=0,o=0,l=0,c=new Set,h=u=>{if(u.visible===!1)return;let f=u.geometry;if(f!=null){let p=u.isMesh===!0,v=u.isLine===!0,g=u.isPoints===!0;if((p||v||g)&&(a+=1,f.computeBoundingBox(),f.boundingBox!==null&&e.union(r.copy(f.boundingBox).applyMatrix4(u.matrixWorld)),p)){s+=1;let m=f.getAttribute("position");if(m!==void 0&&m.count>0){o+=Gy(m);let S=f.getIndex();l+=Math.floor((S===null?m.count:S.count)/3)}Vy(u.material,c)}}let d=u.children;for(let p=0;p<d.length;p+=1)h(d[p])};return h(i),e.getSize(t),e.getCenter(n),{meshes:s,renderables:a,vertices:o,triangles:l,materials:c.size,box:e,size:t,center:n,maxDimension:Math.max(t.x,t.y,t.z)}}function Df(i){let e=[];i.traverse(t=>{(t.isLight===!0||t.isCamera===!0||t.isAudio===!0||t.userData?.dsh3dEmbeddedSceneNode===!0)&&e.push(t)});for(let t of e)t.removeFromParent(),t.dispose?.();return e.length}function da(i){let e=new Set,t=new Set,n=new Set,r=new Set,s=new Set;i.traverse(a=>{a.geometry!==void 0&&a.geometry!==null&&e.add(a.geometry),a.isSkinnedMesh===!0&&a.skeleton!==void 0&&a.skeleton!==null&&r.add(a.skeleton);let o=a.material;if(o!=null){for(let l of Array.isArray(o)?o:[o])if(l!=null){t.add(l);for(let c of Object.values(l))if(!(c===null||typeof c!="object")){if(c.isTexture===!0)n.add(c);else if(Array.isArray(c))for(let h of c)h!==null&&typeof h=="object"&&h.isTexture===!0&&n.add(h)}}}});for(let a of n){let o=a.image?.src;typeof o=="string"&&o.startsWith("blob:")&&s.add(o),a.dispose()}if(typeof URL.revokeObjectURL=="function")for(let a of s)try{URL.revokeObjectURL(a)}catch{}for(let a of r)a.dispose();for(let a of t)a.dispose();for(let a of e)a.dispose()}var Nf=Object.freeze({fbx:{file:"./client.fbx.js",loader:"loadFbxModel"},obj:{file:"./client.obj.js",loader:"loadObjModel"},gltf:{file:"./client.gltf.js",loader:"loadGltfModel"},glb:{file:"./client.gltf.js",loader:"loadGltfModel"},stl:{file:"./client.stl.js",loader:"loadStlModel"}}),vh=new Map;function Uf(i){let e=vh.get(i);return e===void 0&&(e=$r(i),vh.set(i,e),e.catch(()=>vh.delete(i))),e}function Ff(i){let e=Nf[i];if(e!==void 0)try{Uf(e.file).catch(()=>{})}catch{}}async function Of(i,e,t={}){let n=Nf[e];if(n===void 0)throw new TypeError(`Unsupported 3D model format: ${String(e)}`);let s=(await Uf(n.file))[n.loader];if(typeof s!="function")throw new Error(`The "${e}" loader chunk did not export ${n.loader}.`);let a=await s(i,t);return Df(a.object),a}var Bf={type:"change"},bh={type:"start"},zf={type:"end"},vl=new oi,kf=new xn,Hy=Math.cos(70*oa.DEG2RAD),Nt=new O,fn=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yh=1e-6,yl=class extends $s{constructor(e,t=null){super(e,t),this.state=$e.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Bt,this._lastTargetPosition=new O,this._quat=new Bt().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zn,this._sphericalDelta=new zn,this._scale=1,this._panOffset=new O,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new O,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xy.bind(this),this._onPointerDown=Wy.bind(this),this._onPointerUp=qy.bind(this),this._onContextMenu=Qy.bind(this),this._onMouseWheel=Ky.bind(this),this._onKeyDown=Jy.bind(this),this._onTouchStart=jy.bind(this),this._onTouchMove=$y.bind(this),this._onMouseDown=Yy.bind(this),this._onMouseMove=Zy.bind(this),this._interceptControlDown=eb.bind(this),this._interceptControlUp=tb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$e.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=$e.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),r<-Math.PI?r+=fn:r>Math.PI&&(r-=fn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Nt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<Hy?this.object.lookAt(this.target):(kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(kf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yh||this._lastTargetPosition.distanceToSquared(this.target)>yh?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Nt.copy(r).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Wy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Xy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zf),this.state=$e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Yy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=$e.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=$e.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(bh)}function Zy(i){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ky(i){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(i.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zf))}function Jy(i){this.enabled!==!1&&this._handleKeyDown(i)}function jy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1){this.state=$e.NONE;break}this._handleTouchStartRotate(i),this.state=$e.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1){this.state=$e.NONE;break}this._handleTouchStartPan(i),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=$e.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(bh)}function $y(i){switch(this._trackPointer(i),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=$e.NONE}}function Qy(i){this.enabled!==!1&&i.preventDefault()}function eb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nb=33;function Gf(i,{onTick:e}={}){let t=Array.isArray(i.animations)?i.animations.filter(E=>Number.isFinite(E.duration)&&E.duration>0&&E.tracks.length>0):[],n=t.map(E=>({name:E.name,duration:E.duration})),r=t.length>0?new js(i):null,s=new Array(t.length).fill(null),a=0,o=!1,l=-1/0,c=!1;function h(E){if(r===null||E<0||E>=t.length)return null;let T=s[E];return T===null&&(T=r.clipAction(t[E]),T.setLoop(sl,1/0),T.clampWhenFinished=!1,s[E]=T),T}if(r!==null){let E=h(0);E!==null&&(E.reset().play(),E.paused=!0,r.update(0))}function u(){return s[a]}function f(){return t[a]?.duration??0}function d(){return u()?.time??0}function p(){return{time:d(),duration:f(),index:a,playing:o}}function v(){c||typeof e!="function"||e(p())}function g(E,T){c||r===null||!o||(r.update(E),T-l>=nb&&(l=T,v()))}function m(E){if(c||r===null)return!1;let T=!!E;if(T===o)return!1;let _=h(a);return _===null?!1:(o=T,_.paused=!o,l=-1/0,v(),!0)}function S(E){if(c||r===null||!Number.isInteger(E)||E<0||E>=t.length)return!1;a=E;for(let _ of s)_?.stop();let T=h(a);return T===null?!1:(T.reset().play(),T.paused=!o,r.update(0),l=-1/0,v(),!0)}function w(E){if(c||r===null)return!1;let T=h(a);if(T===null)return!1;let _=T.getClip().duration,M=Number(E);return T.time=Math.max(0,Math.min(_,Number.isFinite(M)?M:0)),r.update(0),l=-1/0,v(),!0}function b(){c||(c=!0,r!==null&&(r.stopAllAction(),r.uncacheRoot(i)))}return{animations:n,setPlaying:m,setClip:S,seek:w,update:g,snapshot:p,isPlaying:()=>o,dispose:b}}var ib=new O(1,.55,1.3).normalize(),bl=Math.PI/36,Sh=new O,Ui=new zn;function Vf(i,e,t){let n=Math.max(e/500,t/1e4,1e-4),r=Math.max(e*40,t*20);i.near===n&&i.far===r||(i.near=n,i.far=r,i.updateProjectionMatrix())}function Mh(i,e,t,n){let r=i.fov*Math.PI/180,s=i.aspect>0?i.aspect:1,a=t.size.y/(2*Math.tan(r/2)),o=t.size.x/(2*Math.tan(r/2)*s),l=t.size.z*.8,c=Math.max(a,o,l)*2.5;return(!Number.isFinite(c)||c<=0)&&(c=n*2.5),c=Math.max(c,n*.9),i.position.copy(t.center).addScaledVector(ib,c),e.target.copy(t.center),e.minDistance=Math.max(c*.02,n*.03),e.maxDistance=Math.max(c*30,n*10),e.update(),c}function Hf(i){return i==="ArrowLeft"||i==="ArrowRight"||i==="ArrowUp"||i==="ArrowDown"}function Wf(i,e,t){if(Sh.copy(i.position).sub(e.target),Ui.setFromVector3(Sh),t==="ArrowLeft")Ui.theta+=bl;else if(t==="ArrowRight")Ui.theta-=bl;else if(t==="ArrowUp")Ui.phi=Math.max(e.minPolarAngle,Ui.phi-bl);else if(t==="ArrowDown")Ui.phi=Math.min(e.maxPolarAngle,Ui.phi+bl);else return;i.position.copy(e.target).add(Sh.setFromSpherical(Ui)),i.lookAt(e.target),e.update()}var fa=class extends nr{constructor(e){super(e),this.type=bt}parse(e){let a=function(M,D){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(D||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(D||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(D||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(D||""))}},u=function(M,D,C){D=D||1024;let F=M.pos,k=-1,R=0,B="",G=String.fromCharCode.apply(null,new Uint16Array(M.subarray(F,F+128)));for(;0>(k=G.indexOf(`
`))&&R<D&&F<M.byteLength;)B+=G,R+=G.length,F+=128,G=String.fromCharCode.apply(null,new Uint16Array(M.subarray(F,F+128)));return-1<k?(C!==!1&&(M.pos+=R+k+1),B+G.slice(0,k)):!1},f=function(M){let D=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,G;for((M.pos>=M.byteLength||!(B=u(M)))&&a(1,"no header found"),(G=B.match(D))||a(3,"bad initial token"),R.valid|=1,R.programtype=G[1],R.string+=B+`
`;B=u(M),B!==!1;){if(R.string+=B+`
`,B.charAt(0)==="#"){R.comments+=B+`
`;continue}if((G=B.match(C))&&(R.gamma=parseFloat(G[1])),(G=B.match(P))&&(R.exposure=parseFloat(G[1])),(G=B.match(F))&&(R.valid|=2,R.format=G[1]),(G=B.match(k))&&(R.valid|=4,R.height=parseInt(G[1],10),R.width=parseInt(G[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},d=function(M,D,C){let P=D;if(P<8||P>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);P!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let F=new Uint8Array(4*D*C);F.length||a(4,"unable to allocate buffer space");let k=0,R=0,B=4*P,G=new Uint8Array(4),H=new Uint8Array(B),ne=C;for(;ne>0&&R<M.byteLength;){R+4>M.byteLength&&a(1),G[0]=M[R++],G[1]=M[R++],G[2]=M[R++],G[3]=M[R++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=P)&&a(3,"bad rgbe scanline format");let W=0,Y;for(;W<B&&R<M.byteLength;){Y=M[R++];let te=Y>128;if(te&&(Y-=128),(Y===0||W+Y>B)&&a(3,"bad scanline data"),te){let pe=M[R++];for(let Z=0;Z<Y;Z++)H[W++]=pe}else H.set(M.subarray(R,R+Y),W),W+=Y,R+=Y}let X=P;for(let te=0;te<X;te++){let pe=0;F[k]=H[te+pe],pe+=P,F[k+1]=H[te+pe],pe+=P,F[k+2]=H[te+pe],pe+=P,F[k+3]=H[te+pe],k+=4}ne--}return F},p=function(M,D,C,P){let F=M[D+3],k=Math.pow(2,F-128)/255;C[P+0]=M[D+0]*k,C[P+1]=M[D+1]*k,C[P+2]=M[D+2]*k,C[P+3]=1},v=function(M,D,C,P){let F=M[D+3],k=Math.pow(2,F-128)/255;C[P+0]=On.toHalfFloat(Math.min(M[D+0]*k,65504)),C[P+1]=On.toHalfFloat(Math.min(M[D+1]*k,65504)),C[P+2]=On.toHalfFloat(Math.min(M[D+2]*k,65504)),C[P+3]=On.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=f(g),S=m.width,w=m.height,b=d(g.subarray(g.pos),S,w),E,T,_;switch(this.type){case vt:_=b.length/4;let M=new Float32Array(_*4);for(let C=0;C<_;C++)p(b,C*4,M,C*4);E=M,T=vt;break;case bt:_=b.length/4;let D=new Uint16Array(_*4);for(let C=0;C<_;C++)v(b,C*4,D,C*4);E=D,T=bt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:w,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:ai,minFilter:it,magFilter:it,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Sl="nature",qT=Object.freeze(["nature","city","indoor","studio"]),Xf=Object.freeze({nature:1.2,city:1.25,indoor:.95,studio:1.1}),rb=Object.freeze({nature:0,city:0,indoor:Math.PI/2,studio:0}),sb="/dsh-3d-viewer/hdri/",ab="0.2.1";function qf(i){return typeof i=="string"&&Object.hasOwn(Xf,i)?i:Sl}function ob(i){let e=globalThis.location?.origin??"http://localhost",t=new URL(`${sb}${i}.hdr`,e);return t.searchParams.set("v",ab),t.href}async function lb(i){if(typeof fetch!="function")throw new Error("fetch is unavailable");let e=await fetch(ob(i),{credentials:"same-origin"});if(!e.ok)throw new Error(`The HDRI route answered HTTP ${e.status} for "${i}".`);return e.arrayBuffer()}var wh=new Map;function Th(i){let e=qf(i),t=wh.get(e);if(t!==void 0)return t;let n=lb(e).catch(r=>{throw wh.delete(e),r});return n.catch(()=>{}),wh.set(e,n),n}function cb(i,e=new fa){let t=e.parse(i),n=new It(t.data,t.width,t.height,St,t.type);return n.colorSpace=t.colorSpace,n.minFilter=t.minFilter,n.magFilter=t.magFilter,n.generateMipmaps=t.generateMipmaps,n.flipY=t.flipY,n.unpackAlignment=1,n.mapping=Di,n.needsUpdate=!0,n}function Yf({renderer:i,scene:e,intensities:t=Xf,rotations:n=rb,onReady:r,onError:s,cache:a,fetchBytes:o=Th,createTarget:l}){let c=a,h=c?.targets??new Map,u=c?.pending??new Map,f=c===void 0,d=new fa,p=null,v=null,g=null,m=!1;function S(){return p===null&&(p=new Jr(i)),p}function w(C){let P=cb(C,d);try{return S().fromEquirectangular(P)}finally{P.dispose()}}let b=l??((C,P)=>w(P));async function E(C){let P=await o(C);if(c!==void 0?c.disposed:m)return null;try{return await b(C,P)}finally{m&&(p?.dispose(),p=null)}}function T(C){if(c!==void 0&&c.disposed)return Promise.resolve(null);let P=h.get(C);if(P!==void 0)return Promise.resolve(P);let F=u.get(C);if(F!==void 0)return F;let k=E(C).then(R=>{if(u.delete(C),R===null)return null;if(c!==void 0){if(c.disposed)return R.dispose(),null;let B=h.get(C);return B!==void 0?(R.dispose(),B):(h.set(C,R),R)}return m?(R.dispose(),null):(h.set(C,R),R)},R=>(u.delete(C),c!==void 0&&c.disposed||console.warn(`[dsh-3d-viewer] Could not build the "${C}" environment.`,R),null));return u.set(C,k),k}function _(C,P){e.environment=P.texture,e.environmentIntensity=t[C]??t[Sl]??1,e.environmentRotation?.set(0,n[C]??0,0),v=C}function M(C){if(m||c!==void 0&&c.disposed)return!1;let P=qf(C);if(P===g)return!1;g=P;let F=h.get(P);return F!==void 0?(_(P,F),r?.(),!0):(T(P).then(k=>{if(!m){if(k===null){let R=g===P;if(R&&(g=v),R)try{s?.(new Error(`Could not apply the "${P}" environment.`))}catch(B){console.error("[dsh-3d-viewer] Environment error listener failed.",B)}return}g===P&&(_(P,k),r?.())}}),!0)}function D(){if(!m){if(m=!0,v=null,g=null,e.environment=null,f){for(let C of new Set(h.values()))C.dispose();h.clear(),u.clear()}p?.dispose(),p=null}}return{set:M,dispose:D,get activeId(){return v}}}var Jf=512,jf=5,hb=.016,ub=.022,Zf=.75,db=`
varying vec3 vWorldPosition;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,fb=`
uniform sampler2D uGridMap;
uniform vec3 uColor;
uniform vec3 uFogColor;
uniform float uGridScale;
uniform float uMinorAlpha;
uniform float uMajorAlpha;
uniform float uFogStart;
uniform float uFogEnd;

varying vec3 vWorldPosition;

void main() {
  // One normalized projection-depth factor drives fog color, transparency,
  // and the final disappearance together.
  float depthT = clamp(
    (gl_FragCoord.z - uFogStart) / max(uFogEnd - uFogStart, 1e-6),
    0.0,
    1.0
  );
  if (depthT >= 0.998) discard;

  float opacity = 1.0 - depthT;
  vec2 gridUv = vWorldPosition.xz * uGridScale;
  vec2 lines = texture2D(uGridMap, gridUv).rg;
  float alpha = max(lines.r * uMinorAlpha, lines.g * uMajorAlpha) * opacity;
  vec3 color = mix(uColor, uFogColor, depthT);

  if (alpha <= 0.002) discard;
  gl_FragColor = vec4(color, alpha);
  #include <colorspace_fragment>
}
`,Eh=new Je,Ah=null;function pb(i){let e=i/12;if(!Number.isFinite(e)||e<=0)return 1;let t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Kf(i,e){return Eh.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Eh.z/Eh.w*.5+.5}function mb(){if(Ah!==null)return Ah;let i=Jf,e=i/jf,t=e*hb,n=e*ub,r=new Uint8Array(i*i*4),s=(a,o)=>{let l=Math.max(o-Zf,0),c=o+Zf;if(a<=l)return 1;if(a>=c)return 0;let h=(a-l)/(c-l);return 1-h*h*(3-2*h)};for(let a=0;a<i;a+=1){let o=a+.5,l=o%e,c=Math.min(l,e-l),h=Math.min(o,i-o);for(let u=0;u<i;u+=1){let f=u+.5,d=f%e,p=Math.min(d,e-d),v=Math.min(f,i-f),g=Math.max(s(p,t),s(c,t)),m=Math.max(s(v,n),s(h,n)),S=(a*i+u)*4;r[S]=Math.round(g*255),r[S+1]=Math.round(m*255),r[S+2]=0,r[S+3]=255}}return Ah=r,r}function gb(i){let e=Jf,t=new It(mb(),e,e,St,ut);return t.name="dsh3dv-grid",t.colorSpace=At,t.wrapS=Tn,t.wrapT=Tn,t.magFilter=it,t.minFilter=dn,t.generateMipmaps=!0,t.anisotropy=Math.max(1,Math.floor(i)),t.needsUpdate=!0,t}function $f({scene:i,stats:e,maxDimension:t,maxAnisotropy:n=1}){let r=Number.isFinite(e.box.min.y)?e.box.min.y-t*.003:-t*.003,s=pb(t),a=gb(n),o=new Bn(t*1e4,t*1e4);o.rotateX(-Math.PI/2);let l={uGridMap:{value:a},uColor:{value:new Ie(8093831)},uFogColor:{value:new Ie(16777215)},uGridScale:{value:1/(s*jf)},uMinorAlpha:{value:.25},uMajorAlpha:{value:.5},uFogStart:{value:.9},uFogEnd:{value:.99}},c=new en({uniforms:l,vertexShader:db,fragmentShader:fb,transparent:!0,depthWrite:!1,side:Vt,toneMapped:!1}),h=new xt(o,c);h.position.set(e.center.x,r,e.center.z),h.renderOrder=0,i.add(h);let u=new Bn(t*20,t*20);u.rotateX(-Math.PI/2);let f=new Os({color:0,opacity:.24,transparent:!0,depthWrite:!1}),d=new xt(u,f);d.position.set(e.center.x,r+t*2e-4,e.center.z),d.receiveShadow=!0,d.renderOrder=1,i.add(d);function p(w,b,E){h.position.x=b.x,h.position.z=b.z,h.updateMatrixWorld();let T=Math.min(E*6,t*4e3),_=Math.min(E*1.8,T*.3);l.uFogStart.value=Kf(w,_),l.uFogEnd.value=Kf(w,T)}function v(w){let b=!!w;return h.visible===b?!1:(h.visible=b,!0)}function g(w){let b=!!w;return d.visible===b?!1:(d.visible=b,!0)}function m(w){let b=Number(w)&16777215;return l.uFogColor.value.getHex()===b?!1:(l.uFogColor.value.setHex(b),!0)}function S(){i.remove(h,d),o.dispose(),a.dispose(),c.dispose(),u.dispose(),f.dispose()}return{update:p,setGridVisible:v,setShadowVisible:g,setFogColor:m,dispose:S}}var _b=new O(-3.2,5,3);function Qf({scene:i,center:e,maxDimension:t}){let n=new rr(16777215,5);n.position.copy(e).addScaledVector(_b,t),n.target.position.copy(e),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-t*2,n.shadow.camera.right=t*2,n.shadow.camera.top=t*2,n.shadow.camera.bottom=-t*2,n.shadow.camera.near=t*2,n.shadow.camera.far=t*12,n.shadow.bias=-1e-4,n.shadow.normalBias=t*.002,n.shadow.radius=2,n.shadow.camera.updateProjectionMatrix(),i.add(n,n.target);function r(){i.remove(n,n.target),n.dispose()}return{dispose:r}}var tp=Object.freeze({diffuse:Object.freeze({color:14474460,metalness:0,roughness:1}),plastic:Object.freeze({color:13158859,metalness:0,roughness:.1}),metal:Object.freeze({color:12962771,metalness:1,roughness:0}),"metal-polished":Object.freeze({color:14278116,metalness:1,roughness:.3}),clay:Object.freeze({color:11824978,metalness:0,roughness:.84})}),Ml="original",np=Object.freeze(["map","normalMap","bumpMap","displacementMap","aoMap","lightMap","alphaMap","emissiveMap"]),xb=new Set(["map","emissiveMap","lightMap"]),vb=Object.freeze({emissiveIntensity:1,bumpScale:1,displacementScale:1,displacementBias:0,aoMapIntensity:1,lightMapIntensity:1}),yb=Object.freeze(["transparent","opacity","alphaTest","side","shadowSide","depthWrite","depthTest","blending","premultipliedAlpha","polygonOffset","polygonOffsetFactor","polygonOffsetUnits","toneMapped","vertexColors","flatShading","wireframe","visible"]);function bb(i){let e=typeof i.shininess=="number"?i.shininess:0;return e<=0?.62:Math.min(.9,Math.max(.2,1-Math.log2(e+1)/10))}function ep(i){for(let e of np){let t=i[e];if(t!=null){if(t.userData?.dsh3dHdr===!0){t.colorSpace=At;continue}t.colorSpace=xb.has(e)?Rt:At}}}function ip(i,e){if(i==null)return i;if(Array.isArray(i))return i.map(a=>ip(a,e));if(i.isMeshStandardMaterial===!0||i.isMeshPhysicalMaterial===!0)return ep(i),i;let t=e.get(i.uuid);if(t!==void 0)return t;let n=new ci;n.name=i.name,i.color!==void 0&&n.color.copy(i.color),i.emissive!==void 0&&n.emissive.copy(i.emissive);for(let[a,o]of Object.entries(vb))n[a]=i[a]??o;for(let a of np)n[a]=i[a]??null;ep(n),i.normalScale!==void 0&&n.normalScale.copy(i.normalScale);let r=i.userData?.fbxRoughness;n.roughness=typeof r=="number"&&Number.isFinite(r)?Math.min(1,Math.max(0,r)):bb(i);let s=i.userData?.fbxMetalness;n.metalness=typeof s=="number"&&Number.isFinite(s)?Math.min(1,Math.max(0,s)):0;for(let a of yb)n[a]=i[a];return n.userData={...i.userData},e.set(i.uuid,n),n}function Sb(i){return i===Ml||typeof i=="string"&&tp[i]!==void 0?i:Ml}function rp(i){let e=new Map,t=new Map,n=[],r=Ml,s=!1;i.traverse(d=>{d.isMesh===!0&&(d.material=ip(d.material,e),d.castShadow=!0,d.receiveShadow=!0,n.push({mesh:d,material:d.material,castShadow:!0,receiveShadow:!0}))});let a=new Ti({color:5068129,wireframe:!0,side:Vt,toneMapped:!1});function o(d){let p=t.get(d);if(p!==void 0)return p;let v=tp[d];if(v===void 0)return null;let g=new ci({name:`dsh3dv-${d}`,color:v.color,metalness:v.metalness,roughness:v.roughness,side:Vt});return t.set(d,g),g}function l(){let d=!s&&r!==Ml?o(r):null;for(let p of n)p.mesh.material=s?a:d??p.material,p.mesh.castShadow=s?!1:p.castShadow,p.mesh.receiveShadow=s?!1:p.receiveShadow}function c(d){let p=Sb(d);return p===r?!1:(r=p,s||l(),!0)}function h(d){let p=!!d;return p===s?!1:(s=p,l(),!0)}function u(d){let p=Number(d)&16777215;return a.color.getHex()===p?!1:(a.color.setHex(p),!0)}function f(){for(let d of n)d.mesh.material=d.material,d.mesh.castShadow=d.castShadow,d.mesh.receiveShadow=d.receiveShadow;for(let d of t.values())d.dispose();t.clear(),a.dispose()}return{setPreset:c,setWireframe:h,setWireframeColor:u,dispose:f,get preset(){return r},get wireframe(){return s}}}var sp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Mb=new Dn(-1,1,1,-1,0,1),Rh=class extends hn{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}},wb=new Rh,wl=class{constructor(e){this._mesh=new xt(wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qr=class extends pi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ll.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pa=class extends pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Tl=class extends pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var El=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qr(sp),this.copyPass.material.blending=di,this.timer=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pa!==void 0&&(a instanceof pa?n=!0:a instanceof Tl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Al=class extends pi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Rl=64,Tb="XUMtsduwOA4H+qYtkd/z1oN4g+QK9avuLou59c1Kl0SeWyrwXiyaBKnTHQW0XP1PTg23SpUhCtVGC7Tm5cSZ7XN1f87v90oeB2/yyOQjWvcHaskDg6nB1ZMJU5gZNqpwqfkReWDN16NE0/3zQwWo1oXOa8Rc7aDA/1Iwq49WLeRvAQFauIKQpB1DUtCPgUDpmb1+vV5DY6c4vaWDvNqX5XTsGXwQ2xeekDg2diy0e6dwnRr3wOEIsXpdc6oduKYyKLq522l67k5fhuq/MTOOjDR3NDQa4kbtflxWEThPwgLQKqT2/Qn/WAGP6fhHViydtQiPjATAW2KwcH5Om/Avs1DyWTCCs9Rm2T3QLChxFCb0oOwDmOfyYqUPO5lQBYcl+lEdSNr+MXFhO2ufkuu10oejKf44LyzUvGmXKMfcwgg9WH1/P5bNFjwEjsf7x00HgPx9WmHBlZonabDeOfaR+nZ0AuE1fWV5flZrpBdW5IvFt6Ie1lfjPXyxFQaezJ4+gGqWZ5he1SImFvdH0D2WbxbhbHvk3grkuqc5jw6br8uwAljmBa8b7IMtUgc+Jj2trSxcBEvpkQrM9v1QDU0t/TfFrv1O1/golv8t5JQJXN7d3Ai0W+hA1juf+eGi423RPqF+OlSLlZ/qZbOX7xXxCc/ti81wEDg8moFLe7uj9QzYSywpIfIPybPmBiGc+ec2TFandRECaEXVTBdtA1K6dq4yQSfSJKK/fLxZRIulcqt2RGWFvjAwE+jCYzfhDqz5CIL9iBO6amEpKgZ0mg/GgDYC0sX+P1y4IVF6rdi74k854RhuuTmYO2G5r4e5VRwFedPpyO7jVuHjL4SYZhNiqQtEkOAwAjrkqe0nsH7YUlNr9sBrKBhiwaJyaa3QdqQ7nF6kJufLraDPbf5+VOhEARjWOtZTs/crFCghY3TJr6F6tQIJ4CVzW+B6UM41KHOAO8fs+sYsF7HQwQRXQwy/zq5O2WBfU5MdumgI3KWlz6y6yJ3aEDJQmJpTeZLRlP9W5TxlvrHv2hsyl023xiCzMgJLlwTvkUp9c6dBqNE0Nn5d6OxHoV1lPzY8PGCcx1hoMI9AEDOD3fSrDHgaSYUOC/JO99vidwG2lAK5/rHuMZvmQ5JC2l9ttZft2/VPgNERK4xxzKfqaA+hyZTwT4Z3+4qa1yoqZinexODvyUGfr90mzx7KAb+VReqyUep8BEWZs+2chyorJ6AkkbVV9dtF1XgrPDDhhHeAAeltUasIOz94eFyop95DJSISjJzcRiPiR74VoRbxIqqrTDffGPCs7px1B/M1/jeyIHkJFLFW72uQzW3OV9eSxIG8bDTQgmNnP3nHXes+jUi0wrvq9mVyOYVKgtxX8qrW7psfdy7yoHRLTbdUI2NTgop/AC5cgG68HGU025RvfZJiKeBfqWWUtuvZPG9xhjForiWVBkEqBKHe+Fkl7dY4nQOB+oBFaYQVtlS/oVS9kfvVQpmE0KzgdFRoNVJp+p90UbgM3/VyZqteutoaIkzk+JDriujp0y7XX3XhXcKeJRxMXyM0DitdFIpDcg6xx8o3VTd7+0jgWTrlDwdfpxfoNnEb9UMrixPxYowRoyLBZiSGcAqHVzKf2XOJDQG08zjhM+fxMbrMIYfdRDLZ3Zr2w2MxVLZ1I7PiiROElR7vHZPImhkvU33uG01dbdHYg7L5Bk6ZPLUa7TZGMVqMyD0qJHXe6Ghsr/j5vnyB2UcgVRhM1Ew8Qn5XOn/xzVVkN17WeEZzZPxYRROEFkpSsrL33GhCCTg7fsEAnZnzjUFeH5y1UR56RjXEFyKCZJ1sjVXVOTWpZXiZW/Xq1HlAysO0ShVsqBTETPn77xAUEvDHKPk8UOTYhuuLeFuu9s2EEPST3qbqj50hs6GYVDl0YH+Vq47n0n22pQ3LNYa+2C/HPiX6wqj00HWMFFqmn+ZlciMNhknnP8iC0obZpxdbrEaqEruCrCOO8wf6ib9Yq5aF9Ce8f0ai5jozPUmrN/t/QTsK3KwMEEk5iW5EUeSTS6AgJBJrihhPshnKQ9e2MuVg16J1FyEMlHZmh+btxSzFQHsg39IAew+LIBOZ9BxksGcW9UW664bC/aYWt/x3L5tfrtv55lrpfbU3b5YwK4aPjmxSkuCnb4PTG7gOT1krx0wG8ZK+voNO5/wakFpwbsJCNDuG6axImS0mDOnRP/MUm2gv+aDPlaVwXGHbG4jDuM+HAxUS8pI9C7lnkG6UXJY5Iz3VPf4mafRKxGp2HUid6MFiZtDTN6AfsbXLrQ0DhyW19BBgAS1ZId25h+RDdgNJh/e77hXX+r0idKIeufGCSjoKY+yeNhjOHDf5WFDZvEmvqCgo0xjFa4mPBjj0iKkGqnOmaWpzc74Ywaui/MeePk0U19Z/2LyhVRsycBvgw59ai03t4HtK4vyOR8m/HDku6B4F/Wh6C2T21KovSfYqiSj6stiVsNgU7xYucErjmg0iQazP2l47tNmvKf6lB6lC+FWedbL0DgA1yKVnEj6g3jL0aBZbhY2JPzWv710h4RFKZoRnZc5WdXT3zLIzBm98Xq/DZGA7GTMVCZPZ+iTR1kcTbH0QwPYY8nhW4FQx50yui0jigVm512EyEnibV67Xk5EB74HrKUUKwAlnl3GKaMaUe3BSWZ0zctghxcQZGr7jggqIZ786Jwl8fG928J5rhSBRN56JAsP5srvyBrro1YKSPGpn8yGGeQy07KWM38D9Kw7Rp+ipyOgKrRzDLGflE2m4tcRIOquLxZ1NqyveEPkdJiooo+NicdSBUUZemlSyMcEzT0v3qgGU7upT1wNiMLfsbCdJetJfckTR301AE1ivmmrcQBakH8TtD5Ne38hZ68F3ielbsNhwQh6I74aQLFCqAcHIrxx31jaFy9A2UGB8SjoY2omuSvWJfHbSZ19sjaLjLjMiJL7iNeqxtFFPdkyjwqmEt/BuiAdD0uP/W7MD7dPPf5wcK0tesAw/gXKYZBRojSPuBfORPerAsGT7YOWgzWrTcvWlA4hDrFuffbcs+mx1VwEfKuaKLX+kbF2WQIzd4owirxFY5yThRYqyjPvMO6gq77omOkRByxwphq09H8BthOcksew5FHqGlPfAuBWYGC3flnMRlx0VRcq9CE72APDa51HCzCyNRvHmyFoqnkuWvsxEyxMl3nme0SqiAsjzxhBv5b2IFfURHieJAinbSIN85ZNMbzSq79lUDfaAHiIxyuFztmHPq2/NhYPeFAZ4RO54OFX7sSUxQWFTz5ontKdhQjW7sPMgIrOK+eWoOA9Pi/DnpG3CeMmAH6MToBgdRLnGwVvGbWcrIy4S+NKTrNiuR4h10p/yE98yNvKqDFnbJX7awOm9eUI1RsTFC72d4/UHQCTlFw0uOVXyWcg5ymNyH16/DefqvV8Ou7RgfIhtlwZqjpxJj0fwXPw/XF27CA5ko97TGYh/vz+p66cDpPbZ5tCRS2KtocKV7HSw5OuWagNZJ5LBCfZEcN0XR51RP15jcxG90SAfknXbxlKA6UKsPxIwUCawxiZC2kgXzaW5ToQ9x/fEKVASy1rJm4EvUPv3tSYbAqHdS9RjaBTxNat/zGc0kVXCDP3XBUMLBID8t78aYXvVFxytXiPOW11vGiC3JHQbuo19kdtncfP0dwN+/3tgtg74AaBhUdMNtsMb1T6x+D77yQumWJgy0HQ2UOjdV8ka/uo7BvMrQqatV1fEzEhxNJb9w04J7F2OBbcMXUUo2abtMXChyijLYVyx8+PrFDrYeD9mWp083ZvuZlHOKZbU0DOft+wkrxJUysrHwJAJHllAZbgjw79kZgdN6EFir+4zarnW0ljgU8cfBYBpgAlYVGalM1WB3zqtlx7Na0+mB6rXDkAejrhChXR3jVHTPFesTaqLG4SWhW6MozLUqW2jorPM4hKQpAjiWKHCLPoelWxS1yTc9MawbzEg+MIKeOyw6+V73BvxqsfGObtWPO5N6XmbhCQfSxW72b4fvOQmVKmVJQ2YHcqO4yH+ep6nkFm4Qha+hI3S5SAVMBp1Q2K2s2QzYJeDFnXD2Bmiqq0HoUWlppF3j2Tz5hSyzkkLWycMvd+Qe/GMGInYKx0fuFpZ1QslM9K7h+kjafk2QvjUpGGYHpLMMkCtweuPHY4t5sqU+ghufjwYy5+Fv+JGo2Cfip/V4UZwgt33E/FckJdRkoXe1cP3FUh9BdScfMVAcQH8Ry5ixMonewtWIqf8CBl5Yw8H8vZtQVbxg+ZPUi6Rea0cZQiIGTChKSVhRpNJ70G1NmdjMBJN+0lJT6YbYo3xWAp3caXT1uo0ybRbZsyciorl3PDGDt1aL0u0Vl5HJHtPiHI+qyOEfIniVGT8ctTJyT75RFiUQag1j3/w8MhxKIFNKT1cynGXkAtdz5mT/Lx2P5Wch38vH24EtBeCQLvt4dXjQQu4xqh8Cjr+v2wtwS2NoKjc9FOUDT86AgrUjocJou+I7fCVpi6kX0UPNBeFiQR5IIZody6aCyn0l1AMzp+Znc6kSuu8qBY4py8RGcmhBXkiDdxpt6jDbfNv/W7wslP8wTcEDp4tJ4i8k23TnLypoGt+vNzQ/scwzIHf6cNUMU+3D+vFk1Oxj2PjqgIGQipSzrZF2rUGm/2Bbpqj9AMnJmtAcNqWxa6/TcBSTUiQkpi60w926ry54ifLdpu+fs0aYiGukdF6OAxI+tv4ZZmKjRGu5+M1dh2XJtEEagtIrE5gvUbPY68wR2BF41c7i4RSlgVL+CYc3qgpuIVToh8ZjtTalRLgbksCims+us/E/PclN1oKlcbIo19G4R1kgmk8srUr03Y+xmcyuJ4J7BXLMfgZHb9MjAfs/hADKD5MR8l6xXzFkiGH/cJKmtS0iBdtA251J6bF8rfLnxMEjFOBLX2+0c66a9tjfeWkae7n12x/IFX9nbvAqO4jEoDf2XLREbY2apKF2jhI5RxYpfuAjr2tzX2w5gAL/gXQ2tf4aLaRYrE37KZfH3qRlEkEsr055GoGYMtzF1UW1k7YGedrg3rcMaPPQxkizaR73bUqRb5s/w/+9gTPh7l6uPrOm9H7KA+ujdkTSSmcQSHMu5nmVUh7GzfDDVljybwvMBqzOBisPspdDLkzbuJcj3gRtwB0NM2eM2YWcWWgig+7GHGzm3NIePyQPhHp1t0PYUdS8d1uo6iugvKN/xB5jVfLwHKPmBXSU9UudGlqHCOXf2YvToEFaYctojnfCPvAR5sFLnHirBDEGg1V0vWDCN93/BunLKaczKQQLkHxUF9hzTSTz1udovX4EN+u6vUvO5yUmzre/rd9jg6z925Pb0yZNS+9JBZfwyBYfra64HcBcEkrV85sjLZ3i7ZaGvvoChznaqnGRJg0aD1y4BGOSyyYGprFQPAiTAAIa9xWZGSJk4PrUD2j1HpO5MqKi8dXyxnIZVogmQg42+AlEh5z6KBOZg==",ap=null;function op(){ap??=Sf(Tb);let i=new It(ap,Rl,Rl,Ni,ut);return i.name="dsh3dv-blue-noise",i.colorSpace=At,i.wrapS=Tn,i.wrapT=Tn,i.magFilter=pt,i.minFilter=pt,i.generateMipmaps=!1,i.needsUpdate=!0,i}var Eb=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ab=`
uniform sampler2D tDiffuse;
uniform sampler2D uBlueNoise;
uniform float uExposure;
uniform float uBlueNoiseScale;

varying vec2 vUv;

vec3 RRTAndODTFit(vec3 v) {
  vec3 a = v * (v + 0.0245786) - 0.000090537;
  vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return a / b;
}

vec3 acesFilmic(vec3 color) {
  const mat3 ACESInputMat = mat3(
    vec3(0.59719, 0.07600, 0.02840),
    vec3(0.35458, 0.90834, 0.13383),
    vec3(0.04823, 0.01566, 0.83777)
  );
  const mat3 ACESOutputMat = mat3(
    vec3(1.60475, -0.10208, -0.00327),
    vec3(-0.53108, 1.10813, -0.07276),
    vec3(-0.07367, -0.00605, 1.07602)
  );
  color = ACESInputMat * color;
  color = RRTAndODTFit(color);
  color = ACESOutputMat * color;
  return clamp(color, 0.0, 1.0);
}

vec3 sRGBTransferOETF(vec3 value) {
  return mix(
    pow(value, vec3(0.41666)) * 1.055 - 0.055,
    value * 12.92,
    lessThanEqual(value, vec3(0.0031308))
  );
}

float ditherNoise(vec2 p) {
  // Blue-noise mask, sampled at native pixel coordinates. The amplitude is
  // +/- 1.5 8-bit display steps; the alpha mask below keeps white clean.
  float noise = texture2D(uBlueNoise, p * uBlueNoiseScale).r;
  return (noise - 0.5) * (3.0 / 255.0);
}

void main() {
  vec4 base = texture2D(tDiffuse, vUv);
  float alpha = clamp(base.a, 0.0, 1.0);
  vec3 linear = base.rgb / max(alpha, 1e-4);

  linear *= uExposure;
  linear = acesFilmic(linear);
  vec3 color = sRGBTransferOETF(linear);

  // Keep the canvas transparent so the themed host background shows through.
  // Dither only pixels that actually contain scene content.
  float ditherMask = smoothstep(0.0, 0.02, alpha);
  color += ditherNoise(gl_FragCoord.xy) * ditherMask;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0) * alpha, alpha);
}
`;function lp({renderer:i,scene:e,camera:t,width:n,height:r,pixelRatio:s}){let a=new El(i),o=Math.min(4,i.capabilities.maxSamples||0);o>0&&(a.renderTarget1.samples=o,a.renderTarget2.samples=o),a.setPixelRatio(s),a.setSize(n,r);let l=new Al(e,t),c=op(),h=new Qr({uniforms:{tDiffuse:{value:null},uBlueNoise:{value:c},uExposure:{value:i.toneMappingExposure},uBlueNoiseScale:{value:1/Rl}},vertexShader:Eb,fragmentShader:Ab});h.material.toneMapped=!1,h.renderToScreen=!0,a.addPass(l),a.addPass(h);let u=n,f=r,d=s;function p(S,w,b){let E=S!==u||w!==f,T=b!==d;return!E&&!T?!1:(T&&a.setPixelRatio(b),E&&a.setSize(S,w),u=S,f=w,d=b,!0)}function v(S){a.render(S)}function g(S){let w=new Ki,b=new Bn(2,2),E=new xt(b,h.material);w.add(E);let T=new Dn(-1,1,1,-1,0,1);try{S.compile(w,T)}finally{w.remove(E),b.dispose()}}function m(){a.dispose(),h.dispose(),c.dispose(),l.dispose?.()}return{render:v,setSize:p,warmup:g,dispose:m}}function cp(i){let e=!1,t=!0,n=!1,r=!1,s=0,a=0;function o(){n||!t||s!==0||(s=requestAnimationFrame(l))}function l(p){if(s=0,n||!t)return;let v=a===0?0:Math.min((p-a)/1e3,.1);a=p,r=!1,i(v,p),e&&o()}function c(){n||(r=!0,o())}function h(){n||e||(e=!0,a=0,o())}function u(){e=!1,a=0,s!==0&&(cancelAnimationFrame(s),s=0)}function f(p){let v=!!p;if(v!==t){if(t=v,!t){s!==0&&(cancelAnimationFrame(s),s=0),a=0;return}(e||r)&&o()}}function d(){n=!0,r=!1,u()}return{invalidate:c,start:h,stop:u,setActive:f,dispose:d,get looping(){return e}}}var Yn=class extends Error{constructor(e,t,n){super(t),this.name="ViewerError",this.code=e,this.cause=n}};var Rb=2;function Cb(){try{return new dl({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(i){throw new Yn("webgl","A WebGL context could not be created.",i)}}function hp(i){i.outputColorSpace=Rt,i.toneMapping=ea,i.toneMappingExposure=1,i.setClearColor(0,0),i.shadowMap.enabled=!0,i.shadowMap.type=sr}function Pb(){return{targets:new Map,pending:new Map,disposed:!1}}var Ch=class{constructor(e=Cb,t=Rb){this.createRenderer=e,this.maxIdle=t,this.idle=[],this.entries=new Set}acquire(){let e=this.idle.pop();if(e!==void 0)return e.inUse=!0,e;let t=this.createRenderer(),n={renderer:t,canvas:t.domElement,environment:Pb(),inUse:!0};return this.entries.add(n),n}release(e){if(!(e===void 0||!e.inUse))for(e.inUse=!1,e.renderer.setRenderTarget(null),e.canvas.remove(),this.idle.push(e);this.idle.length>this.maxIdle;)this.disposeEntry(this.idle.shift())}disposeEntry(e){if(e!==void 0){this.entries.delete(e),e.environment.disposed=!0;for(let t of e.environment.targets.values())t.dispose();e.environment.targets.clear(),e.environment.pending.clear(),e.canvas.remove(),e.renderer.dispose(),e.renderer.forceContextLoss()}}dispose(){for(let e of this.entries)this.disposeEntry(e);this.entries.clear(),this.idle.length=0}},Ph=new Ch;var up="dark",dp="light";function Ib(i){let e=document.createElement("span");e.style.cssText="position:absolute;width:0;height:0;visibility:hidden;pointer-events:none;background-color:var(--dsw-alias-bg-layer-1, #fff)";try{i.appendChild(e);let t=getComputedStyle(e).backgroundColor,n=/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)$/iu.exec(t);if(n!==null&&(n[4]===void 0?1:Number(n[4]))>0)return Number(n[1])*.299+Number(n[2])*.587+Number(n[3])*.114<128?up:dp}catch{}finally{e.remove()}return typeof globalThis.matchMedia=="function"&&globalThis.matchMedia("(prefers-color-scheme: dark)").matches?up:dp}function fp(i,e,t){let n=!1,r=null,s=()=>{if(n)return;let l=Ib(e);i.dataset.dsh3dTone!==l&&(i.dataset.dsh3dTone=l),r!==l&&(r=l,t?.(l))},a=null;if(typeof MutationObserver=="function"&&document.documentElement!==null){a=new MutationObserver(s);let l=["class","style","data-theme","data-color-scheme","data-ds-dark-theme"],c=e;for(;c!==null;)a.observe(c,{attributes:!0,attributeFilter:l}),c=c.parentElement}let o=typeof globalThis.matchMedia=="function"?globalThis.matchMedia("(prefers-color-scheme: dark)"):null;return o?.addEventListener?.("change",s),s(),()=>{n=!0,a?.disconnect(),o?.removeEventListener?.("change",s),delete i.dataset.dsh3dTone}}var Lb=2,Db=15,Nb=Math.PI*2/Db;function pp(){return Math.min(globalThis.devicePixelRatio||1,Lb)}function mp(i,e,t,n={}){let r=Ph.acquire(),s=r.renderer;hp(s);let a=s.domElement;a.className="dsh3dv-canvas",a.dataset.dsh3dCanvas="",a.tabIndex=0,a.setAttribute("role","img"),a.setAttribute("aria-label",n.ariaLabel??"3D model"),a.style.touchAction="none",i.appendChild(a);let o=Math.max(i.clientWidth,1),l=Math.max(i.clientHeight,1),c=pp();s.setPixelRatio(c),s.setSize(o,l,!1);let h=new Ki,u=new Ct(38,o/l,.1,1e3),f=t.maxDimension>0?t.maxDimension:1,d=Qf({scene:h,center:t.center,maxDimension:f});h.add(e);let p=rp(e),v=null,g=$f({scene:h,stats:t,maxDimension:f,maxAnisotropy:s.capabilities.getMaxAnisotropy()}),m=fp(i.closest?.(".dsh3dv-root")??i,i,x=>{let U=x==="dark";p.setWireframeColor(U?13620182:5068129),g.setFogColor(U?0:16777215),v?.invalidate()}),S=new Set,w=Gf(e,{onTick(x){for(let U of S)try{U(x)}catch(ee){console.error("[dsh-3d-viewer] Animation listener failed.",ee)}}}),b=lp({renderer:s,scene:h,camera:u,width:o,height:l,pixelRatio:c}),E=new yl(u,a);E.enableDamping=!1,E.screenSpacePanning=!0,E.rotateSpeed=.9,E.zoomSpeed=.9,E.panSpeed=.8,E.minPolarAngle=.02,E.maxPolarAngle=Math.PI*.98;let T=!1,_=!1,M=0,D=0,C=1,P=Math.PI/2,F=new O,k=new zn,R=new O,B=!1,G=!0,H=0,ne=0,W=0,Y=Number.NaN,X=Number.NaN,te=Number.NaN,pe,Z;function ie(){F.copy(u.position).sub(E.target),k.setFromVector3(F),D=k.theta,P=k.phi,C=k.radius,M=performance.now()}function ge(x){let U=Math.max(0,(x-M)/1e3),ee=D+U*Nb;R.setFromSphericalCoords(C,P,ee).add(E.target),u.position.copy(R),u.lookAt(E.target)}v=cp((x,U)=>{w.update(x,U),T&&!_&&ge(U),b.render(x)});let we,le=new Promise(x=>{we=x}),Ce=Yf({renderer:s,scene:h,cache:r.environment,onReady:()=>{we(),s.setRenderTarget(null),v.invalidate()},onError:()=>{we()}});Ce.set(n.environment??Sl);function et(){let x=Math.max(u.position.distanceTo(E.target),f*.05),U=E.target.x,ee=E.target.z,$=Math.max(f*1e-6,1e-9);Math.abs(x-Y)<=$&&Math.abs(U-X)<=$&&Math.abs(ee-te)<=$||(Y=x,X=U,te=ee,Vf(u,x,f),g.update(u,E.target,x))}function ve(){T||w.isPlaying()?v.start():(v.stop(),v.invalidate())}function Ve(){_=!0}function Ze(){_=!1,T&&ie(),et(),v.invalidate()}function ke(){et(),v.invalidate()}function mt(){if(B)return;let x=Math.max(i.clientWidth,1),U=Math.max(i.clientHeight,1),ee=pp();if(x===H&&U===ne&&ee===W)return;let $=ee!==W,ae=x!==H||U!==ne;H=x,ne=U,W=ee,$&&s.setPixelRatio(ee),ae&&s.setSize(x,U,!1),b.setSize(x,U,ee),ae&&(u.aspect=x/U,u.updateProjectionMatrix()),v.invalidate()}function gt(x){Hf(x.key)&&(x.preventDefault(),Wf(u,E,x.key),T&&ie(),v.invalidate())}function zt(){a.focus({preventScroll:!0})}function rt(){let x=G&&!document.hidden;v.setActive(x),x&&T&&ie()}function Sn(x){let U=!!x;return U===T?!1:(T=U,U&&ie(),ve(),U||v.invalidate(),!0)}function wt(x){return g.setGridVisible(x)?(v.invalidate(),!0):!1}function nn(x){return Ce.set(x)?(v.invalidate(),!0):!1}function rn(x){return p.setPreset(x)?(v.invalidate(),!0):!1}function sn(x){return p.setWireframe(x)?(g.setShadowVisible(!p.wireframe),v.invalidate(),!0):!1}function N(x){w.setPlaying(x)&&ve()}function an(x){w.setClip(x)&&(ve(),v.invalidate())}function ot(x){w.seek(x)&&v.invalidate()}function lt(x){return typeof x!="function"||B?()=>{}:(S.add(x),x(w.snapshot()),()=>{S.delete(x)})}function me(){Mh(u,E,t,f),T&&ie(),et(),v.invalidate()}function yt(){v.invalidate()}function Le(){B||(w.update(0,performance.now()),b.render(0))}async function Fe(){B||(s.compile(h,u),b.warmup(s))}function A(){B||(B=!0,we(),v.dispose(),m(),pe?.disconnect(),Z?.disconnect(),window.removeEventListener("resize",mt),document.removeEventListener("visibilitychange",rt),E.removeEventListener("change",ke),E.removeEventListener("start",Ve),E.removeEventListener("end",Ze),a.removeEventListener("keydown",gt),a.removeEventListener("pointerdown",zt),S.clear(),w.dispose(),p.dispose(),g.dispose(),d.dispose(),Ce.dispose(),E.dispose(),b.dispose(),da(h),h.clear(),Ph.release(r))}return E.addEventListener("change",ke),E.addEventListener("start",Ve),E.addEventListener("end",Ze),a.addEventListener("keydown",gt),a.addEventListener("pointerdown",zt),window.addEventListener("resize",mt),document.addEventListener("visibilitychange",rt),typeof ResizeObserver=="function"&&(pe=new ResizeObserver(mt),pe.observe(i)),typeof IntersectionObserver=="function"&&(Z=new IntersectionObserver(x=>{let U=x[x.length-1];U!==void 0&&(G=U.isIntersecting,rt())},{threshold:.01}),Z.observe(i)),mt(),Mh(u,E,t,f),et(),v.setActive(G&&!document.hidden),T||w.isPlaying()?v.start():v.invalidate(),{animations:w.animations,subscribeAnimation:lt,setAnimationPlaying:N,setAnimationClip:an,seekAnimation:ot,setAutoRotate:Sn,setGrid:wt,setEnvironment:nn,setMaterialPreset:rn,setWireframe:sn,reset:me,invalidate:yt,paint:Le,warmup:Fe,environmentReady:le,dispose:A}}var gp={rendererTitle:"FBX 3D",objRendererTitle:"OBJ 3D",gltfRendererTitle:"glTF / GLB 3D",stlRendererTitle:"STL 3D",tgaRendererTitle:"TGA \u7EB9\u7406",exrRendererTitle:"EXR \u7EB9\u7406",hdrRendererTitle:"HDR \u7EB9\u7406",badge:"FBX",objBadge:"OBJ",gltfBadge:"glTF",glbBadge:"GLB",stlBadge:"STL",tgaBadge:"TGA",exrBadge:"EXR",hdrBadge:"HDR",loading:"\u6B63\u5728\u6784\u5EFA\u4E09\u7EF4\u573A\u666F\u2026",textureLoading:"\u6B63\u5728\u89E3\u7801\u7EB9\u7406\u2026",textureFit:"\u9002\u5E94\u7A97\u53E3",textureFlipY:"\u5782\u76F4\u7FFB\u8F6C",textureKeyboardHelp:"\u7EB9\u7406\u9884\u89C8\u3002\u52A0\u53F7/\u51CF\u53F7\u7F29\u653E\uFF0C\u65B9\u5411\u952E\u5E73\u79FB\uFF0C0 \u9002\u5E94\u7A97\u53E3\u3002",emptyTitle:"\u6CA1\u6709\u53EF\u663E\u793A\u7684\u7F51\u683C",empty:"\u8FD9\u4E2A\u6587\u4EF6\u4E0D\u5305\u542B\u53EF\u89C1\u7684\u7F51\u683C\u6A21\u578B\u3002",errorTitle:"\u65E0\u6CD5\u663E\u793A\u8FD9\u4E2A\u4E09\u7EF4\u6A21\u578B",textureErrorTitle:"\u65E0\u6CD5\u663E\u793A\u8FD9\u4E2A\u7EB9\u7406",textureFailed:"\u7EB9\u7406\u89E3\u7801\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u5B8C\u6574\u4E14\u683C\u5F0F\u53D7\u652F\u6301\u3002",parseFailed:"\u6A21\u578B\u6587\u4EF6\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u5B8C\u6574\u4E14\u683C\u5F0F\u53D7\u652F\u6301\u3002",webglUnavailable:"\u5F53\u524D\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\u65E0\u6CD5\u521B\u5EFA WebGL 2 \u4E0A\u4E0B\u6587\uFF0C\u6682\u65F6\u4E0D\u80FD\u663E\u793A\u4E09\u7EF4\u6A21\u578B\u3002",renderFailed:"\u4E09\u7EF4\u573A\u666F\u521D\u59CB\u5316\u5931\u8D25\u3002",retry:"\u91CD\u8BD5",controls:"\u4E09\u7EF4\u89C6\u56FE\u63A7\u5236",reset:"\u590D\u4F4D\u89C6\u89D2",grid:"\u663E\u793A\u7F51\u683C",wireframe:"\u7EBF\u6846\u6A21\u5F0F",materials:"\u6750\u8D28\u7403",materialOriginal:"\u539F\u59CB\u6750\u8D28",materialDiffuse:"\u7EAF\u6F2B\u53CD\u5C04",materialPlastic:"\u4EAE\u9762\u5851\u6599",materialMetal:"\u955C\u9762\u91D1\u5C5E",materialMetalPolished:"\u629B\u5149\u91D1\u5C5E",materialClay:"\u96D5\u5851\u9676\u571F",environment:"\u73AF\u5883",envNature:"\u81EA\u7136",envCity:"\u57CE\u5E02",envIndoor:"\u5BA4\u5185",envStudio:"\u5F71\u68DA",autoRotate:"\u81EA\u52A8\u65CB\u8F6C",play:"\u64AD\u653E",pause:"\u6682\u505C",animation:"\u52A8\u753B",animationProgress:"\u52A8\u753B\u8FDB\u5EA6",animationFallback:"\u52A8\u753B {n}",statsTitle:"\u6A21\u578B\u7EDF\u8BA1",statsFileSize:"\u6587\u4EF6\u5927\u5C0F",statsMeshes:"\u7F51\u683C\u6570\u91CF",statsVertices:"\u9876\u70B9\u6570\u91CF",statsTriangles:"\u4E09\u89D2\u9762\u6570\u91CF",hint:"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u5E73\u79FB",canvasLabel:"\u4E09\u7EF4\u6A21\u578B\u3002\u62D6\u62FD\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u53F3\u952E\u5E73\u79FB\uFF0C\u65B9\u5411\u952E\u65CB\u8F6C\u3002",details:"\u6280\u672F\u8BE6\u60C5"},es={rendererTitle:"FBX 3D",objRendererTitle:"OBJ 3D",gltfRendererTitle:"glTF / GLB 3D",stlRendererTitle:"STL 3D",tgaRendererTitle:"TGA texture",exrRendererTitle:"EXR texture",hdrRendererTitle:"HDR texture",badge:"FBX",objBadge:"OBJ",gltfBadge:"glTF",glbBadge:"GLB",stlBadge:"STL",tgaBadge:"TGA",exrBadge:"EXR",hdrBadge:"HDR",loading:"Building 3D scene\u2026",textureLoading:"Decoding texture\u2026",textureFit:"Fit",textureFlipY:"Flip Y",textureKeyboardHelp:"Texture preview. Plus and minus zoom, arrow keys pan, 0 fits.",emptyTitle:"No visible meshes",empty:"This file contains no visible mesh geometry.",errorTitle:"Could not display this 3D model",textureErrorTitle:"Could not display this texture",textureFailed:"The texture could not be decoded. Check that the file is complete and supported.",parseFailed:"The model file could not be parsed. Check that it is complete and uses a supported format.",webglUnavailable:"This browser or device cannot create a WebGL 2 context, so the 3D model cannot be shown.",renderFailed:"The 3D scene could not be initialized.",retry:"Try again",controls:"3D view controls",reset:"Reset view",grid:"Show grid",wireframe:"Wireframe",materials:"Materials",materialOriginal:"Original",materialDiffuse:"Pure Diffuse",materialPlastic:"Glossy Plastic",materialMetal:"Mirror Metal",materialMetalPolished:"Polished Metal",materialClay:"Sculpt Clay",environment:"Env",envNature:"Nature",envCity:"City",envIndoor:"Indoor",envStudio:"Studio",autoRotate:"Auto-rotate",play:"Play",pause:"Pause",animation:"Animation",animationProgress:"Animation progress",animationFallback:"Animation {n}",statsTitle:"Model statistics",statsFileSize:"File size",statsMeshes:"Meshes",statsVertices:"Vertices",statsTriangles:"Triangles",hint:"Drag to rotate \xB7 Scroll to zoom \xB7 Right-drag to pan",canvasLabel:"3D model. Drag to rotate, scroll to zoom, right-drag to pan, or use the arrow keys.",details:"Technical details"};var _p=Object.freeze([{id:"original",labelKey:"materialOriginal",className:"dsh3dv-ball--original"},{id:"diffuse",labelKey:"materialDiffuse",className:"dsh3dv-ball--diffuse"},{id:"plastic",labelKey:"materialPlastic",className:"dsh3dv-ball--plastic"},{id:"metal",labelKey:"materialMetal",className:"dsh3dv-ball--metal"},{id:"metal-polished",labelKey:"materialMetalPolished",className:"dsh3dv-ball--polished"},{id:"clay",labelKey:"materialClay",className:"dsh3dv-ball--clay"}]),xp=Object.freeze([{id:"nature",labelKey:"envNature",className:"dsh3dv-env--nature"},{id:"city",labelKey:"envCity",className:"dsh3dv-env--city"},{id:"indoor",labelKey:"envIndoor",className:"dsh3dv-env--indoor"},{id:"studio",labelKey:"envStudio",className:"dsh3dv-env--studio"}]),vp=Object.freeze({grid:!0,autoRotate:!1,wireframe:!1,material:"original",environment:"nature"});var Bp=ki(require("react"),1);var Zn=ki(require("react"),1);var yp=ki(require("react"),1),Mt=yp.createElement;function Cl(){return Mt("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinejoin:"round","aria-hidden":!0},Mt("path",{d:"M8 1.8 14 5.2v5.6L8 14.2 2 10.8V5.2Z"}),Mt("path",{d:"M2.3 5.4 8 8.6l5.7-3.2M8 8.6v5.2"}))}function bp(){return Mt("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round","aria-hidden":!0},Mt("path",{d:"M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4"}),Mt("circle",{cx:8,cy:8,r:2.1}))}function Sp(){return Mt("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round","aria-hidden":!0},Mt("path",{d:"M2 6h12M2 10h12M6 2v12M10 2v12"}),Mt("rect",{x:2,y:2,width:12,height:12,rx:1.5}))}function Mp(){return Mt("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.35,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},Mt("ellipse",{cx:8,cy:8,rx:6.2,ry:3.1,transform:"rotate(-28 8 8)"}),Mt("path",{d:"m12.4 3.9 1.3 2.4-2.7.2"}),Mt("circle",{cx:8,cy:8,r:1.7}))}function wp(){return Mt("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.2,strokeLinejoin:"round","aria-hidden":!0},Mt("path",{d:"M8 1.8 14 5.2v5.6L8 14.2 2 10.8V5.2Z"}),Mt("path",{d:"M2 5.2 8 8.6l6-3.4M8 8.6v5.6M2 10.8 8 8.6l6 2.2"}))}function Tp(){return Mt("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0},Mt("path",{d:"M5.2 3.3v9.4L13.1 8Z"}))}function Ep(){return Mt("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0},Mt("rect",{x:4.1,y:3.2,width:2.7,height:9.6,rx:.7}),Mt("rect",{x:9.2,y:3.2,width:2.7,height:9.6,rx:.7}))}var Rp=ki(require("react"),1),Pl=Rp.createElement,Ap=(()=>{try{return new Intl.NumberFormat(void 0,{maximumFractionDigits:0})}catch{return null}})();function ma(i){return Ap===null?String(i):Ap.format(i)}function Cp(i){let e=Number(i);if(!Number.isFinite(e)||e<0)return"\u2014";if(e<1024)return`${ma(Math.round(e))} B`;let t=["KB","MB","GB","TB"],n=e,r=-1;do n/=1024,r+=1;while(n>=1024&&r<t.length-1);let s=n>=100?0:n>=10?1:2;return`${n.toFixed(s)} ${t[r]}`}function Ih(i){let e=Number(i);return!Number.isFinite(e)||e<0?"0.00":e.toFixed(e<10?2:1)}function Pp(i,e){return i==null?e("renderFailed"):i.code==="webgl"?e("webglUnavailable"):i.code==="parse"?e("parseFailed"):i.code==="texture"?e("textureFailed"):e("renderFailed")}function ga({label:i,active:e,onClick:t,children:n}){let r={type:"button",className:"dsh3dv-tool",title:i,"aria-label":i,onClick:t};return e!==void 0&&(r["aria-pressed"]=e),Pl("button",r,n)}function _a({label:i,value:e}){return Pl("div",{className:"dsh3dv-stat"},Pl("span",{className:"dsh3dv-stat-label"},i),Pl("span",{className:"dsh3dv-stat-value"},e))}var mi=Zn.createElement;function Ip({view:i,clips:e,t}){let[n,r]=Zn.useState(!0),[s,a]=Zn.useState(0),[o,l]=Zn.useState(0);Zn.useEffect(()=>{i.setAnimationPlaying(n)},[i,n]),Zn.useEffect(()=>{i.setAnimationClip(s),l(0)},[i,s]),Zn.useEffect(()=>i.subscribeAnimation(p=>{l(p.time)}),[i]);let c=e[Math.min(s,e.length-1)],h=c!=null?c.name||t("animationFallback",{n:s+1}):"",u=Number.isFinite(c?.duration)?Math.max(Number(c.duration),0):0,f=Math.min(Math.max(Number(o)||0,0),u),d=`${Ih(f)}s / ${Ih(u)}s`;return mi("div",{className:"dsh3dv-anim","data-dsh3d-animation":"",role:"group","aria-label":t("animation")},mi("button",{type:"button",className:"dsh3dv-play",title:t(n?"pause":"play"),"aria-label":t(n?"pause":"play"),"aria-pressed":n,onClick:()=>r(p=>!p)},mi(n?Ep:Tp)),e.length>1?mi("select",{className:"dsh3dv-anim-select",value:s,"aria-label":t("animation"),onChange:p=>{a(Number(p.currentTarget.value)),l(0)}},e.map((p,v)=>mi("option",{key:v,value:v},p.name||t("animationFallback",{n:v+1})))):mi("span",{className:"dsh3dv-anim-name",title:h},h),mi("input",{type:"range",className:"dsh3dv-progress",min:0,max:Math.max(u,.01),step:.01,value:f,"aria-label":t("animationProgress"),onChange:p=>{let v=Number(p.currentTarget.value);l(v),i.seekAnimation(v)}}),mi("span",{className:"dsh3dv-anim-time"},d))}var pn=ki(require("react"),1);var De=pn.createElement,Ub=typeof window>"u"?pn.useEffect:pn.useLayoutEffect,Fb=Object.freeze({material:"dsh3dv-ball",environment:"dsh3dv-env"});function Dp({t:i,format:e,glb:t}){return De("span",{className:"dsh3dv-badge"},De(Cl),De("span",null,i(_f(e,t))))}function Np({view:i,settings:e,onChange:t,t:n}){return De("div",{className:"dsh3dv-toolbar",role:"toolbar","aria-label":n("controls")},De(ga,{label:n("reset"),onClick:()=>i?.reset()},De(bp)),De(ga,{label:n("autoRotate"),active:e.autoRotate,onClick:()=>t({autoRotate:!e.autoRotate})},De(Mp)),De(ga,{label:n("grid"),active:e.grid,onClick:()=>t({grid:!e.grid})},De(Sp)),De(ga,{label:n("wireframe"),active:e.wireframe,onClick:()=>t({wireframe:!e.wireframe})},De(wp)))}function Up({stats:i,fileSize:e,t}){return De("div",{className:"dsh3dv-stats","data-dsh3d-stats":"",role:"group","aria-label":t("statsTitle")},Number.isFinite(e)?De(_a,{label:t("statsFileSize"),value:Cp(e)}):null,De(_a,{label:t("statsMeshes"),value:ma(i.meshes)}),De(_a,{label:t("statsVertices"),value:ma(i.vertices)}),De(_a,{label:t("statsTriangles"),value:ma(i.triangles)}))}function Ob(i,e){return i.find(t=>t.id===e)??i[0]}function Lp({kind:i,groupLabel:e,options:t,value:n,open:r,onOpenChange:s,onSelect:a,t:o}){let l=pn.useRef(null),c=pn.useRef(null),h=Ob(t,n),u=Fb[i],f=`${e}: ${o(h.labelKey)}`;return pn.useEffect(()=>{r&&c.current?.querySelector('[aria-checked="true"]')?.focus?.()},[r]),Ub(()=>{if(!r)return;let d=l.current,p=c.current;if(d===null||p===null)return;let v=()=>{let g=d.getBoundingClientRect(),m=p.offsetWidth||128,S=8,w=6,b=window.innerHeight,E=Math.max(S,window.innerWidth-m-S),T=Math.min(Math.max(S,g.left),E),_=Math.max(S,T-6);p.style.maxHeight=`${Math.min(260,Math.max(0,b-2*S))}px`;let M=p.offsetHeight,D=g.bottom+w,C=g.top-M-w,P=D+M+S<=b?D:C,F=Math.max(S,b-M-S),k=Math.min(Math.max(S,P),F);p.style.top=`${Math.round(k)}px`,p.style.left=`${Math.round(_)}px`,p.style.right="auto",p.style.bottom="auto"};if(p.setAttribute("popover","manual"),typeof p.showPopover=="function")try{p.showPopover()}catch{p.removeAttribute("popover")}return v(),window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),()=>{if(window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0),typeof p.hidePopover=="function"&&p.isConnected)try{p.hidePopover()}catch{}}},[r]),De("div",{className:"dsh3dv-picker"},De("button",{type:"button",className:"dsh3dv-picker-trigger","data-dsh3d-picker":i,"aria-haspopup":"menu","aria-expanded":r,"aria-label":f,title:f,ref:l,onClick:()=>s(r?null:i)},De("span",{className:`dsh3dv-picker-swatch ${u} ${h.className}`,"aria-hidden":!0})),r?De("div",{className:"dsh3dv-picker-menu",role:"menu","data-dsh3d-picker-menu":i,"aria-label":e,ref:c},t.map(d=>De("button",{key:d.id,type:"button",className:"dsh3dv-picker-option",role:"menuitemradio","aria-checked":n===d.id,title:o(d.labelKey),onClick:()=>{a(d.id),s(null),l.current?.focus?.()}},De("span",{className:`dsh3dv-picker-option-swatch ${u} ${d.className}`,"aria-hidden":!0}),De("span",{className:"dsh3dv-picker-option-label"},o(d.labelKey))))):null)}function Fp({material:i,environment:e,onMaterialChange:t,onEnvironmentChange:n,t:r}){let[s,a]=pn.useState(null),o=pn.useRef(null);return pn.useEffect(()=>{if(s===null)return;let l=c=>{c.type==="keydown"&&c.key!=="Escape"||c.type==="pointerdown"&&o.current?.contains(c.target)||a(null)};return document.addEventListener("pointerdown",l),document.addEventListener("keydown",l),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",l)}},[s]),De("div",{className:"dsh3dv-view-controls","data-dsh3d-controls":"",ref:o},De(Lp,{kind:"material",groupLabel:r("materials"),options:_p,value:i,open:s==="material",onOpenChange:a,onSelect:t,t:r}),De(Lp,{kind:"environment",groupLabel:r("environment"),options:xp,value:e,open:s==="environment",onOpenChange:a,onSelect:n,t:r}))}function Op({t:i}){return De("div",{className:"dsh3dv-hint"},i("hint"))}function Il({status:i,failure:e,onRetry:t,t:n,loadingKey:r="loading",errorTitleKey:s="errorTitle"}){return i==="loading"?De("div",{className:"dsh3dv-overlay","data-dsh3d-status":"loading"},De("div",{className:"dsh3dv-panel dsh3dv-panel--loading",role:"status","aria-live":"polite"},De("span",{className:"dsh3dv-spinner","aria-hidden":!0},De("svg",{className:"dsh3dv-spinner-ring",viewBox:"0 0 16 16"},De("circle",{cx:8,cy:8,r:6,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeDasharray:"28 10"}))),De("span",null,n(r)))):i==="empty"?De("div",{className:"dsh3dv-overlay","data-dsh3d-status":"empty"},De("div",{className:"dsh3dv-panel",role:"status"},De("div",{className:"dsh3dv-panel-icon"},De(Cl)),De("p",{className:"dsh3dv-panel-title"},n("emptyTitle")),De("p",{className:"dsh3dv-panel-text"},n("empty")))):i==="error"?De("div",{className:"dsh3dv-overlay","data-dsh3d-status":"error"},De("div",{className:"dsh3dv-panel dsh3dv-panel--error",role:"alert"},De("div",{className:"dsh3dv-panel-icon"},De(Cl)),De("p",{className:"dsh3dv-panel-title"},n(s)),De("p",{className:"dsh3dv-panel-text"},Pp(e,n)),De("div",{className:"dsh3dv-actions"},De("button",{type:"button",className:"dsh3dv-action",onClick:t},n("retry"))),De("details",{className:"dsh3dv-details"},De("summary",null,n("details")),De("pre",null,e?.detail??"")))):null}var Ll=`
.dsh3dv-root{position:relative;box-sizing:border-box;width:100%;height:100%;min-height:280px;overflow:hidden;isolation:isolate;--dsh3dv-bar-height:32px;--dsh3dv-label-size:11px;--dsh3dv-label-weight:600;--dsh3dv-overlay-bg:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family,"Segoe UI Variable Text","Segoe UI",Inter,-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",Arial,"Microsoft YaHei",sans-serif);white-space:normal;background:var(--dsw-alias-bg-layer-1,#fff)}
body[data-ds-dark-theme] .dsh3dv-root,.dsh3dv-root[data-dsh3d-tone="dark"]{--dsh3dv-overlay-bg:#3a3a3a}
.dsh3dv-root[data-dsh3d-tone="dark"]{background:#303030}
.dsh3dv-root[data-dsh3d-tone="light"]{background:#f8f8f8}
.dsh3dv-stage{position:absolute;inset:0}
.dsh3dv-texture-stage{position:absolute;inset:0;display:grid;place-items:center;box-sizing:border-box;padding:52px 18px 18px;overflow:hidden;touch-action:none;background-color:var(--dsw-alias-bg-layer-1);background-image:linear-gradient(45deg,var(--dsw-alias-bg-layer-2) 25%,transparent 25%,transparent 75%,var(--dsw-alias-bg-layer-2) 75%),linear-gradient(45deg,var(--dsw-alias-bg-layer-2) 25%,transparent 25%,transparent 75%,var(--dsw-alias-bg-layer-2) 75%);background-position:0 0,8px 8px;background-size:16px 16px}
.dsh3dv-texture-stage[data-zoomed="true"]{cursor:grab}
.dsh3dv-texture-stage[data-dragging="true"]{cursor:grabbing}
.dsh3dv-texture-stage:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}
.dsh3dv-texture-image{display:block;width:auto;height:auto;max-width:100%;max-height:100%;border-radius:2px;background:transparent;box-shadow:0 2px 18px rgba(20,28,40,.2);transform-origin:center center;will-change:transform;user-select:none;-webkit-user-drag:none}
.dsh3dv-texture-actions{display:flex;align-items:center;gap:6px;min-width:0;pointer-events:none}
.dsh3dv-texture-fit{pointer-events:auto;padding:4px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-secondary);font:inherit;font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);line-height:1;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-texture-fit:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.dsh3dv-texture-fit[aria-pressed="true"]{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-brand-primary)}
.dsh3dv-texture-fit:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-canvas{display:block;width:100%;height:100%;outline:none;touch-action:none;cursor:grab}
.dsh3dv-canvas:active{cursor:grabbing}
.dsh3dv-canvas:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}
.dsh3dv-top{position:absolute;top:10px;right:10px;left:10px;z-index:20;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;pointer-events:none}
.dsh3dv-top-actions{display:flex;align-items:center;gap:6px;min-width:0;pointer-events:none}
.dsh3dv-badge,.dsh3dv-stats,.dsh3dv-hint{pointer-events:none}
.dsh3dv-toolbar{pointer-events:auto}
.dsh3dv-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 8px 4px 7px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-secondary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);letter-spacing:.03em;line-height:1;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-badge svg{width:13px;height:13px}
.dsh3dv-toolbar{display:flex;gap:2px;padding:3px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsh3dv-overlay-bg);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-tool{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}
.dsh3dv-tool:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.dsh3dv-tool[aria-pressed="true"]{color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-tool:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-tool svg{width:15px;height:15px}
.dsh3dv-hud{position:absolute;top:46px;left:10px;z-index:2;display:flex;flex-direction:column;align-items:flex-start;gap:6px;max-width:calc(100% - 20px);pointer-events:none}
.dsh3dv-stats{display:flex;flex-direction:column;gap:2px;min-width:146px;max-width:100%;padding:7px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-secondary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);line-height:1.45;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-stat{display:flex;align-items:baseline;justify-content:space-between;gap:16px;white-space:nowrap}
.dsh3dv-stat-label{color:var(--dsw-alias-label-secondary)}
.dsh3dv-stat-value{color:var(--dsw-alias-label-secondary);font-weight:var(--dsh3dv-label-weight);font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1}
.dsh3dv-view-controls{position:relative;display:flex;flex-direction:row;align-items:center;gap:4px;max-width:none;pointer-events:auto}
.dsh3dv-picker{position:relative;min-width:0}
.dsh3dv-picker-trigger{display:flex;align-items:center;justify-content:center;gap:0;width:34px;height:34px;padding:3px;border:0;border-radius:9px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-primary);font:inherit;text-align:left;white-space:nowrap;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-picker-trigger:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-trigger:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-picker-trigger[aria-expanded="true"]{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-swatch{flex:none;box-sizing:border-box;pointer-events:none}
.dsh3dv-picker-swatch.dsh3dv-ball{width:24px;height:24px}
.dsh3dv-picker-swatch.dsh3dv-env{width:24px;height:24px;border-radius:6px}
.dsh3dv-picker-menu{position:fixed;top:calc(100% + 6px);left:0;right:auto;bottom:auto;z-index:30;display:flex;flex-direction:column;flex-wrap:nowrap;gap:2px;width:128px;max-height:260px;margin:0;box-sizing:border-box;overflow-y:auto;overscroll-behavior:contain;padding:5px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsh3dv-overlay-bg);box-shadow:0 8px 22px rgba(20,28,40,.16);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.dsh3dv-picker-option{display:flex;flex:none;flex-direction:row;align-items:center;gap:8px;width:100%;box-sizing:border-box;padding:4px 6px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer}
.dsh3dv-picker-option:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-option:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-picker-option[aria-checked="true"]{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-option-swatch{box-sizing:border-box;pointer-events:none}
.dsh3dv-picker-option-swatch.dsh3dv-ball,.dsh3dv-picker-option-swatch.dsh3dv-env{width:24px;height:24px}
.dsh3dv-picker-option-swatch.dsh3dv-env{border-radius:6px}
.dsh3dv-picker-option-label{flex:1;min-width:0;max-width:none;overflow:hidden;color:var(--dsw-alias-label-secondary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);line-height:1.3;text-align:left;white-space:nowrap;text-overflow:ellipsis}
.dsh3dv-ball{position:relative;flex:none;width:30px;height:30px;padding:0;border:0;border-radius:50%;cursor:pointer;box-shadow:inset 2px 3px 6px rgba(255,255,255,.35);transition:transform .12s ease}
.dsh3dv-ball::after{content:"";position:absolute;left:26%;top:17%;width:34%;height:21%;border-radius:50%;background:rgba(255,255,255,.5);filter:blur(1px);transform:rotate(-24deg);pointer-events:none}
.dsh3dv-ball--original{background:radial-gradient(circle at 32% 26%,#fff7ec 0%,#e7cdb8 18%,#9ea6b8 48%,#4f5d70 78%,#5a6676 100%)}
.dsh3dv-ball--diffuse{background:radial-gradient(circle at 32% 26%,#ffffff 0%,#ededed 30%,#dcdcdc 64%,#9b9b9b 100%)}
.dsh3dv-ball--plastic{background:radial-gradient(circle at 30% 22%,#ffffff 0%,#ffffff 8%,#e9eaec 18%,#c8c9cb 46%,#6f7276 78%,#a9acb0 100%)}
.dsh3dv-ball--metal{background:linear-gradient(145deg,#f8fbff 0%,#dce6f2 16%,#77879b 38%,#1d2632 56%,#0a0f16 66%,#a9bbcF 82%,#ffffff 100%)}
.dsh3dv-ball--polished{background:radial-gradient(circle at 28% 22%,#ffffff 0%,#eef3fa 10%,#b6c3d3 28%,#5d6c80 58%,#3f4b5c 100%)}
.dsh3dv-ball--clay{background:radial-gradient(circle at 32% 26%,#f3d6c2 0%,#dfa98a 30%,#b46f52 64%,#7f4635 100%)}
.dsh3dv-env{flex:none;width:32px;height:32px;padding:0;border:0;border-radius:8px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)}
.dsh3dv-env--nature{background:radial-gradient(circle at 72% 24%,#fff6c8 0 9%,transparent 10%),linear-gradient(180deg,#7cb9e4 0%,#d9ebf3 46%,#758653 47%,#435535 100%)}
.dsh3dv-env--city{background:linear-gradient(180deg,#e2b27d 0%,#a4adb7 43%,#65717f 48%,#3f4a58 100%)}
.dsh3dv-env--indoor{background:linear-gradient(135deg,#f2e6d7 0%,#d2b9a3 38%,#94745e 70%,#7c604f 100%)}
.dsh3dv-env--studio{background:linear-gradient(135deg,#f7fbff 0%,#c2cedd 30%,#8393a7 58%,#4d5969 100%)}
.dsh3dv-hint{position:absolute;bottom:10px;left:50%;z-index:2;box-sizing:border-box;height:var(--dsh3dv-bar-height);max-width:calc(100% - 20px);overflow:hidden;padding:0 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-secondary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);line-height:calc(var(--dsh3dv-bar-height) - 2px);white-space:nowrap;text-overflow:ellipsis;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-anim{position:absolute;bottom:50px;left:50%;z-index:2;display:flex;align-items:center;gap:5px;box-sizing:border-box;height:var(--dsh3dv-bar-height);max-width:calc(100% - 20px);padding:3px 8px 3px 3px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-primary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);line-height:1.2;transform:translateX(-50%);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);pointer-events:auto}
.dsh3dv-play{display:grid;place-items:center;flex:none;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--dsw-alias-label-primary);cursor:pointer}
.dsh3dv-play:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-play:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-play svg{width:12px;height:12px}
.dsh3dv-anim-name{min-width:0;max-width:110px;overflow:hidden;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis}
.dsh3dv-anim-select{min-width:0;max-width:120px;border:0;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);cursor:pointer;outline:none}
.dsh3dv-anim-select:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-progress{flex:1 1 64px;min-width:40px;max-width:160px;height:12px;margin:0;-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer}
.dsh3dv-progress:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-progress::-webkit-slider-runnable-track{height:2px;border-radius:999px;background:var(--dsw-alias-border-l2)}
.dsh3dv-progress::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:9px;height:9px;margin-top:-3.5px;border:0;border-radius:50%;background:var(--dsw-alias-label-secondary)}
.dsh3dv-progress::-moz-range-track{height:2px;border-radius:999px;background:var(--dsw-alias-border-l2)}
.dsh3dv-progress::-moz-range-thumb{width:9px;height:9px;border:0;border-radius:50%;background:var(--dsw-alias-label-secondary)}
.dsh3dv-anim-time{flex:none;color:var(--dsw-alias-label-secondary);font-size:var(--dsh3dv-label-size);font-weight:var(--dsh3dv-label-weight);font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1;white-space:nowrap}
.dsh3dv-overlay{position:absolute;inset:0;z-index:3;display:grid;place-items:center;padding:20px;box-sizing:border-box;pointer-events:none}
.dsh3dv-overlay[data-dsh3d-status="loading"]{animation:dsh3dv-loading-in .16s ease .36s both}
@keyframes dsh3dv-loading-in{from{opacity:0}to{opacity:1}}
.dsh3dv-panel{box-sizing:border-box;width:min(320px,100%);padding:16px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsh3dv-overlay-bg);color:var(--dsw-alias-label-primary);text-align:center;pointer-events:auto;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.dsh3dv-panel--loading{display:flex;align-items:center;gap:9px;width:auto;max-width:100%;padding:9px 12px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.3}
.dsh3dv-panel-icon{width:34px;height:34px;margin:0 auto 10px;color:var(--dsw-alias-label-secondary);opacity:.7}
.dsh3dv-panel--error .dsh3dv-panel-icon{color:var(--dsw-alias-state-error-primary);opacity:1}
.dsh3dv-panel-title{margin:0 0 5px;font-size:13px;font-weight:600;line-height:1.35}
.dsh3dv-panel-text{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.55;white-space:normal;word-break:break-word}
.dsh3dv-actions{display:flex;justify-content:center;margin-top:12px}
.dsh3dv-action{box-sizing:border-box;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-family:inherit;font-size:12px;line-height:1.2;cursor:pointer}
.dsh3dv-action:hover{background:var(--dsw-alias-bg-layer-1)}
.dsh3dv-action:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-details{margin-top:10px;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.4;text-align:left}
.dsh3dv-details summary{cursor:pointer;user-select:none}
.dsh3dv-details pre{max-height:140px;margin:8px 0 0;overflow:auto;padding:8px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:10px;line-height:1.4;white-space:pre-wrap;word-break:break-word}
.dsh3dv-root button,.dsh3dv-root select,.dsh3dv-root option,.dsh3dv-root input,.dsh3dv-root textarea,.dsh3dv-root summary,.dsh3dv-root pre,.dsh3dv-root code{font-family:inherit}
.dsh3dv-spinner{flex:none;display:inline-flex;width:16px;height:16px;color:var(--dsw-alias-brand-primary);animation:dsh3dv-spin .8s linear infinite !important;will-change:transform;transform-origin:center;backface-visibility:hidden}
.dsh3dv-spinner-ring{display:block;width:100%;height:100%}
@keyframes dsh3dv-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.dsh3dv-spinner{animation-duration:2.4s !important}.dsh3dv-overlay[data-dsh3d-status="loading"]{animation-duration:.01s}}
`;var bn=Bp.createElement;function kp({format:i,glb:e,t,view:n,settings:r,runtime:s,hostRef:a,onSettingsChange:o,onRetry:l}){let c=s.status==="ready"&&n!==null,h=s.stats;return bn("div",{className:"dsh3dv-root","data-dsh3d-viewer":"","data-dsh3d-format":i},bn("style",null,Ll),bn("div",{className:"dsh3dv-stage",ref:a,"data-dsh3d-stage":""}),bn("div",{className:"dsh3dv-top"},bn(Dp,{t,format:i,glb:e}),bn("div",{className:"dsh3dv-top-actions"},c?bn(Fp,{material:r.material,environment:r.environment,onMaterialChange:u=>o({material:u,wireframe:!1}),onEnvironmentChange:u=>o({environment:u}),t}):null,c?bn(Np,{view:n,settings:r,onChange:o,t}):null)),c&&h!==null?bn("div",{className:"dsh3dv-hud"},bn(Up,{stats:h,fileSize:s.fileSize,t})):null,c&&s.clips.length>0?bn(Ip,{view:n,clips:s.clips,t}):null,c?bn(Op,{t}):null,bn(Il,{status:s.status,failure:s.failure,onRetry:l,t}))}var Gp=Ht.createElement,Bb=3e3;function kb(i,e){let t=es[i]??i;return e===void 0?t:t.replace(/\{(\w+)\}/g,(n,r)=>String(e[r]??""))}function Lh(){return{status:"loading",failure:null,stats:null,clips:[]}}function zb(i){return{status:"error",failure:{code:i instanceof Yn?i.code:"scene",message:i instanceof Error?i.message:String(i),detail:i instanceof Error?i.stack??i.message:String(i)},stats:null,clips:[]}}function Gb(i){if(typeof i=="string")try{return new TextEncoder().encode(i).byteLength}catch{return i.length}return i instanceof ArrayBuffer||ArrayBuffer.isView(i)?i.byteLength:null}function zp(i,e){i.setGrid(e.grid),i.setMaterialPreset(e.material),i.setEnvironment(e.environment),i.setWireframe(e.wireframe),i.setAutoRotate(e.autoRotate)}function Vb(i){let e=mh(i.format),t=e==="gltf"&&xf(i.resourceAddress),n=i.content,r=n!=null&&n.kind==="renderer"?n:null,s=i.t??i.fallbackT??kb,a=n!=null&&(n.kind==="bytes"||n.kind==="text")?n.data:null,[o,l]=Ht.useState(Lh),[c,h]=Ht.useState(vp),[u,f]=Ht.useState(0),d=Ht.useRef(null),p=Ht.useRef(null),v=Ht.useRef(s),g=Ht.useRef(c),m=Ht.useRef(typeof i.readWorkspaceFile=="function"?i.readWorkspaceFile:null),S=Ht.useRef(typeof i.loadBytes=="function"?i.loadBytes:null),w=Ht.useRef(typeof i.resourceAddress=="string"?i.resourceAddress:null);v.current=s,g.current=c,m.current=typeof i.readWorkspaceFile=="function"?i.readWorkspaceFile:null,S.current=typeof i.loadBytes=="function"?i.loadBytes:null,w.current=typeof i.resourceAddress=="string"?i.resourceAddress:null,Ht.useEffect(()=>{let T=d.current;if(T===null)return;let _=!1,M=null,D=null,C=null,P=new AbortController;Ff(e),Th(g.current.environment);let F=()=>{D!==null?(D.dispose(),D=null,p.current=null):M!==null&&(da(M),M=null),C?.dispose(),C=null};return l(R=>R.status==="loading"?R:Lh()),(async()=>{if(!_)try{let R=a,B,G;try{if(R===null){let Y=S.current,X=w.current;if(typeof Y!="function"||X===null)throw new Yn("parse","The preview supplied no binary model content.");let te=await Y(X,P.signal);if(_||P.signal.aborted)return;if(te?.ok!==!0)throw new Yn("parse",te?.error?.message??"The model file could not be read.");if(R=te.value?.data??null,B=te.value?.version,R==null)throw new Yn("parse","The workspace returned no model bytes.");r?.loaded?.(B)}G=await Of(R,e,{resourceAddress:w.current??void 0,readWorkspaceFile:m.current??void 0,signal:P.signal})}catch(Y){if(_||P.signal.aborted)return;throw new Yn("parse",Y instanceof Error?Y.message:String(Y),Y)}if(_||P.signal.aborted){G.assets?.dispose(),da(G.object);return}M=G.object,C=G.assets??null;let H=Lf(M);if(H.renderables===0){F(),_||l({status:"empty",failure:null,stats:null,clips:[]});return}let ne=g.current;if(C?.onTextureLoad(()=>{_||D?.invalidate()}),D=mp(T,M,H,{ariaLabel:v.current("canvasLabel"),environment:ne.environment}),M=null,zp(D,ne),_){F();return}let W;try{await Promise.race([D.environmentReady,new Promise(Y=>{W=setTimeout(Y,Bb)})])}finally{clearTimeout(W)}if(_){F();return}if(await D.warmup(),_){F();return}D.paint(),p.current=D,l({status:"ready",failure:null,stats:H,clips:D.animations,fileSize:Gb(R)})}catch(R){if(_||P.signal.aborted)return;F(),T.replaceChildren(),p.current=null,l(zb(R))}})(),()=>{_=!0,P.abort(),F()}},[a,u,e,r?.revision]),Ht.useEffect(()=>{let T=p.current;T!==null&&zp(T,c)},[c]);let b=T=>{h(_=>({..._,...T}))},E=()=>{l(Lh()),f(T=>T+1)};return Gp(kp,{format:e,glb:t,t:s,view:p.current,settings:c,runtime:o,hostRef:d,onSettingsChange:b,onRetry:E})}function Dl(i){function e(t){return Gp(Vb,{...t,format:i})}return e}var Hb=Dl("fbx"),Wb=Dl("obj"),Xb=Dl("gltf"),qb=Dl("stl"),Vp=Object.freeze({fbx:Hb,obj:Wb,gltf:Xb,stl:qb});var at=ki(require("react"),1);var Yb=`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Zb=`#version 300 es
precision highp float;
uniform sampler2D u_texture;
uniform float u_flip;
in vec2 v_uv;
out vec4 out_color;

vec3 toSrgb(vec3 color) {
  vec3 low = color * 12.92;
  vec3 high = 1.055 * pow(max(color, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(low, high, step(vec3(0.0031308), color));
}

void main() {
  vec2 uv = vec2(v_uv.x, mix(v_uv.y, 1.0 - v_uv.y, u_flip));
  vec4 texel = texture(u_texture, uv);
  vec3 color = min(max(texel.rgb, vec3(0.0)), vec3(1.0e30));
  color = color / (1.0 + color);
  if (color.r != color.r) color.r = 0.0;
  if (color.g != color.g) color.g = 0.0;
  if (color.b != color.b) color.b = 0.0;
  out_color = vec4(clamp(toSrgb(color), 0.0, 1.0), clamp(texel.a, 0.0, 1.0));
}
`,Nl=null;function Hp(i,e,t){let n=i.createShader(e);if(n===null)throw new Error("Could not create the preview shader.");if(i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)!==!0){let r=i.getShaderInfoLog(n);throw i.deleteShader(n),new Error(r??"Could not compile the preview shader.")}return n}function Kb(i){let e=Hp(i,i.VERTEX_SHADER,Yb),t=Hp(i,i.FRAGMENT_SHADER,Zb),n=i.createProgram();if(n===null)throw new Error("Could not create the preview program.");if(i.attachShader(n,e),i.attachShader(n,t),i.linkProgram(n),i.deleteShader(e),i.deleteShader(t),i.getProgramParameter(n,i.LINK_STATUS)!==!0){let r=i.getProgramInfoLog(n);throw i.deleteProgram(n),new Error(r??"Could not link the preview program.")}return n}function Jb(i){return i.type===vt?{internalFormat:34836,format:6408,type:5126}:i.type===ut?{internalFormat:32856,format:6408,type:5121}:{internalFormat:34842,format:6408,type:5131}}function Dh(i,e,t,n){n!=null&&i.deleteTexture(n),i.deleteBuffer(t),i.deleteProgram(e),i.getExtension("WEBGL_lose_context")?.loseContext()}function Xp(){let i=document.createElement("canvas"),e=i.getContext("webgl2",{alpha:!0,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(e===null)throw new Error("WebGL2 is unavailable.");let t,n,r;try{t=Kb(e);let s=e.getAttribLocation(t,"a_position"),a=e.getUniformLocation(t,"u_texture"),o=e.getUniformLocation(t,"u_flip");return n=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0),r=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.useProgram(t),e.uniform1i(a,0),{source:i,gl:e,program:t,buffer:n,textureObject:r,uniformFlip:o,owner:null}}catch(s){throw e.deleteTexture(r??null),e.deleteBuffer(n??null),e.deleteProgram(t??null),e.getExtension("WEBGL_lose_context")?.loseContext(),s}}function jb(){return Nl===null&&(Nl=Xp()),Nl}function $b(i){if(i.textureObject!==null)return i.textureObject;let{gl:e}=i,t=e.createTexture();if(t===null)throw new Error("Could not create the preview texture.");return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i.textureObject=t,t}function Wp(i,e,t,n,r){let s=n.image,a=s?.width,o=s?.height,l=s?.data;if(!Number.isInteger(a)||!Number.isInteger(o)||a<=0||o<=0||l===void 0||l===null||l.length!==a*o*4)throw new Error("The HDR texture is not RGBA.");let{source:c,gl:h,program:u,buffer:f,uniformFlip:d}=i,p=n.flipY===!0,v=$b(i);c.width=a,c.height=o,h.bindTexture(h.TEXTURE_2D,v);let g=Jb(n);if(h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,g.internalFormat,a,o,0,g.format,g.type,l),h.getError()!==h.NO_ERROR)throw new Error("WebGL could not upload the HDR texture.");e.width=a,e.height=o;let m=!1,S={render(w){m||(h.viewport(0,0,a,o),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(u),h.bindBuffer(h.ARRAY_BUFFER,f),h.uniform1f(d,p!==w?1:0),h.drawArrays(h.TRIANGLES,0,3),t.clearRect(0,0,a,o),t.drawImage(c,0,0))},dispose(){m||(m=!0,r?(i.owner===S&&(i.owner=null),i.textureObject!==null&&(h.deleteTexture(i.textureObject),i.textureObject=null),c.width=1,c.height=1):(Dh(h,u,f,i.textureObject),c.width=1,c.height=1))}};return S.render(!1),S}function qp(i,e){let t=i.getContext("2d");if(t===null)throw new Error("The texture preview canvas is unavailable.");let n=jb();if(n.owner!==null){let r=Xp();try{return Wp(r,i,t,e,!1)}catch(s){throw Dh(r.gl,r.program,r.buffer,r.textureObject),s}}n.owner={};try{let r=Wp(n,i,t,e,!0);return n.owner=r,r}catch(r){throw n.owner=null,Nl=null,Dh(n.gl,n.program,n.buffer,n.textureObject),r}}var Un=new Map,Ul=0;function Fl(i=globalThis.navigator){let e=Number(i?.deviceMemory);return Number.isFinite(e)&&e>0&&e<=4?67108864:167772160}function Yp(i,e,t){return`${t}\0${String(e)}\0${i}`}function Nh(i){let e=Un.get(i);return e===void 0?null:(Un.delete(i),Un.set(i,e),e)}function Uh(i,e){let n=e?.image?.data?.byteLength;if(!Number.isFinite(n)||n<=0||n>Fl())return!1;let r=Un.get(i);for(r!==void 0&&(Un.delete(i),Ul-=r.image.data.byteLength);Un.size>0&&(Un.size>=4||Ul+n>Fl());){let s=Un.keys().next().value,a=Un.get(s);Un.delete(s),Ul-=a.image.data.byteLength}return Un.set(i,e),Ul+=n,!0}var Rn=at.createElement,Zp=16,Kp=1.25,Ol=40;function Qb(i,e){let t=es[i]??i;return e===void 0?t:t.replace(/\{(\w+)\}/g,(n,r)=>String(e[r]??""))}function Jp(i){let e=(i&32768)!==0?-1:1,t=i>>10&31,n=i&1023;return t===0?e*2**-14*(n/1024):t===31?n===0?e*(1/0):Number.NaN:e*2**(t-15)*(1+n/1024)}function Bl(i){if(!Number.isFinite(i))return i>0?1:0;let e=Math.max(0,i)/(1+Math.max(0,i));return e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055}function xa(i){return Math.min(1,Math.max(0,i))}function jp(i){let e=new Uint8Array(65536);for(let t=0;t<65536;t+=1){let n=Jp(t);e[t]=Math.round(xa(i?Bl(n):n)*255)}return e}var Fh=jp(!0),eS=jp(!1);function tS(i){let e=i.image,t=e?.width,n=e?.height,r=e?.data;if(!Number.isInteger(t)||!Number.isInteger(n)||t<=0||n<=0||r===void 0||r===null)throw new Error("The decoder returned no pixel data.");let s=t*n,a=Math.max(1,Math.min(4,Math.round(r.length/s))),o=i.userData?.dsh3dHdr===!0,l=i.userData?.dsh3dSourceBottomUp===!0,c=r instanceof Uint8Array||r instanceof Uint8ClampedArray;if(c&&!o&&!l&&a===4)return new ImageData(new Uint8ClampedArray(r.subarray(0,s*4)),t,n);if(o&&r instanceof Uint16Array){let f=new Uint8ClampedArray(s*4);for(let d=0;d<s;d+=1){let p=d*a,v=Math.floor(d/t),m=((l?n-1-v:v)*t+d%t)*4,S=Fh[r[p]];if(a===1)f[m]=S,f[m+1]=S,f[m+2]=S,f[m+3]=255;else{let w=Fh[r[p+1]];f[m]=S,f[m+1]=w,f[m+2]=a>=3?Fh[r[p+2]]:w,f[m+3]=a===4?eS[r[p+3]]:255}}return new ImageData(f,t,n)}let h=new Uint8ClampedArray(s*4),u=c?f=>r[f]/255:r instanceof Uint16Array?f=>Jp(r[f]):f=>Number(r[f]);for(let f=0;f<s;f+=1){let d=f*a,p=Math.floor(f/t),g=((l?n-1-p:p)*t+f%t)*4,m,S,w,b=1;a===1?(m=u(d),S=m,w=m):(m=u(d),S=u(d+1),w=a>=3?u(d+2):S,a===4&&(b=u(d+3))),o&&(m=Bl(m),S=Bl(S),w=Bl(w)),h[g]=xa(m)*255,h[g+1]=xa(S)*255,h[g+2]=xa(w)*255,h[g+3]=xa(b)*255}return new ImageData(h,t,n)}function nS(i){let e=i.image?.data;return e instanceof Uint16Array?16:e instanceof Float32Array||e instanceof Float64Array?32:8}function iS(i,e,t){let n=e.current;if(n==null&&(n=document.createElement("canvas"),e.current=n,t.current=null),(n.width!==i.width||n.height!==i.height)&&(n.width=i.width,n.height=i.height,t.current=null),t.current!==i){let r=n.getContext("2d");if(r===null)throw new Error("The texture preview canvas is unavailable.");r.putImageData(i,0,0),t.current=i}return n}function Oh(i,e,t=!1,n,r){if(i===null)throw new Error("The texture preview canvas is unavailable.");i.width=e.width,i.height=e.height;let s=i.getContext("2d");if(s===null)throw new Error("The 2D canvas context is unavailable.");if(!t){s.putImageData(e,0,0);return}if(n===void 0||r===void 0)throw new Error("The texture preview flip canvas is unavailable.");let a=iS(e,n,r);s.save(),s.translate(0,e.height),s.scale(1,-1),s.drawImage(a,0,0),s.restore()}function rS(i,e){let t=e.image,n=t?.width,r=t?.height,s=nS(e);if(e.userData?.dsh3dHdr===!0)try{let o=qp(i,e);return{width:n,height:r,bits:s,glPreview:o}}catch{}let a=tS(e);return Oh(i,a),{width:a.width,height:a.height,bits:s,image:a}}function sS(i){let e=i.format,t=i.content,n=t!=null&&t.kind==="renderer"?t:null,r=t!=null&&(t.kind==="bytes"||t.kind==="text")?t.data:null,s=i.t??i.fallbackT??Qb,[a,o]=at.useState({status:"loading",failure:null,width:0,height:0,bits:0}),[l,c]=at.useState(0),[h,u]=at.useState({scale:1,x:0,y:0}),[f,d]=at.useState(!1),[p,v]=at.useState(!1),g=at.useRef(null),m=at.useRef(null),S=at.useRef(null),w=at.useRef(null),b=at.useRef(null),E=at.useRef(null),T=at.useRef(null),_=at.useRef(!1),M=at.useRef(0),D=at.useRef(typeof i.loadBytes=="function"?i.loadBytes:null),C=at.useRef(typeof i.resourceAddress=="string"?i.resourceAddress:null),P=at.useRef(n);D.current=typeof i.loadBytes=="function"?i.loadBytes:null,C.current=typeof i.resourceAddress=="string"?i.resourceAddress:null,P.current=n,at.useEffect(()=>{_.current=f},[f]),at.useEffect(()=>{let X=new AbortController,te=!1;return(async()=>{let Z=M.current+=1;_.current=!1,o({status:"loading",failure:null,width:0,height:0,bits:0}),u({scale:1,x:0,y:0}),d(!1),b.current?.dispose(),b.current=null,w.current=null,T.current=null;try{let ie=r,ge,we=P.current;if(we!==null){if(D.current===null)throw new Error("The workspace reader is unavailable.");let Ve=await D.current(C.current,X.signal);if(Ve?.ok!==!0)throw new Error(Ve?.error?.message??"The texture file could not be read.");ie=Ve.value.data,ge=Ve.value.version}if(ie==null)throw new Error("The texture file has no content.");let le=we!==null&&ge!==void 0&&C.current!==null?Yp(C.current,ge,e):null,Ce=le===null?null:Nh(le);if(Ce!==null){if(te||X.signal.aborted)return;Oh(g.current,Ce.image),w.current=Ce.image,b.current=null,T.current=null,we?.loaded?.(ge),u({scale:1,x:0,y:0}),d(!1),o({status:"ready",failure:null,width:Ce.width,height:Ce.height,bits:Ce.bits});return}let et=await Cf(e,ie,{signal:X.signal});if(te||X.signal.aborted){et.dispose();return}let ve=rS(g.current,et);if(et.dispose(),w.current=ve.image??null,b.current=ve.glPreview??null,T.current=null,we?.loaded?.(ge),u({scale:1,x:0,y:0}),d(!1),o({status:"ready",failure:null,width:ve.width,height:ve.height,bits:ve.bits}),le!==null&&ve.image!==null&&ve.image!==void 0)Uh(le,{image:ve.image,width:ve.width,height:ve.height,bits:ve.bits});else if(le!==null&&ve.image===void 0&&ve.width*ve.height*4<=Fl()){let Ve=()=>{if(!(te||X.signal.aborted||M.current!==Z)&&!(_.current||b.current!==ve.glPreview)&&Nh(le)===null)try{let Ze=g.current?.getContext("2d");if(Ze==null)return;let ke=Ze.getImageData(0,0,ve.width,ve.height);Uh(le,{image:ke,width:ve.width,height:ve.height,bits:ve.bits})}catch{}};typeof requestIdleCallback=="function"?requestIdleCallback(Ve,{timeout:2e3}):setTimeout(Ve,0)}}catch(ie){if(te||X.signal.aborted)return;P.current?.failed?.(ie),o({status:"error",failure:{code:"texture",message:ie instanceof Error?ie.message:String(ie),detail:ie instanceof Error?ie.stack??ie.message:String(ie)},width:0,height:0,bits:0})}})(),()=>{te=!0,X.abort()}},[l,r,e,n?.revision]),at.useEffect(()=>{if(a.status==="ready"){if(b.current!==null){b.current.render(f);return}w.current!==null&&Oh(g.current,w.current,f,E,T)}},[f,a.status]),at.useEffect(()=>()=>{b.current?.dispose(),b.current=null},[]),at.useEffect(()=>{if(a.status!=="ready")return;let X=m.current;if(X===null)return;let te=pe=>{pe.preventDefault();let Z=pe.deltaY*(pe.deltaMode===1?16:1);u(ie=>{let ge=Math.min(Zp,Math.max(1,ie.scale*Math.exp(-Z*.0015)));return Math.abs(ge-ie.scale)<1e-4?ie:ge<=1.0001?{scale:1,x:0,y:0}:{...ie,scale:ge}})};return X.addEventListener("wheel",te,{passive:!1}),()=>X.removeEventListener("wheel",te)},[a.status]);let F=a.status==="ready",k=h.scale>1.001,R=Math.round(h.scale*100),B=()=>u({scale:1,x:0,y:0}),G=X=>{S.current!==null&&(X?.pointerId!==void 0&&X.currentTarget?.hasPointerCapture?.(X.pointerId)===!0&&X.currentTarget.releasePointerCapture(X.pointerId),S.current=null,v(!1))},H=X=>{!k||X.button!==0||(X.preventDefault(),X.currentTarget.setPointerCapture?.(X.pointerId),S.current={pointerId:X.pointerId,startX:X.clientX,startY:X.clientY,x:h.x,y:h.y},v(!0))},ne=X=>{let te=S.current;te===null||te.pointerId!==X.pointerId||u(pe=>({...pe,x:te.x+X.clientX-te.startX,y:te.y+X.clientY-te.startY}))},W=X=>{u(te=>{let pe=Math.min(Zp,Math.max(1,te.scale*X));return pe<=1.0001?{scale:1,x:0,y:0}:{...te,scale:pe}})},Y=X=>{if(!F)return;let te=!0;switch(X.key){case"+":case"=":W(Kp);break;case"-":case"_":W(1/Kp);break;case"0":case"Home":B();break;case"ArrowLeft":k?u(pe=>({...pe,x:pe.x+Ol})):te=!1;break;case"ArrowRight":k?u(pe=>({...pe,x:pe.x-Ol})):te=!1;break;case"ArrowUp":k?u(pe=>({...pe,y:pe.y+Ol})):te=!1;break;case"ArrowDown":k?u(pe=>({...pe,y:pe.y-Ol})):te=!1;break;default:te=!1}te&&X.preventDefault()};return Rn("div",{className:"dsh3dv-root","data-dsh3d-texture":"","data-dsh3d-format":e},Rn("style",null,Ll),Rn("div",{ref:m,className:"dsh3dv-texture-stage",role:"region",tabIndex:0,"aria-label":s("textureKeyboardHelp"),"data-zoomed":k?"true":void 0,"data-dragging":p?"true":void 0,onPointerDown:H,onPointerMove:ne,onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,onDoubleClick:B,onKeyDown:Y},Rn("canvas",{ref:g,className:"dsh3dv-texture-image",role:"img","aria-label":`${e.toUpperCase()} texture`,style:{transform:`translate(${h.x}px, ${h.y}px) scale(${h.scale})`,visibility:F?"visible":"hidden"}})),Rn("div",{className:"dsh3dv-top"},Rn("span",{className:"dsh3dv-badge"},s(`${e}Badge`)),Rn("div",{className:"dsh3dv-texture-actions"},F?Rn("button",{type:"button",className:"dsh3dv-texture-fit",onClick:B,title:s("textureFit"),"aria-label":s("textureFit")},s("textureFit")):null,F?Rn("button",{type:"button",className:"dsh3dv-texture-fit","aria-pressed":f?"true":"false",onClick:()=>d(X=>{let te=!X;return _.current=te,te}),title:s("textureFlipY"),"aria-label":s("textureFlipY")},s("textureFlipY")):null,F?Rn("span",{className:"dsh3dv-badge"},`${a.width} \xD7 ${a.height} \xB7 ${a.bits}-bit \xB7 ${R}%`):null)),Rn(Il,{status:a.status,failure:a.failure,onRetry:()=>c(X=>X+1),t:s,loadingKey:"textureLoading",errorTitleKey:"textureErrorTitle"}))}function Bh(i){function e(t){return Rn(sS,{...t,format:i})}return e}var aS=Bh("tga"),oS=Bh("exr"),lS=Bh("hdr"),$p=Object.freeze({tga:aS,exr:oS,hdr:lS});var kh="dsh3dViewer",Qp="sidebar.right.tab.document";globalThis.__DSH3DV_THREE__={...ph,__esModule:!0};var ts=2*1024*1024,cS=4,em=64*1024*1024,ur=new Map,zh=0;function Gh(i){let e=ur.get(i);e!==void 0&&(ur.delete(i),zh-=e.data.byteLength)}function hS(i,e){let t=ur.get(i);return t===void 0?null:t.version!==e?(Gh(i),null):(ur.delete(i),ur.set(i,t),t.data)}function uS(i,e,t){if(!(e===void 0||t.byteLength>em)){for(Gh(i);zh+t.byteLength>em;){let n=ur.keys().next().value;if(n===void 0)break;Gh(n)}ur.set(i,{version:e,data:t}),zh+=t.byteLength}}var dS=["documentPreviews","slots","locale","remote","remote.workspaceFiles"];function mn(i){return{ok:!1,error:{code:i!==null&&typeof i=="object"&&"code"in i?i.code:void 0,message:i instanceof Error?i.message:String(i)}}}function Vh(i,e,t,n,r,s){return i.readBytes(e,t,{range:{offset:n,length:r}},s)}function fS(i,e){let t=0;for(let s of i)t+=s.byteLength;let n=new Uint8Array(t),r=0;for(let s of i)n.set(s,r),r+=s.byteLength;return{ok:!0,value:{data:n,version:e,bytes:t}}}function Hh(){return{ok:!1,error:{code:"workspace-file/changed",message:"The file changed while it was being read."}}}async function nm(i,e,t,n,r,s,a){if(!Number.isInteger(a)||a<0)return mn(new Error("The workspace reported an invalid file size."));let o=new Uint8Array(a),l=s?.version,c=null;if(s!==void 0){if(s.data.byteLength>o.length)return mn(new Error("The workspace returned an oversized first window."));o.set(s.data,0)}let h=0,u=async()=>{for(;;){if(c!==null)return;let f=h;if(h+=1,f>=n.length)return;let d=n[f],p;try{p=await Vh(i,e,t,d.offset,d.length,r)}catch(m){p=mn(m)}if(c!==null)return;if(p?.ok!==!0){c=p??mn(new Error("The workspace returned no byte window."));return}let v=p.value,g=v?.data;if(!(g instanceof Uint8Array)){c=mn(new Error("The workspace returned no byte window."));return}if(l===void 0)l=v.version;else if(v.version!==void 0&&v.version!==l){c=Hh();return}if(g.byteLength!==d.length){c=mn(new Error("The workspace returned a short byte window."));return}if(d.offset<0||d.offset+g.byteLength>o.length){c=mn(new Error("The workspace returned an out-of-range byte window."));return}o.set(g,d.offset)}};return await Promise.all(Array.from({length:Math.min(cS,n.length)},u)),c!==null?c:{ok:!0,value:{data:o,version:l,bytes:o.length}}}function pS(i,e,t,n,r){if(!Number.isFinite(n)||n<0)return Promise.resolve(mn(new Error("The workspace reported an invalid file size.")));let s=[];for(let a=0;a<n;a+=ts)s.push({offset:a,length:Math.min(ts,n-a)});return nm(i,e,t,s,r,void 0,n)}async function mS(i,e,t,n){let r=await Vh(i,e,t,0,ts,n);if(r?.ok!==!0)return r;let s=r.value,a=s?.data;if(!(a instanceof Uint8Array))return mn(new Error("The workspace returned no byte window."));if(s.eof)return{ok:!0,value:{data:a,version:s.version,bytes:a.byteLength}};if(typeof s.bytes=="number"&&s.bytes>=a.byteLength){let h=[];for(let u=a.byteLength;u<s.bytes;u+=ts)h.push({offset:u,length:Math.min(ts,s.bytes-u)});return nm(i,e,t,h,n,{data:a,version:s.version},s.bytes)}let o=[a],l=a.byteLength,c=s.version;for(;;){let h=await Vh(i,e,t,l,ts,n);if(h?.ok!==!0)return h;let u=h.value?.data;if(!(u instanceof Uint8Array))return mn(new Error("The workspace returned no byte window."));if(c===void 0)c=h.value.version;else if(h.value.version!==void 0&&h.value.version!==c)return Hh();if(o.push(u),h.value.eof)break;if(u.byteLength===0)return mn(new Error("The workspace returned an empty byte window."));l+=u.byteLength}return fS(o,c)}async function gS(i,e,t){let n=_h(e);if(n===void 0)return mn(new Error(`Not a session file address: ${String(e)}`));let r=i.remote?.workspaceFiles;if(r===void 0||typeof r.readBytes!="function")return mn(new Error("The workspaceFiles Remote is unavailable."));let s=`${n.sessionId}
${n.path}`,a;if(typeof r.stat=="function")try{let o=await r.stat(n.sessionId,n.path,t);o?.ok===!0?a=o.value:o!==null&&typeof o=="object"&&typeof o.bytes=="number"&&(a=o)}catch{}if(a?.version!==void 0){let o=hS(s,a.version);if(o!==null)return{ok:!0,value:{data:o,version:a.version,bytes:o.byteLength}}}try{let o=a!==void 0&&typeof a.bytes=="number"?await pS(r,n.sessionId,n.path,a.bytes,t):await mS(r,n.sessionId,n.path,t);return o?.ok===!0&&a?.version!==void 0&&o.value?.version!==void 0&&o.value.version!==a.version?Hh():(o?.ok===!0&&o.value?.version!==void 0&&uS(s,o.value.version,o.value.data),o)}catch(o){return mn(o)}}function tm(i,e,t,n){i.effect(()=>i.documentPreviews.register({id:t.id,extensions:[...t.extensions],binaryExtensions:[...t.extensions],priority:"extension",title:()=>e(t.titleKey),loading:"renderer",wrap:!1}),`dsh-3d-viewer: ${t.label} document preview`),i.effect(()=>i.slots.inject(Qp,()=>i.slots.register({name:Qp,key:t.id,locale:kh,inject:()=>({fallbackT:e,readWorkspaceFile:(r,s,a)=>Pf(i.remote,r,s,a),loadBytes:(r,s)=>gS(i,r,s)})},n)),`dsh-3d-viewer: ${t.label} viewer body`)}function _S(i){let e=i.locale.bind(kh);i.effect(()=>i.locale.register(kh,{zh:gp,en:es}),"dsh-3d-viewer: dictionaries");for(let t of gf)tm(i,e,t,Vp[t.format]);for(let t of yf)tm(i,e,t,$p[t.format])}
    return module.exports;
  },
});
