(function(A){
	var o=A.prototype, p='indexOf';
	if(((p in o) && Boolean(o[p]))===false){
	 o[p]=function(x,i){//searchElement,fromIndex
		var k,o,l,n,e=this,v=-1;
		if(e!=null){
			o=Object(e);
			l=o.length>>>0;
			if(l!==0){
				e=Math;
				if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};
				if(n<l){
					for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){
						if((k in o)&&(o[k]===e)){v=k;break;};
					};
				};
			};
		};
		return v;
	 };
	};
})(Array);




/*
//test, passed:
var m=[], o=['a', 'b', 'a', 'c', 'a', 'd'], element='a', idx=o.f(element);
while(idx != -1) {
  m.push(idx);
  idx = o.f(element, idx + 1);
}
console.log(m);// [0, 2, 4]
var m = [2, 9, 9];
console.log(m.f(2));     // 0
console.log(m.f(7));     // -1
console.log(m.f(9, 2));  // 2
console.log(m.f(2, -1)); // -1
console.log(m.f(2, -3)); // 0
*/
