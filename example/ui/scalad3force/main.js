'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 12,
  "assumingES6": true,
  "productionMode": true,
  "linkerVersion": "1.11.0",
  "fileLevelThis": this
});
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3)
  } else {
    return instance.getChars__I__I__AC__I__V(x0, x1, x2, x3)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c)
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0)
}
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  /*<skip>*/
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $p_Lexample_Example$__exampleData$lzycompute__T2($thiz) {
  if ((!$thiz.Lexample_Example$__f_bitmap$0)) {
    $thiz.Lexample_Example$__f_exampleData = $thiz.randomData__I__T2(100);
    $thiz.Lexample_Example$__f_bitmap$0 = true
  };
  return $thiz.Lexample_Example$__f_exampleData
}
function $p_Lexample_Example$__randomPos$1__Lexample_Vec2d($thiz) {
  var this$1 = $m_s_util_Random$();
  var $$x1 = this$1.s_util_Random__f_self.nextInt__I__I(100);
  var this$2 = $m_s_util_Random$();
  return new $c_Lexample_Vec2d((((-50) + $$x1) | 0), (((-50) + this$2.s_util_Random__f_self.nextInt__I__I(100)) | 0))
}
function $p_Lexample_Example$__makeTree$1__sci_List__sci_List__sci_Seq__sci_Seq($thiz, nodes, parents, res) {
  while (true) {
    var x1 = nodes;
    var x = $m_s_package$().s_package$__f_Nil;
    if (((x === null) ? (x1 === null) : x.equals__O__Z(x1))) {
      return res
    } else if ((x1 instanceof $c_sci_$colon$colon)) {
      var x3 = x1;
      var node = x3.sci_$colon$colon__f_head;
      var rest = x3.sci_$colon$colon__f_next;
      var $$x2 = $m_s_util_Random$();
      var $$x1 = parents;
      var this$1 = $m_sc_BuildFrom$();
      var parent = $$x2.shuffle__sc_IterableOnce__sc_BuildFrom__O($$x1, new $c_sc_BuildFromLowPriority2$$anon$11(this$1)).headOption__s_Option();
      var res$1 = res;
      if (parent.isEmpty__Z()) {
        var this$2 = $m_s_None$()
      } else {
        var arg1 = parent.get__O();
        var p = arg1;
        var elem = new $c_Lxyz_bluepitaya_d3force_forces_Link(p.Lxyz_bluepitaya_d3force_Node__f_id, node.Lxyz_bluepitaya_d3force_Node__f_id);
        var this$2 = new $c_s_Some(res$1.appended__O__O(elem))
      };
      var res$2 = res;
      var nextRes = (this$2.isEmpty__Z() ? res$2 : this$2.get__O());
      var this$3 = parents;
      var temp$parents = $f_sc_StrictOptimizedSeqOps__appended__O__O(this$3, node);
      nodes = rest;
      parents = temp$parents;
      res = nextRes
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
}
/** @constructor */
function $c_Lexample_Example$() {
  this.Lexample_Example$__f_exampleData = null;
  this.Lexample_Example$__f_bitmap$0 = false
}
$c_Lexample_Example$.prototype = new $h_O();
$c_Lexample_Example$.prototype.constructor = $c_Lexample_Example$;
/** @constructor */
function $h_Lexample_Example$() {
  /*<skip>*/
}
$h_Lexample_Example$.prototype = $c_Lexample_Example$.prototype;
$c_Lexample_Example$.prototype.exampleData__T2 = (function() {
  return ((!this.Lexample_Example$__f_bitmap$0) ? $p_Lexample_Example$__exampleData$lzycompute__T2(this) : this.Lexample_Example$__f_exampleData)
});
$c_Lexample_Example$.prototype.getData__Lexample_JsData = (function() {
  var $$x3 = $m_sjs_js_JSConverters$JSRichIterableOnce$();
  var col = this.exampleData__T2()._1__O().map__F1__O(new $c_sjsr_AnonFunction1(((v$2) => {
    var v = v$2;
    return $m_Lexample_Example$().toJsNode__Lxyz_bluepitaya_d3force_Node__Lexample_JsNode(v)
  })));
  var $$x2 = $$x3.toJSArray$extension__sc_IterableOnce__sjs_js_Array(col);
  var $$x1 = $m_sjs_js_JSConverters$JSRichIterableOnce$();
  var col$1 = this.exampleData__T2()._2__O().map__F1__O(new $c_sjsr_AnonFunction1(((v$3$2) => {
    var v$3 = v$3$2;
    return new $c_Lexample_JsLink(v$3.Lxyz_bluepitaya_d3force_forces_Link__f_from, v$3.Lxyz_bluepitaya_d3force_forces_Link__f_to)
  })));
  return new $c_Lexample_JsData($$x2, $$x1.toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$1))
});
$c_Lexample_Example$.prototype.mySimulation__sjs_js_Array = (function() {
  var $$x3 = $m_sjs_js_JSConverters$JSRichIterableOnce$();
  var nodes = this.exampleData__T2()._1__O();
  var $$x2 = $m_Lxyz_bluepitaya_d3force_SimulationSettings$().default__Lxyz_bluepitaya_d3force_SimulationSettings();
  var this$3 = $m_s_Predef$().s_Predef$__f_Map;
  var elems = $m_sci_Nil$();
  var $$x1 = new $c_Lxyz_bluepitaya_d3force_SimulationState(nodes, $$x2, this$3.from__sc_IterableOnce__sci_Map(elems), 1.0).velocityDecay__D__Lxyz_bluepitaya_d3force_SimulationState(0.1);
  var links = this.exampleData__T2()._2__O();
  var this$10 = $$x1.force__Lxyz_bluepitaya_d3force_ForceState__Lxyz_bluepitaya_d3force_SimulationState(new $c_Lxyz_bluepitaya_d3force_LinkForceState(links, $m_Lxyz_bluepitaya_d3force_LinkForceState$().apply$default$2__F1(), $m_s_None$()).distance__D__Lxyz_bluepitaya_d3force_LinkForceState(80.0)).force__Lxyz_bluepitaya_d3force_ForceState__Lxyz_bluepitaya_d3force_SimulationState(new $c_Lxyz_bluepitaya_d3force_ManyBodyForceState($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$().Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__f_defaultOptions).theta__D__Lxyz_bluepitaya_d3force_ManyBodyForceState(0.99).strength__D__Lxyz_bluepitaya_d3force_ManyBodyForceState((-1000.0))).force__Lxyz_bluepitaya_d3force_ForceState__Lxyz_bluepitaya_d3force_SimulationState(new $c_Lxyz_bluepitaya_d3force_XForceState($m_Lxyz_bluepitaya_d3force_XForceState$().apply$default$1__F1(), $m_Lxyz_bluepitaya_d3force_XForceState$().apply$default$2__F1()).strength__D__Lxyz_bluepitaya_d3force_XForceState(0.1)).force__Lxyz_bluepitaya_d3force_ForceState__Lxyz_bluepitaya_d3force_SimulationState(new $c_Lxyz_bluepitaya_d3force_YForceState($m_Lxyz_bluepitaya_d3force_YForceState$().apply$default$1__F1(), $m_Lxyz_bluepitaya_d3force_YForceState$().apply$default$2__F1()).strength__D__Lxyz_bluepitaya_d3force_YForceState(0.1));
  var col = $m_Lxyz_bluepitaya_d3force_Simulation$().simulate__sci_Seq__sci_Seq__Lxyz_bluepitaya_d3force_SimulationSettings__Lxyz_bluepitaya_d3force_IterationState(this$10.Lxyz_bluepitaya_d3force_SimulationState__f__nodes, $p_Lxyz_bluepitaya_d3force_SimulationState__forcesSeq__sci_Seq(this$10), this$10.Lxyz_bluepitaya_d3force_SimulationState__f_settings).Lxyz_bluepitaya_d3force_IterationState__f_nodes.map__F1__O(new $c_sjsr_AnonFunction1(((v$2) => {
    var v = v$2;
    return $m_Lexample_Example$().toJsNode__Lxyz_bluepitaya_d3force_Node__Lexample_JsNode(v)
  })));
  return $$x3.toJSArray$extension__sc_IterableOnce__sjs_js_Array(col)
});
$c_Lexample_Example$.prototype.toJsNode__Lxyz_bluepitaya_d3force_Node__Lexample_JsNode = (function(v) {
  var $$x2 = v.Lxyz_bluepitaya_d3force_Node__f_id;
  var v$1 = v.Lxyz_bluepitaya_d3force_Node__f_pos;
  var $$x1 = new $c_Lexample_Vec2d($doubleToInt(v$1.Lxyz_bluepitaya_d3force_Vec2f__f_x), $doubleToInt(v$1.Lxyz_bluepitaya_d3force_Vec2f__f_y));
  var v$2 = v.Lxyz_bluepitaya_d3force_Node__f_velocity;
  return new $c_Lexample_JsNode($$x2, $$x1, new $c_Lexample_Vec2d($doubleToInt(v$2.Lxyz_bluepitaya_d3force_Vec2f__f_x), $doubleToInt(v$2.Lxyz_bluepitaya_d3force_Vec2f__f_y)))
});
$c_Lexample_Example$.prototype.randomData__I__T2 = (function(n) {
  var isEmpty = (n <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (n >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ n) > (-1)) : (hi > 0)) ? (-1) : n)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, n, 1, false)
  };
  var b = $m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
  while (it.sci_RangeIterator__f__hasNext) {
    var arg1 = it.next__I();
    var v = $p_Lexample_Example$__randomPos$1__Lexample_Vec2d(this);
    var elem = new $c_Lxyz_bluepitaya_d3force_Node(("" + arg1), new $c_Lxyz_bluepitaya_d3force_Vec2f(v.Lexample_Vec2d__f_x, v.Lexample_Vec2d__f_y), $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, false);
    b.addOne__O__scm_Growable(elem)
  };
  var this$9 = b.result__O().map__F1__O(new $c_sjsr_AnonFunction1(((n$2$2) => {
    var n$2 = n$2$2;
    if ((n$2.Lxyz_bluepitaya_d3force_Node__f_id === "0")) {
      var x$2 = $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero;
      var x$3 = n$2.Lxyz_bluepitaya_d3force_Node__f_id;
      var x$4 = n$2.Lxyz_bluepitaya_d3force_Node__f_velocity;
      var x = new $c_Lxyz_bluepitaya_d3force_Node(x$3, x$2, x$4, true)
    } else {
      var x = n$2
    };
    return x
  })));
  var nodes = this$9;
  $m_sci_List$();
  var $$x2 = $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(nodes);
  $m_s_package$();
  var elems = $m_sci_Nil$();
  var $$x1 = $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  $m_s_package$();
  var elems$1 = $m_sci_Nil$();
  var links = $p_Lexample_Example$__makeTree$1__sci_List__sci_List__sci_Seq__sci_Seq(this, $$x2, $$x1, $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1));
  return $ct_T2__O__O__(new $c_T2(), nodes, links)
});
var $d_Lexample_Example$ = new $TypeData().initClass({
  Lexample_Example$: 0
}, false, "example.Example$", {
  Lexample_Example$: 1,
  O: 1
});
$c_Lexample_Example$.prototype.$classData = $d_Lexample_Example$;
var $n_Lexample_Example$;
function $m_Lexample_Example$() {
  if ((!$n_Lexample_Example$)) {
    $n_Lexample_Example$ = new $c_Lexample_Example$()
  };
  return $n_Lexample_Example$
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return (!(!this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data)))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return (!(!this.jl_Class__f_data.isInterface))
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return (!(!this.jl_Class__f_data.isArrayClass))
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return (!(!this.jl_Class__f_data.isPrimitive))
});
$c_jl_Class.prototype.getName__T = (function() {
  return this.jl_Class__f_data.name
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return this.jl_Class__f_data.getComponentType()
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
});
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ((new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0] | 0) === 1);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ((this.jl_FloatingPointBits$__f_int32Array[0] | 0) ^ (this.jl_FloatingPointBits$__f_int32Array[1] | 0))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $linkingInfo.linkerVersion;
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return ((!(!$m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key))) ? dict[key] : default$1)
  } else {
    return this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_jl_reflect_Array$() {
  /*<skip>*/
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
  /*<skip>*/
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return componentType.newArrayOfThisClass__O__O([length])
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = array;
    return x2.u.length
  } else if ((array instanceof $ac_Z)) {
    var x3 = array;
    return x3.u.length
  } else if ((array instanceof $ac_C)) {
    var x4 = array;
    return x4.u.length
  } else if ((array instanceof $ac_B)) {
    var x5 = array;
    return x5.u.length
  } else if ((array instanceof $ac_S)) {
    var x6 = array;
    return x6.u.length
  } else if ((array instanceof $ac_I)) {
    var x7 = array;
    return x7.u.length
  } else if ((array instanceof $ac_J)) {
    var x8 = array;
    return x8.u.length
  } else if ((array instanceof $ac_F)) {
    var x9 = array;
    return x9.u.length
  } else if ((array instanceof $ac_D)) {
    var x10 = array;
    return x10.u.length
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.u[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var this$1 = a.u[i$1];
    var i$2 = i;
    var that = b.u[i$2];
    if ((!(this$1 === that))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  var b = original.u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var clazz = $objectGetClass(original);
  var ret = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength);
  original.copyTo(0, ret, 0, copyLength);
  return ret
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
  };
  var len = original.u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var clazz = $objectGetClass(original);
  var ret = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength);
  original.copyTo(from, ret, 0, copyLength);
  return ret
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = that;
    return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = that;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + (+(lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2)
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((x | 0.0) | 0);
      return ((rDouble | 0.0) | 0)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0)
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((x | 0.0) | 0);
      return ((rDouble | 0.0) | 0)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0)
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = ((x | 0.0) | 0);
      var x$1 = (x / 4.294967296E9);
      var hi$7 = ((x$1 | 0.0) | 0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = ((rem_mod_bDouble | 0.0) | 0);
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = ((x$2 | 0.0) | 0)
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0.0)));
    var this$3 = remLo;
    var remStr = ("" + this$3);
    var start = remStr.length;
    return ((("" + quot) + "000000000".substring(start)) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * (+(x >>> 0.0))) + (+(x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + (+(lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * (+(x >>> 0.0))) + (+(compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = ((value | 0.0) | 0);
    var x = (value / 4.294967296E9);
    var rawHi = ((x | 0.0) | 0);
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.s_Array$EmptyArrays$__f_emptyIntArray = null;
  this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
  $n_s_Array$EmptyArrays$ = this;
  this.s_Array$EmptyArrays$__f_emptyIntArray = new $ac_I(0);
  this.s_Array$EmptyArrays$__f_emptyObjectArray = new $ac_O(0)
}
$c_s_Array$EmptyArrays$.prototype = new $h_O();
$c_s_Array$EmptyArrays$.prototype.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
  /*<skip>*/
}
$h_s_Array$EmptyArrays$.prototype = $c_s_Array$EmptyArrays$.prototype;
var $d_s_Array$EmptyArrays$ = new $TypeData().initClass({
  s_Array$EmptyArrays$: 0
}, false, "scala.Array$EmptyArrays$", {
  s_Array$EmptyArrays$: 1,
  O: 1
});
$c_s_Array$EmptyArrays$.prototype.$classData = $d_s_Array$EmptyArrays$;
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$()
  };
  return $n_s_Array$EmptyArrays$
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_sc_Factory$() {
  this.sc_Factory$__f_stringFactory = null;
  $n_sc_Factory$ = this;
  this.sc_Factory$__f_stringFactory = new $c_sc_Factory$StringFactory()
}
$c_sc_Factory$.prototype = new $h_O();
$c_sc_Factory$.prototype.constructor = $c_sc_Factory$;
/** @constructor */
function $h_sc_Factory$() {
  /*<skip>*/
}
$h_sc_Factory$.prototype = $c_sc_Factory$.prototype;
var $d_sc_Factory$ = new $TypeData().initClass({
  sc_Factory$: 0
}, false, "scala.collection.Factory$", {
  sc_Factory$: 1,
  O: 1
});
$c_sc_Factory$.prototype.$classData = $d_sc_Factory$;
var $n_sc_Factory$;
function $m_sc_Factory$() {
  if ((!$n_sc_Factory$)) {
    $n_sc_Factory$ = new $c_sc_Factory$()
  };
  return $n_sc_Factory$
}
/** @constructor */
function $c_sc_Hashing$() {
  /*<skip>*/
}
$c_sc_Hashing$.prototype = new $h_O();
$c_sc_Hashing$.prototype.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
  /*<skip>*/
}
$h_sc_Hashing$.prototype = $c_sc_Hashing$.prototype;
$c_sc_Hashing$.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
var $d_sc_Hashing$ = new $TypeData().initClass({
  sc_Hashing$: 0
}, false, "scala.collection.Hashing$", {
  sc_Hashing$: 1,
  O: 1
});
$c_sc_Hashing$.prototype.$classData = $d_sc_Hashing$;
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$()
  };
  return $n_sc_Hashing$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.iterator__sc_Iterator();
  while ((res && it.hasNext__Z())) {
    res = (!(!p.apply__O__O(it.next__O())))
  };
  return res
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  var result = z;
  var it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    result = op.apply__O__O__O(result, it.next__O())
  };
  return result
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  var it = $thiz.iterator__sc_Iterator();
  if ((!it.hasNext__Z())) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft")
  };
  var first = true;
  var acc = null;
  while (it.hasNext__Z()) {
    var x = it.next__O();
    if (first) {
      acc = x;
      first = false
    } else {
      acc = op.apply__O__O__O(acc, x)
    }
  };
  return acc
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  return (!$thiz.iterator__sc_Iterator().hasNext__Z())
}
function $f_sc_IterableOnceOps__size__I($thiz) {
  if (($thiz.knownSize__I() >= 0)) {
    return $thiz.knownSize__I()
  } else {
    var it = $thiz.iterator__sc_Iterator();
    var len = 0;
    while (it.hasNext__Z()) {
      len = ((1 + len) | 0);
      it.next__O()
    };
    return len
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $thiz.iterator__sc_Iterator();
  var i = start;
  var y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__min__s_math_Ordering__O($thiz, ord) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.min")
  };
  return $thiz.reduceLeft__F2__O(new $c_sjsr_AnonFunction2(((x$2, y$2) => ord.min__O__O__O(x$2, y$2))))
}
function $f_sc_IterableOnceOps__minOption__s_math_Ordering__s_Option($thiz, ord) {
  return ($thiz.isEmpty__Z() ? $m_s_None$() : new $c_s_Some($thiz.min__s_math_Ordering__O(ord)))
}
function $f_sc_IterableOnceOps__max__s_math_Ordering__O($thiz, ord) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.max")
  };
  return $thiz.reduceLeft__F2__O(new $c_sjsr_AnonFunction2(((x$2, y$2) => ord.max__O__O__O(x$2, y$2))))
}
function $f_sc_IterableOnceOps__maxOption__s_math_Ordering__s_Option($thiz, ord) {
  return ($thiz.isEmpty__Z() ? $m_s_None$() : new $c_s_Some($thiz.max__s_math_Ordering__O(ord)))
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    var this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.scm_StringBuilder__f_underlying;
  if ((start.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $thiz.iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    var obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if ((end.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)))
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)))
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
  /*<skip>*/
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return this.sc_Iterator$ConcatIteratorCell__f_head.apply__O().iterator__sc_Iterator()
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass({
  sc_Iterator$ConcatIteratorCell: 0
}, false, "scala.collection.Iterator$ConcatIteratorCell", {
  sc_Iterator$ConcatIteratorCell: 1,
  O: 1
});
$c_sc_Iterator$ConcatIteratorCell.prototype.$classData = $d_sc_Iterator$ConcatIteratorCell;
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = new $ac_I(($m_sci_Node$().sci_Node$__f_MaxDepth << 1));
    $thiz.sci_ChampBaseIterator__f_nodes = new ($d_sci_Node.getArrayOf().constr)($m_sci_Node$().sci_Node$__f_MaxDepth)
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = node.payloadArity__I()
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $thiz.sci_ChampBaseIterator__f_nodes.u[$thiz.sci_ChampBaseIterator__f_currentStackLevel] = node;
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[cursorIndex] = 0;
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[lengthIndex] = node.nodeArity__I()
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0)
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    var nodeCursor = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[cursorIndex];
    var nodeLength = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[lengthIndex];
    if ((nodeCursor < nodeLength)) {
      var ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      ev$1.u[cursorIndex] = ((1 + ev$1.u[cursorIndex]) | 0);
      var nextNode = $thiz.sci_ChampBaseIterator__f_nodes.u[$thiz.sci_ChampBaseIterator__f_currentStackLevel].getNode__I__sci_Node(nodeCursor);
      if (nextNode.hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode)
      };
      if (nextNode.hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz)
    }
  };
  return false
}
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode)
  };
  if (rootNode.hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode)
  };
  return $thiz
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null
}
$c_sci_ChampBaseIterator.prototype = new $h_O();
$c_sci_ChampBaseIterator.prototype.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
  /*<skip>*/
}
$h_sci_ChampBaseIterator.prototype = $c_sci_ChampBaseIterator.prototype;
$c_sci_ChampBaseIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this))
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + node.payloadArity__I()) | 0)
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel] = node;
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel] = (((-1) + node.nodeArity__I()) | 0)
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0)
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
    var nodeCursor = $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel];
    $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      var nextNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel].getNode__I__sci_Node(nodeCursor);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode)
    } else {
      var currNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.u[$thiz.sci_ChampBaseReverseIterator__f_currentStackLevel];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hasPayload__Z()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true
      }
    }
  };
  return false
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = new $ac_I(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack = new ($d_sci_Node.getArrayOf().constr)(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
  return $thiz
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
  this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
  this.sci_ChampBaseReverseIterator__f_nodeStack = null
}
$c_sci_ChampBaseReverseIterator.prototype = new $h_O();
$c_sci_ChampBaseReverseIterator.prototype.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
  /*<skip>*/
}
$h_sci_ChampBaseReverseIterator.prototype = $c_sci_ChampBaseReverseIterator.prototype;
$c_sci_ChampBaseReverseIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this))
});
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
}
$c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $c_sci_LazyList$LazyBuilder$DeferredState.prototype;
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.eval__sci_LazyList$State = (function() {
  var state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized")
  };
  return state.apply__O()
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.init__F0__V = (function(state) {
  if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
    throw new $c_jl_IllegalStateException("already initialized")
  };
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $c_sci_MapNode$() {
  this.sci_MapNode$__f_EmptyMapNode = null;
  $n_sci_MapNode$ = this;
  this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), new $ac_O(0)), ($m_s_reflect_ManifestFactory$IntManifest$(), new $ac_I(0)), 0, 0)
}
$c_sci_MapNode$.prototype = new $h_O();
$c_sci_MapNode$.prototype.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
  /*<skip>*/
}
$h_sci_MapNode$.prototype = $c_sci_MapNode$.prototype;
var $d_sci_MapNode$ = new $TypeData().initClass({
  sci_MapNode$: 0
}, false, "scala.collection.immutable.MapNode$", {
  sci_MapNode$: 1,
  O: 1
});
$c_sci_MapNode$.prototype.$classData = $d_sci_MapNode$;
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$()
  };
  return $n_sci_MapNode$
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(as)) | 0)))
}
/** @constructor */
function $c_sci_Node() {
  /*<skip>*/
}
$c_sci_Node.prototype = new $h_O();
$c_sci_Node.prototype.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
  /*<skip>*/
}
$h_sci_Node.prototype = $c_sci_Node.prototype;
$c_sci_Node.prototype.removeElement__AI__I__AI = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
  };
  if ((ix > (((-1) + as.u.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
  };
  var result = new $ac_I((((-1) + as.u.length) | 0));
  as.copyTo(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.u.length - ix) | 0)) | 0);
  as.copyTo(srcPos, result, ix, length);
  return result
});
$c_sci_Node.prototype.insertElement__AI__I__I__AI = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
  };
  if ((ix > as.u.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
  };
  var result = new $ac_I(((1 + as.u.length) | 0));
  as.copyTo(0, result, 0, ix);
  result.u[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.u.length - ix) | 0);
  as.copyTo(ix, result, destPos, length);
  return result
});
var $d_sci_Node = new $TypeData().initClass({
  sci_Node: 0
}, false, "scala.collection.immutable.Node", {
  sci_Node: 1,
  O: 1
});
$c_sci_Node.prototype.$classData = $d_sci_Node;
/** @constructor */
function $c_sci_Node$() {
  this.sci_Node$__f_MaxDepth = 0;
  $n_sci_Node$ = this;
  this.sci_Node$__f_MaxDepth = $doubleToInt((+Math.ceil(6.4)))
}
$c_sci_Node$.prototype = new $h_O();
$c_sci_Node$.prototype.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
  /*<skip>*/
}
$h_sci_Node$.prototype = $c_sci_Node$.prototype;
$c_sci_Node$.prototype.maskFrom__I__I__I = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0))
});
$c_sci_Node$.prototype.bitposFrom__I__I = (function(mask) {
  return (1 << mask)
});
$c_sci_Node$.prototype.indexFrom__I__I__I = (function(bitmap, bitpos) {
  var i = (bitmap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i)
});
$c_sci_Node$.prototype.indexFrom__I__I__I__I = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos))
});
var $d_sci_Node$ = new $TypeData().initClass({
  sci_Node$: 0
}, false, "scala.collection.immutable.Node$", {
  sci_Node$: 1,
  O: 1
});
$c_sci_Node$.prototype.$classData = $d_sci_Node$;
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$()
  };
  return $n_sci_Node$
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyAppend1__AO__O__AO = (function(a, elem) {
  var alen = a.u.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.copyTo(0, ac, 0, alen);
  ac.u[alen] = elem;
  return ac
});
$c_sci_VectorStatics$.prototype.copyAppend__AO__O__AO = (function(a, elem) {
  var newLength = ((1 + a.u.length) | 0);
  var ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
  ac.u[(((-1) + ac.u.length) | 0)] = elem;
  return ac
});
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var componentType = $objectGetClass(a).getComponentType__jl_Class();
  var length = ((1 + a.u.length) | 0);
  var ac = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length);
  var length$1 = a.u.length;
  a.copyTo(0, ac, 1, length$1);
  ac.u[0] = elem;
  return ac
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = a.u.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.apply__O__O(a.u[i]);
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, a.u[i], f);
      i = ((1 + i) | 0)
    }
  }
});
$c_sci_VectorStatics$.prototype.mapElems1__AO__F1__AO = (function(a, f) {
  var i = 0;
  while ((i < a.u.length)) {
    var v1 = a.u[i];
    var v2 = f.apply__O__O(v1);
    if ((!Object.is(v1, v2))) {
      return this.mapElems1Rest__AO__F1__I__O__AO(a, f, i, v2)
    };
    i = ((1 + i) | 0)
  };
  return a
});
$c_sci_VectorStatics$.prototype.mapElems1Rest__AO__F1__I__O__AO = (function(a, f, at, v2) {
  var ac = new $ac_O(a.u.length);
  if ((at > 0)) {
    a.copyTo(0, ac, 0, at)
  };
  ac.u[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.u.length)) {
    ac.u[i] = f.apply__O__O(a.u[i]);
    i = ((1 + i) | 0)
  };
  return ac
});
$c_sci_VectorStatics$.prototype.mapElems__I__AO__F1__AO = (function(n, a, f) {
  if ((n === 1)) {
    return this.mapElems1__AO__F1__AO(a, f)
  } else {
    var i = 0;
    while ((i < a.u.length)) {
      var v1 = a.u[i];
      var v2 = this.mapElems__I__AO__F1__AO((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.mapElemsRest__I__AO__F1__I__O__AO(n, a, f, i, v2)
      };
      i = ((1 + i) | 0)
    };
    return a
  }
});
$c_sci_VectorStatics$.prototype.mapElemsRest__I__AO__F1__I__O__AO = (function(n, a, f, at, v2) {
  var componentType = $objectGetClass(a).getComponentType__jl_Class();
  var length = a.u.length;
  var ac = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length);
  if ((at > 0)) {
    a.copyTo(0, ac, 0, at)
  };
  ac.u[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.u.length)) {
    ac.u[i] = this.mapElems__I__AO__F1__AO((((-1) + n) | 0), a.u[i], f);
    i = ((1 + i) | 0)
  };
  return ac
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_scm_HashMap$Node(_key, _hash, _value, _next) {
  this.scm_HashMap$Node__f__key = null;
  this.scm_HashMap$Node__f__hash = 0;
  this.scm_HashMap$Node__f__value = null;
  this.scm_HashMap$Node__f__next = null;
  this.scm_HashMap$Node__f__key = _key;
  this.scm_HashMap$Node__f__hash = _hash;
  this.scm_HashMap$Node__f__value = _value;
  this.scm_HashMap$Node__f__next = _next
}
$c_scm_HashMap$Node.prototype = new $h_O();
$c_scm_HashMap$Node.prototype.constructor = $c_scm_HashMap$Node;
/** @constructor */
function $h_scm_HashMap$Node() {
  /*<skip>*/
}
$h_scm_HashMap$Node.prototype = $c_scm_HashMap$Node.prototype;
$c_scm_HashMap$Node.prototype.findNode__O__I__scm_HashMap$Node = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.scm_HashMap$Node__f__hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(k, _$this.scm_HashMap$Node__f__key))) {
      return _$this
    } else if (((_$this.scm_HashMap$Node__f__next === null) || (_$this.scm_HashMap$Node__f__hash > h))) {
      return null
    } else {
      _$this = _$this.scm_HashMap$Node__f__next
    }
  }
});
$c_scm_HashMap$Node.prototype.foreachEntry__F2__V = (function(f) {
  var _$this = this;
  while (true) {
    f.apply__O__O__O(_$this.scm_HashMap$Node__f__key, _$this.scm_HashMap$Node__f__value);
    if ((_$this.scm_HashMap$Node__f__next !== null)) {
      _$this = _$this.scm_HashMap$Node__f__next;
      continue
    };
    break
  }
});
$c_scm_HashMap$Node.prototype.toString__T = (function() {
  return ((((((("Node(" + this.scm_HashMap$Node__f__key) + ", ") + this.scm_HashMap$Node__f__value) + ", ") + this.scm_HashMap$Node__f__hash) + ") -> ") + this.scm_HashMap$Node__f__next)
});
function $isArrayOf_scm_HashMap$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap$Node)))
}
var $d_scm_HashMap$Node = new $TypeData().initClass({
  scm_HashMap$Node: 0
}, false, "scala.collection.mutable.HashMap$Node", {
  scm_HashMap$Node: 1,
  O: 1
});
$c_scm_HashMap$Node.prototype.$classData = $d_scm_HashMap$Node;
/** @constructor */
function $c_scm_MutationTracker$() {
  /*<skip>*/
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
  /*<skip>*/
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message)
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass({
  scm_MutationTracker$: 0
}, false, "scala.collection.mutable.MutationTracker$", {
  scm_MutationTracker$: 1,
  O: 1
});
$c_scm_MutationTracker$.prototype.$classData = $d_scm_MutationTracker$;
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$()
  };
  return $n_scm_MutationTracker$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_Seq = null;
  this.s_package$__f_List = null;
  this.s_package$__f_Nil = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  this.s_package$__f_Seq = $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  this.s_package$__f_List = $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  $m_sci_Vector$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = x;
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = x;
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = y;
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = y;
    if (((typeof xn) === "number")) {
      var x2$1 = (+xn);
      var this$1 = $uC(x3);
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC(x3);
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      var x2$2 = (+yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = yn;
      return x4.equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = yn;
      return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = y;
    var this$1 = $uC(xc);
    var this$2 = $uC(x2);
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = y;
    if (((typeof x3) === "number")) {
      var x2$1 = (+x3);
      var this$3 = $uC(xc);
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC(xc);
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = xs;
    return x2.u[idx]
  } else if ((xs instanceof $ac_I)) {
    var x3 = xs;
    return x3.u[idx]
  } else if ((xs instanceof $ac_D)) {
    var x4 = xs;
    return x4.u[idx]
  } else if ((xs instanceof $ac_J)) {
    var x5 = xs;
    return x5.u[idx]
  } else if ((xs instanceof $ac_F)) {
    var x6 = xs;
    return x6.u[idx]
  } else if ((xs instanceof $ac_C)) {
    var x7 = xs;
    return $bC(x7.u[idx])
  } else if ((xs instanceof $ac_B)) {
    var x8 = xs;
    return x8.u[idx]
  } else if ((xs instanceof $ac_S)) {
    var x9 = xs;
    return x9.u[idx]
  } else if ((xs instanceof $ac_Z)) {
    var x10 = xs;
    return x10.u[idx]
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = xs;
    x2.u[idx] = value
  } else if ((xs instanceof $ac_I)) {
    var x3 = xs;
    x3.u[idx] = (value | 0)
  } else if ((xs instanceof $ac_D)) {
    var x4 = xs;
    x4.u[idx] = (+value)
  } else if ((xs instanceof $ac_J)) {
    var x5 = xs;
    x5.u[idx] = $uJ(value)
  } else if ((xs instanceof $ac_F)) {
    var x6 = xs;
    x6.u[idx] = Math.fround(value)
  } else if ((xs instanceof $ac_C)) {
    var x7 = xs;
    x7.u[idx] = $uC(value)
  } else if ((xs instanceof $ac_B)) {
    var x8 = xs;
    x8.u[idx] = (value | 0)
  } else if ((xs instanceof $ac_S)) {
    var x9 = xs;
    x9.u[idx] = (value | 0)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = xs;
    x10.u[idx] = (!(!value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_length__O__I = (function(xs) {
  return $m_jl_reflect_Array$().getLength__O__I(xs)
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length))
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = (+x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_JSConverters$JSRichIterableOnce$() {
  /*<skip>*/
}
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype = new $h_O();
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.constructor = $c_sjs_js_JSConverters$JSRichIterableOnce$;
/** @constructor */
function $h_sjs_js_JSConverters$JSRichIterableOnce$() {
  /*<skip>*/
}
$h_sjs_js_JSConverters$JSRichIterableOnce$.prototype = $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype;
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.toJSArray$extension__sc_IterableOnce__sjs_js_Array = (function(this$) {
  if ((this$ instanceof $c_sjs_js_WrappedArray)) {
    var x2 = this$;
    return x2.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array
  } else {
    var result = [];
    var this$2 = this$.iterator__sc_Iterator();
    while (this$2.hasNext__Z()) {
      var arg1 = this$2.next__O();
      (result.push(arg1) | 0)
    };
    return result
  }
});
var $d_sjs_js_JSConverters$JSRichIterableOnce$ = new $TypeData().initClass({
  sjs_js_JSConverters$JSRichIterableOnce$: 0
}, false, "scala.scalajs.js.JSConverters$JSRichIterableOnce$", {
  sjs_js_JSConverters$JSRichIterableOnce$: 1,
  O: 1
});
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.$classData = $d_sjs_js_JSConverters$JSRichIterableOnce$;
var $n_sjs_js_JSConverters$JSRichIterableOnce$;
function $m_sjs_js_JSConverters$JSRichIterableOnce$() {
  if ((!$n_sjs_js_JSConverters$JSRichIterableOnce$)) {
    $n_sjs_js_JSConverters$JSRichIterableOnce$ = new $c_sjs_js_JSConverters$JSRichIterableOnce$()
  };
  return $n_sjs_js_JSConverters$JSRichIterableOnce$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.tuple2Hash__I__I__I__I = (function(x, y, seed) {
  var h = seed;
  h = this.mix__I__I__I(h, $f_T__hashCode__I("Tuple2"));
  h = this.mix__I__I__I(h, x);
  h = this.mix__I__I__I(h, y);
  return this.finalizeHash__I__I__I(h, 2)
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
    };
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = x.productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.iterator__sc_Iterator();
  while (iterator.hasNext__Z()) {
    var x = iterator.next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = xs.iterator__sc_Iterator();
  var h = seed;
  if ((!it.hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = it.next__O();
  if ((!it.hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = it.next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = it.next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while (it.hasNext__Z()) {
        var $$x1 = h;
        var x$1 = it.next__O();
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = a.length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = a.apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = a.apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = a.apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = a.apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = a.apply__I__O(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var tail = elems.tail__O();
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3
        };
        break
      }
    };
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
function $is_Lxyz_bluepitaya_d3force_ForceState(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lxyz_bluepitaya_d3force_ForceState)))
}
function $isArrayOf_Lxyz_bluepitaya_d3force_ForceState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_ForceState)))
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Lcg$() {
  this.Lxyz_bluepitaya_d3force_Lcg$__f_a = $L0;
  this.Lxyz_bluepitaya_d3force_Lcg$__f_c = $L0;
  this.Lxyz_bluepitaya_d3force_Lcg$__f_m = $L0;
  this.Lxyz_bluepitaya_d3force_Lcg$__f_s = $L0;
  this.Lxyz_bluepitaya_d3force_Lcg$__f_a = new $c_RTLong(1664525, 0);
  this.Lxyz_bluepitaya_d3force_Lcg$__f_c = new $c_RTLong(1013904223, 0);
  this.Lxyz_bluepitaya_d3force_Lcg$__f_m = new $c_RTLong(0, 1);
  this.Lxyz_bluepitaya_d3force_Lcg$__f_s = new $c_RTLong(1, 0)
}
$c_Lxyz_bluepitaya_d3force_Lcg$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Lcg$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Lcg$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Lcg$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Lcg$.prototype = $c_Lxyz_bluepitaya_d3force_Lcg$.prototype;
$c_Lxyz_bluepitaya_d3force_Lcg$.prototype.next__D = (function() {
  var this$1 = this.Lxyz_bluepitaya_d3force_Lcg$__f_a;
  var b = this.Lxyz_bluepitaya_d3force_Lcg$__f_s;
  var alo = this$1.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(this$1.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  var b$1 = this.Lxyz_bluepitaya_d3force_Lcg$__f_c;
  var bhi = b$1.RTLong__f_hi;
  var lo$1 = ((lo + b$1.RTLong__f_lo) | 0);
  var hi$1 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi + bhi) | 0)) | 0) : ((hi + bhi) | 0));
  var b$2 = this.Lxyz_bluepitaya_d3force_Lcg$__f_m;
  var this$3 = $m_RTLong$();
  var lo$2 = this$3.remainderImpl__I__I__I__I__I(lo$1, hi$1, b$2.RTLong__f_lo, b$2.RTLong__f_hi);
  var hi$2 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  this.Lxyz_bluepitaya_d3force_Lcg$__f_s = new $c_RTLong(lo$2, hi$2);
  var this$4 = this.Lxyz_bluepitaya_d3force_Lcg$__f_s;
  var $$x1 = $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this$4.RTLong__f_lo, this$4.RTLong__f_hi);
  var this$5 = this.Lxyz_bluepitaya_d3force_Lcg$__f_m;
  var x = ($$x1 / $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this$5.RTLong__f_lo, this$5.RTLong__f_hi));
  return x
});
$c_Lxyz_bluepitaya_d3force_Lcg$.prototype.jiggle__D = (function() {
  return (1.0E-6 * (this.next__D() - 0.5))
});
var $d_Lxyz_bluepitaya_d3force_Lcg$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Lcg$: 0
}, false, "xyz.bluepitaya.d3force.Lcg$", {
  Lxyz_bluepitaya_d3force_Lcg$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_Lcg$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Lcg$;
var $n_Lxyz_bluepitaya_d3force_Lcg$;
function $m_Lxyz_bluepitaya_d3force_Lcg$() {
  if ((!$n_Lxyz_bluepitaya_d3force_Lcg$)) {
    $n_Lxyz_bluepitaya_d3force_Lcg$ = new $c_Lxyz_bluepitaya_d3force_Lcg$()
  };
  return $n_Lxyz_bluepitaya_d3force_Lcg$
}
function $p_Lxyz_bluepitaya_d3force_Simulation$___simulate$2__Lxyz_bluepitaya_d3force_IterationState__Lxyz_bluepitaya_d3force_SimulationSettings__sci_Seq__Lxyz_bluepitaya_d3force_IterationState($thiz, state, settings$4, forces$3) {
  while (true) {
    if ((state.Lxyz_bluepitaya_d3force_IterationState__f_alpha < settings$4.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin)) {
      return state
    } else {
      state = $thiz.nextState__Lxyz_bluepitaya_d3force_IterationState__Lxyz_bluepitaya_d3force_SimulationSettings__sci_Seq__Lxyz_bluepitaya_d3force_IterationState(state, settings$4, forces$3)
    }
  }
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Simulation$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_Simulation$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Simulation$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Simulation$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Simulation$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Simulation$.prototype = $c_Lxyz_bluepitaya_d3force_Simulation$.prototype;
$c_Lxyz_bluepitaya_d3force_Simulation$.prototype.nextState__Lxyz_bluepitaya_d3force_IterationState__Lxyz_bluepitaya_d3force_SimulationSettings__sci_Seq__Lxyz_bluepitaya_d3force_IterationState = (function(state, settings, forces) {
  var nextAlpha = (+settings.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange.apply__O__O__O__O(state.Lxyz_bluepitaya_d3force_IterationState__f_alpha, settings.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget, settings.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay));
  var x$2 = state.Lxyz_bluepitaya_d3force_IterationState__f_nodes;
  var nextState = new $c_Lxyz_bluepitaya_d3force_IterationState(x$2, nextAlpha);
  var forceFunctions = forces.map__F1__O(new $c_sjsr_AnonFunction1(((x$1$2$2) => {
    var x$1$2 = x$1$2$2;
    return x$1$2.apply__O__O(nextState)
  })));
  var nextNodes = nextState.Lxyz_bluepitaya_d3force_IterationState__f_nodes.map__F1__O(new $c_sjsr_AnonFunction1(((node$2) => {
    var node = node$2;
    var force = forceFunctions.foldLeft__O__F2__O(new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero), new $c_sjsr_AnonFunction2(((_force$2, getForce$2) => {
      var _force = _force$2;
      var getForce = getForce$2;
      return _force.$plus__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Force(getForce.apply__O__O(node))
    })));
    return (node.Lxyz_bluepitaya_d3force_Node__f_isFixed ? node : node.applyForce__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Node(force))
  }))).map__F1__O(new $c_sjsr_AnonFunction1(((node$3$2) => {
    var node$3 = node$3$2;
    return (node$3.Lxyz_bluepitaya_d3force_Node__f_isFixed ? node$3 : node$3.move__D__Lxyz_bluepitaya_d3force_Node(settings.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay))
  })));
  return new $c_Lxyz_bluepitaya_d3force_IterationState(nextNodes, nextAlpha)
});
$c_Lxyz_bluepitaya_d3force_Simulation$.prototype.simulate__sci_Seq__sci_Seq__Lxyz_bluepitaya_d3force_SimulationSettings__Lxyz_bluepitaya_d3force_IterationState = (function(nodes, forces, settings) {
  var state = new $c_Lxyz_bluepitaya_d3force_IterationState(nodes, 1.0);
  return $p_Lxyz_bluepitaya_d3force_Simulation$___simulate$2__Lxyz_bluepitaya_d3force_IterationState__Lxyz_bluepitaya_d3force_SimulationSettings__sci_Seq__Lxyz_bluepitaya_d3force_IterationState(this, state, settings, forces)
});
var $d_Lxyz_bluepitaya_d3force_Simulation$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Simulation$: 0
}, false, "xyz.bluepitaya.d3force.Simulation$", {
  Lxyz_bluepitaya_d3force_Simulation$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_Simulation$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Simulation$;
var $n_Lxyz_bluepitaya_d3force_Simulation$;
function $m_Lxyz_bluepitaya_d3force_Simulation$() {
  if ((!$n_Lxyz_bluepitaya_d3force_Simulation$)) {
    $n_Lxyz_bluepitaya_d3force_Simulation$ = new $c_Lxyz_bluepitaya_d3force_Simulation$()
  };
  return $n_Lxyz_bluepitaya_d3force_Simulation$
}
function $p_Lxyz_bluepitaya_d3force_forces_AxisForce$__f$1__D__F1__Lxyz_bluepitaya_d3force_Node__F1__D__D($thiz, axisPos, value$1, node$1, strength$1, alpha$1) {
  return ((((+value$1.apply__O__O(node$1)) - axisPos) * (+strength$1.apply__O__O(node$1))) * alpha$1)
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_AxisForce$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_AxisForce$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype;
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype.force__F1__Lxyz_bluepitaya_d3force_forces_AxisForce$Axis__F1__D__F1 = (function(strength, axis, value, alpha) {
  return new $c_sjsr_AnonFunction1(((node$2) => {
    var node = node$2;
    var x = $m_Lxyz_bluepitaya_d3force_forces_AxisForce$X$();
    if ((x === axis)) {
      var velocityChange = new $c_Lxyz_bluepitaya_d3force_Vec2f($p_Lxyz_bluepitaya_d3force_forces_AxisForce$__f$1__D__F1__Lxyz_bluepitaya_d3force_Node__F1__D__D(this, node.Lxyz_bluepitaya_d3force_Node__f_pos.Lxyz_bluepitaya_d3force_Vec2f__f_x, value, node, strength, alpha), 0.0)
    } else {
      var x$3 = $m_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$();
      if ((!(x$3 === axis))) {
        throw new $c_s_MatchError(axis)
      };
      var velocityChange = new $c_Lxyz_bluepitaya_d3force_Vec2f(0.0, $p_Lxyz_bluepitaya_d3force_forces_AxisForce$__f$1__D__F1__Lxyz_bluepitaya_d3force_Node__F1__D__D(this, node.Lxyz_bluepitaya_d3force_Node__f_pos.Lxyz_bluepitaya_d3force_Vec2f__f_y, value, node, strength, alpha))
    };
    var x$2$2 = $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero;
    return new $c_Lxyz_bluepitaya_d3force_Force(x$2$2, velocityChange)
  }))
});
var $d_Lxyz_bluepitaya_d3force_forces_AxisForce$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_AxisForce$: 0
}, false, "xyz.bluepitaya.d3force.forces.AxisForce$", {
  Lxyz_bluepitaya_d3force_forces_AxisForce$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_AxisForce$;
var $n_Lxyz_bluepitaya_d3force_forces_AxisForce$;
function $m_Lxyz_bluepitaya_d3force_forces_AxisForce$() {
  if ((!$n_Lxyz_bluepitaya_d3force_forces_AxisForce$)) {
    $n_Lxyz_bluepitaya_d3force_forces_AxisForce$ = new $c_Lxyz_bluepitaya_d3force_forces_AxisForce$()
  };
  return $n_Lxyz_bluepitaya_d3force_forces_AxisForce$
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__getBias$1__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__s_Option($thiz, link, inOutCount$1) {
  var this$1 = inOutCount$1.get__O__s_Option(link.Lxyz_bluepitaya_d3force_forces_Link__f_from);
  if (this$1.isEmpty__Z()) {
    return $m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var fromCount = (arg1 | 0);
    var this$2 = inOutCount$1.get__O__s_Option(link.Lxyz_bluepitaya_d3force_forces_Link__f_to);
    if (this$2.isEmpty__Z()) {
      return $m_s_None$()
    } else {
      var arg1$1 = this$2.get__O();
      var toCount = (arg1$1 | 0);
      return new $c_s_Some((fromCount / ((fromCount + toCount) | 0)))
    }
  }
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__str$lzycompute$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, str$lzy$1, strength$1, link$2) {
  if ((str$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (str$lzy$1.sr_LazyDouble__f__initialized ? str$lzy$1.sr_LazyDouble__f__value : str$lzy$1.initialize__D__D((+strength$1.apply__O__O(link$2))))
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__str$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, str$lzy$1, strength$1, link$2) {
  return (str$lzy$1.sr_LazyDouble__f__initialized ? str$lzy$1.sr_LazyDouble__f__value : $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__str$lzycompute$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, str$lzy$1, strength$1, link$2))
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__dist$lzycompute$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, dist$lzy$1, distance$1, link$2) {
  if ((dist$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (dist$lzy$1.sr_LazyDouble__f__initialized ? dist$lzy$1.sr_LazyDouble__f__value : dist$lzy$1.initialize__D__D((+distance$1.apply__O__O(link$2))))
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__dist$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, dist$lzy$1, distance$1, link$2) {
  return (dist$lzy$1.sr_LazyDouble__f__initialized ? dist$lzy$1.sr_LazyDouble__f__value : $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__dist$lzycompute$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D($thiz, dist$lzy$1, distance$1, link$2))
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__bias$lzycompute$1__sr_LazyDouble__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D($thiz, bias$lzy$1, link$2, inOutCount$1) {
  if ((bias$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  if (bias$lzy$1.sr_LazyDouble__f__initialized) {
    return bias$lzy$1.sr_LazyDouble__f__value
  } else {
    var this$1 = $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__getBias$1__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__s_Option($thiz, link$2, inOutCount$1);
    return bias$lzy$1.initialize__D__D((+(this$1.isEmpty__Z() ? 0.0 : this$1.get__O())))
  }
}
function $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__bias$1__sr_LazyDouble__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D($thiz, bias$lzy$1, link$2, inOutCount$1) {
  return (bias$lzy$1.sr_LazyDouble__f__initialized ? bias$lzy$1.sr_LazyDouble__f__value : $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__bias$lzycompute$1__sr_LazyDouble__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D($thiz, bias$lzy$1, link$2, inOutCount$1))
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_LinkForce$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_LinkForce$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_LinkForce$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype = $c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype;
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype.getInOutCount__sc_Iterable__sci_Map = (function(links) {
  var this$5 = links.flatMap__F1__O(new $c_sjsr_AnonFunction1(((l$2) => {
    var l = l$2;
    var $$x1 = $m_s_package$().s_package$__f_Seq;
    var array = [l.Lxyz_bluepitaya_d3force_forces_Link__f_from, l.Lxyz_bluepitaya_d3force_forces_Link__f_to];
    return $$x1.apply__sci_Seq__sc_SeqOps(new $c_sjsr_WrappedVarArgs(array))
  })));
  var m = $m_scm_Map$().empty__O();
  var it = this$5.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    var elem = it.next__O();
    var x = elem;
    var f = ((this$5) => (() => this$5.newSpecificBuilder__scm_Builder()))(this$5);
    var x$1 = $objectGetClass(m);
    if ((!(x$1 === $d_scm_HashMap.getClassOf()))) {
      var x1 = m.get__O__s_Option(x);
      if ((x1 instanceof $c_s_Some)) {
        var x2 = x1;
        var v = x2.s_Some__f_value;
        var $$x2 = v
      } else {
        var x$2 = $m_s_None$();
        if ((!(x$2 === x1))) {
          throw new $c_s_MatchError(x1)
        };
        var d = f();
        $p_scm_HashMap__put0__O__O__Z__s_Some(m, x, d, false);
        var $$x2 = d
      }
    } else {
      var originalHash = $m_sr_Statics$().anyHash__O__I(x);
      var hash = (originalHash ^ ((originalHash >>> 16) | 0));
      var idx = (hash & (((-1) + m.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0));
      var x1$1 = m.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[idx];
      var nd = ((x1$1 === null) ? null : x1$1.findNode__O__I__scm_HashMap$Node(x, hash));
      if ((nd !== null)) {
        var $$x2 = nd.scm_HashMap$Node__f__value
      } else {
        var table0 = m.scm_HashMap__f_scala$collection$mutable$HashMap$$table;
        var default$1 = f();
        if ((((1 + m.scm_HashMap__f_contentSize) | 0) >= m.scm_HashMap__f_threshold)) {
          $p_scm_HashMap__growTable__I__V(m, (m.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length << 1))
        };
        var newIdx = ((table0 === m.scm_HashMap__f_scala$collection$mutable$HashMap$$table) ? idx : (hash & (((-1) + m.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0)));
        $p_scm_HashMap__put0__O__O__Z__I__I__s_Some(m, x, default$1, false, hash, newIdx);
        var $$x2 = default$1
      }
    };
    var bldr = $$x2;
    bldr.addOne__O__scm_Growable(elem)
  };
  var this$7 = $m_sci_HashMap$();
  var result = this$7.sci_HashMap$__f_EmptyMap;
  var mapIt = m.iterator__sc_Iterator();
  while (mapIt.hasNext__Z()) {
    var x1$2 = mapIt.next__O();
    if ((x1$2 === null)) {
      throw new $c_s_MatchError(x1$2)
    };
    var k = x1$2._1__O();
    var v$1 = x1$2._2__O();
    result = result.updated__O__O__sci_HashMap(k, v$1.result__O())
  };
  var this$8 = result;
  $m_sci_HashMap$();
  var b = new $c_sci_HashMapBuilder();
  var it$1 = this$8.iterator__sc_Iterator();
  while (it$1.hasNext__Z()) {
    var arg1 = it$1.next__O();
    var x0$1 = arg1;
    if ((x0$1 === null)) {
      throw new $c_s_MatchError(x0$1)
    };
    var id = x0$1._1__O();
    var ids = x0$1._2__O();
    var y = ids.size__I();
    $p_sci_HashMapBuilder__ensureUnaliased__V(b);
    var h = $m_sr_Statics$().anyHash__O__I(id);
    var im = $m_sc_Hashing$().improve__I__I(h);
    b.update__sci_MapNode__O__O__I__I__I__V(b.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, id, y, h, im, 0)
  };
  return b.result__sci_HashMap()
});
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype.defaultStrength__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D = (function(link, inOutCount) {
  var a = (inOutCount.apply__O__O(link.Lxyz_bluepitaya_d3force_forces_Link__f_from) | 0);
  var b = (inOutCount.apply__O__O(link.Lxyz_bluepitaya_d3force_forces_Link__f_to) | 0);
  var minCount = ((a < b) ? a : b);
  return (1.0 / ((minCount > 1) ? minCount : 1))
});
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype.force__sci_Seq__F1__s_Option__D__sci_Seq__F1 = (function(links, distance, strengthOption, alpha, nodes) {
  var inOutCount = this.getInOutCount__sc_Iterable__sci_Map(links);
  var strength = (strengthOption.isEmpty__Z() ? new $c_sjsr_AnonFunction1(((link$2) => {
    var link = link$2;
    return $m_Lxyz_bluepitaya_d3force_forces_LinkForce$().defaultStrength__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D(link, inOutCount)
  })) : strengthOption.get__O());
  var $$x1 = nodes.map__F1__O(new $c_sjsr_AnonFunction1(((n$2) => {
    var n = n$2;
    var self = n.Lxyz_bluepitaya_d3force_Node__f_id;
    return $ct_T2__O__O__(new $c_T2(), self, n)
  })));
  var this$5 = $m_s_$less$colon$less$();
  var nodesMap = $$x1.toMap__s_$less$colon$less__sci_Map(this$5.s_$less$colon$less$__f_singleton);
  var nextNodes = links.foldLeft__O__F2__O(nodesMap, new $c_sjsr_AnonFunction2(((_nodes$2, link$2$1) => {
    var _nodes = _nodes$2;
    var link$1 = link$2$1;
    var str$lzy = new $c_sr_LazyDouble();
    var dist$lzy = new $c_sr_LazyDouble();
    var bias$lzy = new $c_sr_LazyDouble();
    var id = link$1.Lxyz_bluepitaya_d3force_forces_Link__f_from;
    var this$6 = _nodes.get__O__s_Option(id);
    if (this$6.isEmpty__Z()) {
      var this$9 = $m_s_None$()
    } else {
      var arg1 = this$6.get__O();
      var from = arg1;
      var id$1 = link$1.Lxyz_bluepitaya_d3force_forces_Link__f_to;
      var this$7 = _nodes.get__O__s_Option(id$1);
      if (this$7.isEmpty__Z()) {
        var this$9 = $m_s_None$()
      } else {
        var arg1$1 = this$7.get__O();
        var to = arg1$1;
        var v = to.Lxyz_bluepitaya_d3force_Node__f_pos.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(to.Lxyz_bluepitaya_d3force_Node__f_velocity).$minus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(from.Lxyz_bluepitaya_d3force_Node__f_pos.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(from.Lxyz_bluepitaya_d3force_Node__f_velocity));
        var xy = new $c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions(v).jiggleIfZero__Lxyz_bluepitaya_d3force_Vec2f();
        var ll = ((((xy.magnitude__D() - $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__dist$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D(this, dist$lzy, distance, link$1)) / xy.magnitude__D()) * alpha) * $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__str$1__sr_LazyDouble__F1__Lxyz_bluepitaya_d3force_forces_Link__D(this, str$lzy, strength, link$1));
        var xy2 = xy.$times__D__Lxyz_bluepitaya_d3force_Vec2f(ll);
        var targetVelocityChange = xy2.$times__D__Lxyz_bluepitaya_d3force_Vec2f($p_Lxyz_bluepitaya_d3force_forces_LinkForce$__bias$1__sr_LazyDouble__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D(this, bias$lzy, link$1, inOutCount)).$times__D__Lxyz_bluepitaya_d3force_Vec2f((-1.0));
        var sourceVelocityChange = xy2.$times__D__Lxyz_bluepitaya_d3force_Vec2f((1.0 - $p_Lxyz_bluepitaya_d3force_forces_LinkForce$__bias$1__sr_LazyDouble__Lxyz_bluepitaya_d3force_forces_Link__sci_Map__D(this, bias$lzy, link$1, inOutCount)));
        var $$x4 = from.Lxyz_bluepitaya_d3force_Node__f_id;
        var x$1 = from.Lxyz_bluepitaya_d3force_Node__f_velocity.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(sourceVelocityChange);
        var x$2 = from.Lxyz_bluepitaya_d3force_Node__f_id;
        var x$3 = from.Lxyz_bluepitaya_d3force_Node__f_pos;
        var x$4 = from.Lxyz_bluepitaya_d3force_Node__f_isFixed;
        var $$x3 = _nodes.updated__O__O__sci_MapOps($$x4, new $c_Lxyz_bluepitaya_d3force_Node(x$2, x$3, x$1, x$4));
        var $$x2 = to.Lxyz_bluepitaya_d3force_Node__f_id;
        var x$5 = to.Lxyz_bluepitaya_d3force_Node__f_velocity.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(targetVelocityChange);
        var x$6 = to.Lxyz_bluepitaya_d3force_Node__f_id;
        var x$7 = to.Lxyz_bluepitaya_d3force_Node__f_pos;
        var x$8 = to.Lxyz_bluepitaya_d3force_Node__f_isFixed;
        var this$9 = new $c_s_Some($$x3.updated__O__O__sci_MapOps($$x2, new $c_Lxyz_bluepitaya_d3force_Node(x$6, x$7, x$5, x$8)))
      }
    };
    return (this$9.isEmpty__Z() ? _nodes : this$9.get__O())
  })));
  return new $c_sjsr_AnonFunction1(((node$2) => {
    var node = node$2;
    var this$10 = nextNodes.get__O__s_Option(node.Lxyz_bluepitaya_d3force_Node__f_id);
    if (this$10.isEmpty__Z()) {
      var this$12 = $m_s_None$()
    } else {
      var arg1$2 = this$10.get__O();
      var n$1 = arg1$2;
      var x$9 = n$1.Lxyz_bluepitaya_d3force_Node__f_velocity.$minus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(node.Lxyz_bluepitaya_d3force_Node__f_velocity);
      var x$10 = $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero;
      var this$12 = new $c_s_Some(new $c_Lxyz_bluepitaya_d3force_Force(x$10, x$9))
    };
    return (this$12.isEmpty__Z() ? new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero) : this$12.get__O())
  }))
});
var $d_Lxyz_bluepitaya_d3force_forces_LinkForce$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_LinkForce$: 0
}, false, "xyz.bluepitaya.d3force.forces.LinkForce$", {
  Lxyz_bluepitaya_d3force_forces_LinkForce$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_forces_LinkForce$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_LinkForce$;
var $n_Lxyz_bluepitaya_d3force_forces_LinkForce$;
function $m_Lxyz_bluepitaya_d3force_forces_LinkForce$() {
  if ((!$n_Lxyz_bluepitaya_d3force_forces_LinkForce$)) {
    $n_Lxyz_bluepitaya_d3force_forces_LinkForce$ = new $c_Lxyz_bluepitaya_d3force_forces_LinkForce$()
  };
  return $n_Lxyz_bluepitaya_d3force_forces_LinkForce$
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__jiggleParams__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($thiz, params, options) {
  var x = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p.Lxyz_bluepitaya_d3force_Vec2f__f_x;
  var y = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p.Lxyz_bluepitaya_d3force_Vec2f__f_y;
  var l = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l;
  var v = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p;
  var nextP = new $c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions(v).jiggleIfZero__Lxyz_bluepitaya_d3force_Vec2f();
  var lJiggleX = ((x === 0.0) ? (nextP.Lxyz_bluepitaya_d3force_Vec2f__f_x * nextP.Lxyz_bluepitaya_d3force_Vec2f__f_x) : 0.0);
  var lJiggleY = ((y === 0.0) ? (nextP.Lxyz_bluepitaya_d3force_Vec2f__f_y * nextP.Lxyz_bluepitaya_d3force_Vec2f__f_y) : 0.0);
  var l2 = ((l + lJiggleX) + lJiggleY);
  if ((l2 < options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin2)) {
    var a = (options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin2 * l2);
    var nextL = (+Math.sqrt(a))
  } else {
    var nextL = l2
  };
  var x$3 = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w;
  return new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params(nextP, x$3, nextL)
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__vertexMapping__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__D__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_quadtree_Vertex__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_Force($thiz, options, alpha, node, vertex, region) {
  var this$1 = vertex.metadata__s_Option();
  var metadata = (this$1.isEmpty__Z() ? new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, 0.0) : this$1.get__O());
  var params = $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__calcParams__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($thiz, node, metadata, region, options);
  if ($p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__barnesHutCondition__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Z($thiz, params, options)) {
    if ((params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l < options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax2)) {
      var nextParams = $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__jiggleParams__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($thiz, params, options);
      var nextVelocity = nextParams.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p.$times__D__Lxyz_bluepitaya_d3force_Vec2f(metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value).$times__D__Lxyz_bluepitaya_d3force_Vec2f(alpha).$div__D__Lxyz_bluepitaya_d3force_Vec2f(nextParams.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l);
      var x$2 = $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero;
      return new $c_Lxyz_bluepitaya_d3force_Force(x$2, nextVelocity)
    } else {
      return new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero)
    }
  } else if ((params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l >= options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax2)) {
    return new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero)
  } else if ((vertex instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Leaf)) {
    var x2 = vertex;
    var data = x2.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
    if ((data.length__I() > 1)) {
      var $$x1 = true
    } else {
      var x = data.headOption__s_Option();
      var x$3 = new $c_s_Some(node);
      var $$x1 = (!((x !== null) && x.equals__O__Z(x$3)))
    };
    if ($$x1) {
      var nextParams$2 = $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__jiggleParams__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($thiz, params, options)
    } else {
      var nextParams$2 = params
    };
    var _1 = new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero);
    var _2 = params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w;
    var acc___1 = _1;
    var acc___2 = _2;
    var these = data;
    while ((!these.isEmpty__Z())) {
      var arg1___1 = acc___1;
      var arg1___2 = acc___2;
      var arg2 = these.head__O();
      var nodeData = arg2;
      var force = arg1___1;
      var w = (+arg1___2);
      if ((!((nodeData === null) ? (node === null) : nodeData.equals__O__Z(node)))) {
        var str = (+options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength.apply__O__O(nodeData));
        var nextW = ((str * alpha) / nextParams$2.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l);
        var x$3$1 = nextParams$2.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p.$times__D__Lxyz_bluepitaya_d3force_Vec2f(nextW);
        var x$4 = $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero;
        var nextForce = force.$plus__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Force(new $c_Lxyz_bluepitaya_d3force_Force(x$4, x$3$1));
        var $$x2___1 = nextForce;
        var $$x2___2 = nextW;
        acc___1 = $$x2___1;
        acc___2 = $$x2___2
      } else {
        var $$x3___1 = force;
        var $$x3___2 = w;
        acc___1 = $$x3___1;
        acc___2 = $$x3___2
      };
      these = these.tail__O()
    };
    return acc___1
  } else {
    return new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero)
  }
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__barnesHutCondition__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Z($thiz, params, options) {
  return (((params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w * params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w) / options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta2) < params.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l)
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__stopCondition__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_quadtree_TreeNode__Lxyz_bluepitaya_d3force_quadtree_Region__Z($thiz, options, node, treeNode, region) {
  var this$1 = treeNode.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
  if (this$1.isEmpty__Z()) {
    var this$2 = $m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var metadata = arg1;
    var params = $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__calcParams__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), node, metadata, region, options);
    var this$2 = new $c_s_Some($p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__barnesHutCondition__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Z($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), params, options))
  };
  return (!(!(this$2.isEmpty__Z() || this$2.get__O())))
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__calcParams__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params($thiz, node, metadata, region, options) {
  var x = (metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point.Lxyz_bluepitaya_d3force_Vec2f__f_x - node.Lxyz_bluepitaya_d3force_Node__f_pos.Lxyz_bluepitaya_d3force_Vec2f__f_x);
  var y = (metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point.Lxyz_bluepitaya_d3force_Vec2f__f_y - node.Lxyz_bluepitaya_d3force_Node__f_pos.Lxyz_bluepitaya_d3force_Vec2f__f_y);
  return new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params(new $c_Lxyz_bluepitaya_d3force_Vec2f(x, y), (region.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2.Lxyz_bluepitaya_d3force_Vec2f__f_x - region.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1.Lxyz_bluepitaya_d3force_Vec2f__f_x), ((x * x) + (y * y)))
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__leafAccumulate__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_quadtree_Leaf__s_Option($thiz, options, leaf) {
  var $$x1 = leaf.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
  var this$1 = leaf.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
  var acc = 0.0;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    var arg1 = acc;
    var arg2 = these.head__O();
    var acc$1 = (+arg1);
    var node = arg2;
    acc = (acc$1 + (+options.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength.apply__O__O(node)));
    these = these.tail__O()
  };
  return new $c_s_Some(new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata($$x1, (+acc)))
}
function $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__nodeAccumulate__s_Option__sci_Map__s_Option($thiz, oldMetadata, children) {
  var x1 = children.map__F1__O(new $c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = x$2$2;
    return x$2._2__O()
  }))).foldLeft__O__F2__O(new $c_T4(0.0, 0.0, 0.0, 0.0), new $c_sjsr_AnonFunction2(((value$2, v$2) => {
    var value = value$2;
    var v = v$2;
    if ((value === null)) {
      throw new $c_s_MatchError(value)
    };
    var s = (+value.T4__f__1);
    var w = (+value.T4__f__2);
    var _x = (+value.T4__f__3);
    var _y = (+value.T4__f__4);
    var this$3 = v.metadata__s_Option();
    var metadata = (this$3.isEmpty__Z() ? new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, 0.0) : this$3.get__O());
    var a = metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value;
    var c = (+Math.abs(a));
    var nextS = (s + metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value);
    var nextW = (w + c);
    var nextX = (_x + (c * metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point.Lxyz_bluepitaya_d3force_Vec2f__f_x));
    var nextY = (_y + (c * metadata.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point.Lxyz_bluepitaya_d3force_Vec2f__f_y));
    return new $c_T4(nextS, nextW, nextX, nextY)
  })));
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var strength = (+x1.T4__f__1);
  var weight = (+x1.T4__f__2);
  var x = (+x1.T4__f__3);
  var y = (+x1.T4__f__4);
  return new $c_s_Some(new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata(new $c_Lxyz_bluepitaya_d3force_Vec2f((x / weight), (y / weight)), strength))
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$() {
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__f_defaultOptions = null;
  $n_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$ = this;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__f_defaultOptions = new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options(new $c_sjsr_AnonFunction1(((x$1$2) => (-30.0))), 1.0, 1.7976931348623157E308, 0.9)
}
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype;
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype.force__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__sci_Seq__D__F1 = (function(options, nodes, alpha) {
  var dataPoints = nodes.map__F1__O(new $c_sjsr_AnonFunction1(((n$2) => {
    var n = n$2;
    return $ct_T2__O__O__(new $c_T2(), n.Lxyz_bluepitaya_d3force_Node__f_pos, n)
  })));
  var tree = $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$().addAll__sci_Seq__Lxyz_bluepitaya_d3force_quadtree_QuadTree(dataPoints);
  var accumulatedTree = $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$().postorderMapMetadata__Lxyz_bluepitaya_d3force_quadtree_QuadTree__F1__F2__Lxyz_bluepitaya_d3force_quadtree_QuadTree(tree, new $c_sjsr_AnonFunction1(((leaf$2) => {
    var leaf = leaf$2;
    return $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__leafAccumulate__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_quadtree_Leaf__s_Option($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), options, leaf)
  })), new $c_sjsr_AnonFunction2(((oldMetadata$2, children$2) => {
    var oldMetadata = oldMetadata$2;
    var children = children$2;
    return $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__nodeAccumulate__s_Option__sci_Map__s_Option($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), oldMetadata, children)
  })));
  return new $c_sjsr_AnonFunction1(((node$2) => {
    var node = node$2;
    var this$7 = $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$();
    var mapping = new $c_sjsr_AnonFunction2(((vertex$2, region$2) => {
      var vertex = vertex$2;
      var region = region$2;
      return $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__vertexMapping__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__D__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_quadtree_Vertex__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), options, alpha, node, vertex, region)
    }));
    var stopCondition = new $c_sjsr_AnonFunction2(((treeNode$2, region$3$2) => {
      var treeNode = treeNode$2;
      var region$3 = region$3$2;
      return $p_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$__stopCondition__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__Lxyz_bluepitaya_d3force_Node__Lxyz_bluepitaya_d3force_quadtree_TreeNode__Lxyz_bluepitaya_d3force_quadtree_Region__Z($m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$(), options, node, treeNode, region$3)
    }));
    var initialData = new $c_Lxyz_bluepitaya_d3force_Force($m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero, $m_Lxyz_bluepitaya_d3force_Vec2f$().Lxyz_bluepitaya_d3force_Vec2f$__f_zero);
    return $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$1__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_Force__F2__F2__Lxyz_bluepitaya_d3force_Force(this$7, accumulatedTree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root, accumulatedTree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region, initialData, mapping, stopCondition)
  }))
});
var $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$: 0
}, false, "xyz.bluepitaya.d3force.forces.ManyBodyForce$", {
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$;
var $n_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$;
function $m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$() {
  if ((!$n_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$)) {
    $n_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$ = new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$()
  };
  return $n_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions(v) {
  this.Lxyz_bluepitaya_d3force_package$Vec2fExtensions__f_v = null;
  this.Lxyz_bluepitaya_d3force_package$Vec2fExtensions__f_v = v
}
$c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype.constructor = $c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_package$Vec2fExtensions() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype = $c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype;
$c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype.jiggleIfZero__Lxyz_bluepitaya_d3force_Vec2f = (function() {
  var this$2 = this.Lxyz_bluepitaya_d3force_package$Vec2fExtensions__f_v;
  var f = (() => $m_Lxyz_bluepitaya_d3force_Lcg$().jiggle__D());
  return new $c_Lxyz_bluepitaya_d3force_Vec2f(((this$2.Lxyz_bluepitaya_d3force_Vec2f__f_x === 0.0) ? (+f()) : this$2.Lxyz_bluepitaya_d3force_Vec2f__f_x), ((this$2.Lxyz_bluepitaya_d3force_Vec2f__f_y === 0.0) ? (+f()) : this$2.Lxyz_bluepitaya_d3force_Vec2f__f_y))
});
var $d_Lxyz_bluepitaya_d3force_package$Vec2fExtensions = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_package$Vec2fExtensions: 0
}, false, "xyz.bluepitaya.d3force.package$Vec2fExtensions", {
  Lxyz_bluepitaya_d3force_package$Vec2fExtensions: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_package$Vec2fExtensions.prototype.$classData = $d_Lxyz_bluepitaya_d3force_package$Vec2fExtensions;
function $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__getSize__sci_Seq__Lxyz_bluepitaya_d3force_quadtree_Region($thiz, points) {
  var this$2 = points.map__F1__O(new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = x$1$2;
    return x$1.Lxyz_bluepitaya_d3force_Vec2f__f_x
  })));
  var ord = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
  var this$3 = $f_sc_IterableOnceOps__minOption__s_math_Ordering__s_Option(this$2, ord);
  var minX = (+(this$3.isEmpty__Z() ? 0.0 : this$3.get__O()));
  var this$4 = points.map__F1__O(new $c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = x$2$2;
    return x$2.Lxyz_bluepitaya_d3force_Vec2f__f_y
  })));
  var ord$1 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
  var this$5 = $f_sc_IterableOnceOps__minOption__s_math_Ordering__s_Option(this$4, ord$1);
  var minY = (+(this$5.isEmpty__Z() ? 0.0 : this$5.get__O()));
  var this$6 = points.map__F1__O(new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = x$3$2;
    return x$3.Lxyz_bluepitaya_d3force_Vec2f__f_x
  })));
  var ord$2 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
  var this$7 = $f_sc_IterableOnceOps__maxOption__s_math_Ordering__s_Option(this$6, ord$2);
  var maxX = (+(this$7.isEmpty__Z() ? 1.0 : this$7.get__O()));
  var this$8 = points.map__F1__O(new $c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = x$4$2;
    return x$4.Lxyz_bluepitaya_d3force_Vec2f__f_y
  })));
  var ord$3 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
  var this$9 = $f_sc_IterableOnceOps__maxOption__s_math_Ordering__s_Option(this$8, ord$3);
  var maxY = (+(this$9.isEmpty__Z() ? 1.0 : this$9.get__O()));
  var from = new $c_Lxyz_bluepitaya_d3force_Vec2f(minX, minY);
  var to = new $c_Lxyz_bluepitaya_d3force_Vec2f(maxX, maxY);
  var a = (to.Lxyz_bluepitaya_d3force_Vec2f__f_x - from.Lxyz_bluepitaya_d3force_Vec2f__f_x);
  var _w = (+Math.abs(a));
  var a$1 = (to.Lxyz_bluepitaya_d3force_Vec2f__f_y - from.Lxyz_bluepitaya_d3force_Vec2f__f_y);
  var _h = (+Math.abs(a$1));
  if ((_w > 1.0)) {
    var a$2 = $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__log2$1__D__D($thiz, _w);
    var w_exponent = (+Math.ceil(a$2))
  } else {
    var w_exponent = 0.0
  };
  if ((_h > 1.0)) {
    var a$3 = $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__log2$1__D__D($thiz, _h);
    var h_exponent = (+Math.ceil(a$3))
  } else {
    var h_exponent = 0.0
  };
  var w = (+Math.pow(2.0, w_exponent));
  var h = (+Math.pow(2.0, h_exponent));
  var a$4 = (+Math.max(w, h));
  return new $c_Lxyz_bluepitaya_d3force_quadtree_Region(from.floor__Lxyz_bluepitaya_d3force_Vec2f(), from.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(new $c_Lxyz_bluepitaya_d3force_Vec2f(a$4, a$4)).floor__Lxyz_bluepitaya_d3force_Vec2f())
}
function $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__log2$1__D__D($thiz, x) {
  return ((+Math.log(x)) / (+Math.log(2.0)))
}
function $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$1__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_Force__F2__F2__Lxyz_bluepitaya_d3force_Force($thiz, root, region, data, mapping$1, stopCondition$1) {
  var x = $m_s_None$();
  if ((x === root)) {
    return data
  } else if ((root instanceof $c_s_Some)) {
    var x3 = root;
    var v = x3.s_Some__f_value;
    if ((v instanceof $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode)) {
      var x2 = v;
      var nextData = data.$plus__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Force(mapping$1.apply__O__O__O(x2, region));
      if ((!(!stopCondition$1.apply__O__O__O(x2, region)))) {
        return nextData
      } else {
        var this$1 = $thiz.Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__f_quadrantOrder;
        var acc = nextData;
        var these = this$1;
        while ((!these.isEmpty__Z())) {
          var arg1 = acc;
          var arg2 = these.head__O();
          var n = arg1;
          var q = arg2;
          var xd = $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$1__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_Force__F2__F2__Lxyz_bluepitaya_d3force_Force($thiz, x2.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children.get__O__s_Option(q), region.applyQuadrant__Lxyz_bluepitaya_d3force_quadtree_Quadrant__Lxyz_bluepitaya_d3force_quadtree_Region(q), n, mapping$1, stopCondition$1);
          acc = xd;
          these = these.tail__O()
        };
        return acc
      }
    } else if ((v instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Leaf)) {
      var x3$2 = v;
      var next = mapping$1.apply__O__O__O(x3$2, region);
      return data.$plus__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Force(next)
    } else {
      throw new $c_s_MatchError(v)
    }
  } else {
    throw new $c_s_MatchError(root)
  }
}
function $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$2__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__F2__F1__s_Option($thiz, root, region, nodeMapping$1, leafMapping$1) {
  if (root.isEmpty__Z()) {
    return $m_s_None$()
  } else {
    var arg1 = root.get__O();
    var x0$1 = arg1;
    if ((x0$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode)) {
      var x2 = x0$1;
      var children = x2.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children;
      var metadata = x2.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
      var this$1 = $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$().Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__f_quadrantOrder;
      var rest = this$1;
      var h = null;
      var t = null;
      while ((rest !== $m_sci_Nil$())) {
        var arg1$1 = rest.head__O();
        var quadrant = arg1$1;
        var this$2 = $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$2__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__F2__F1__s_Option($thiz, children.get__O__s_Option(quadrant), region.applyQuadrant__Lxyz_bluepitaya_d3force_quadtree_Quadrant__Lxyz_bluepitaya_d3force_quadtree_Region(quadrant), nodeMapping$1, leafMapping$1);
        if (this$2.isEmpty__Z()) {
          var $$x2 = $m_s_None$()
        } else {
          var arg1$2 = this$2.get__O();
          var x = arg1$2;
          var $$x2 = new $c_s_Some($ct_T2__O__O__(new $c_T2(), quadrant, x))
        };
        var it = $$x2.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          var nx = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
          if ((t === null)) {
            h = nx
          } else {
            t.sci_$colon$colon__f_next = nx
          };
          t = nx
        };
        rest = rest.tail__O()
      };
      var this$6 = ((h === null) ? $m_sci_Nil$() : h);
      $m_s_$less$colon$less$();
      var nextChildren = $m_sci_Map$().from__sc_IterableOnce__sci_Map(this$6);
      var nextMetadata = nodeMapping$1.apply__O__O__O(metadata, nextChildren);
      var $$x1 = new $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode(nextChildren, nextMetadata)
    } else if ((x0$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Leaf)) {
      var x3 = x0$1;
      var nextMetadata$2 = leafMapping$1.apply__O__O(x3);
      var x$2 = x3.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
      var x$3 = x3.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
      var $$x1 = new $c_Lxyz_bluepitaya_d3force_quadtree_Leaf(x$2, x$3, nextMetadata$2)
    } else {
      var $$x1;
      throw new $c_s_MatchError(x0$1)
    };
    return new $c_s_Some($$x1)
  }
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$() {
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__f_quadrantOrder = null;
  $n_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$ = this;
  $m_s_package$();
  var array = [$m_Lxyz_bluepitaya_d3force_quadtree_TopLeft$(), $m_Lxyz_bluepitaya_d3force_quadtree_TopRight$(), $m_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$(), $m_Lxyz_bluepitaya_d3force_quadtree_BottomRight$()];
  var elems = new $c_sjsr_WrappedVarArgs(array);
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__f_quadrantOrder = $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
}
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.add__Lxyz_bluepitaya_d3force_Vec2f__O__Lxyz_bluepitaya_d3force_quadtree_QuadTree__Lxyz_bluepitaya_d3force_quadtree_QuadTree = (function(point, data, tree) {
  $m_s_package$();
  var array = [data];
  var elems = new $c_sjsr_WrappedVarArgs(array);
  var v = this.add__Lxyz_bluepitaya_d3force_Vec2f__sci_List__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_quadtree_Vertex(point, $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems), tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root, tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region);
  var x$1 = new $c_s_Some(v);
  var x$2 = tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region;
  return new $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree(x$2, x$1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.add__Lxyz_bluepitaya_d3force_Vec2f__sci_List__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_quadtree_Vertex = (function(point, data, root, region) {
  while (true) {
    var x1 = root;
    var x = $m_s_None$();
    if ((x === x1)) {
      return new $c_Lxyz_bluepitaya_d3force_quadtree_Leaf(point, data, $m_s_None$())
    } else if ((x1 instanceof $c_s_Some)) {
      var x3 = x1;
      var value = x3.s_Some__f_value;
      if ((value instanceof $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode)) {
        var x2 = value;
        var children = x2.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children;
        var metadata = x2.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
        var quadrant = region.quadrantOf__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_quadtree_Quadrant(point);
        var v = this.add__Lxyz_bluepitaya_d3force_Vec2f__sci_List__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_quadtree_Vertex(point, data, children.get__O__s_Option(quadrant), region.applyQuadrant__Lxyz_bluepitaya_d3force_quadtree_Quadrant__Lxyz_bluepitaya_d3force_quadtree_Region(quadrant));
        return new $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode(children.updated__O__O__sci_MapOps(quadrant, v), metadata)
      } else if ((value instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Leaf)) {
        var x3$2 = value;
        var p = x3$2.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
        var d = x3$2.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
        var metadata$2 = x3$2.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata;
        if (((p === null) ? (point === null) : p.equals__O__Z(point))) {
          return new $c_Lxyz_bluepitaya_d3force_quadtree_Leaf(p, d.appendedAll__sc_IterableOnce__sci_List(data), metadata$2)
        } else {
          var this$1 = $m_s_Predef$().s_Predef$__f_Map;
          var elems = $m_sci_Nil$();
          var nodeWithOldLeaf = this.add__Lxyz_bluepitaya_d3force_Vec2f__sci_List__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__Lxyz_bluepitaya_d3force_quadtree_Vertex(p, d, new $c_s_Some(new $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode(this$1.from__sc_IterableOnce__sci_Map(elems), $m_s_None$())), region);
          root = new $c_s_Some(nodeWithOldLeaf)
        }
      } else {
        throw new $c_s_MatchError(value)
      }
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.addAll__sci_Seq__Lxyz_bluepitaya_d3force_quadtree_QuadTree = (function(dataPoints) {
  var size = $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__getSize__sci_Seq__Lxyz_bluepitaya_d3force_quadtree_Region(this, dataPoints.map__F1__O(new $c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = x$5$2;
    return x$5._1__O()
  }))));
  var tree = new $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree(size, $m_s_None$());
  return dataPoints.foldLeft__O__F2__O(tree, new $c_sjsr_AnonFunction2(((t$2, p$2) => {
    var t = t$2;
    var p = p$2;
    return $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$().add__Lxyz_bluepitaya_d3force_Vec2f__O__Lxyz_bluepitaya_d3force_quadtree_QuadTree__Lxyz_bluepitaya_d3force_quadtree_QuadTree(p._1__O(), p._2__O(), t)
  })))
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.postorderMapMetadata__Lxyz_bluepitaya_d3force_quadtree_QuadTree__F1__F2__Lxyz_bluepitaya_d3force_quadtree_QuadTree = (function(tree, leafMapping, nodeMapping) {
  return new $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree(tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region, $p_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$__traverse$2__s_Option__Lxyz_bluepitaya_d3force_quadtree_Region__F2__F1__s_Option(this, tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root, tree.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region, nodeMapping, leafMapping))
});
var $d_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$: 0
}, false, "xyz.bluepitaya.d3force.quadtree.QuadTreeOps$", {
  Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$: 1,
  O: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$;
var $n_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$;
function $m_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$() {
  if ((!$n_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$)) {
    $n_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$ = new $c_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$()
  };
  return $n_Lxyz_bluepitaya_d3force_quadtree_QuadTreeOps$
}
function $is_Lxyz_bluepitaya_d3force_quadtree_Quadrant(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lxyz_bluepitaya_d3force_quadtree_Quadrant)))
}
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_Quadrant(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_Quadrant)))
}
function $is_Lxyz_bluepitaya_d3force_quadtree_Vertex(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lxyz_bluepitaya_d3force_quadtree_Vertex)))
}
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_Vertex(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_Vertex)))
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).u[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
/** @constructor */
function $c_jl_Double$() {
  /*<skip>*/
}
$c_jl_Double$.prototype = new $h_O();
$c_jl_Double$.prototype.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
  /*<skip>*/
}
$h_jl_Double$.prototype = $c_jl_Double$.prototype;
$c_jl_Double$.prototype.compare__D__D__I = (function(a, b) {
  if ((a !== a)) {
    return ((b !== b) ? 0 : 1)
  } else if ((b !== b)) {
    return (-1)
  } else if ((a === b)) {
    if ((a === 0.0)) {
      var ainf = (1.0 / a);
      return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1))
    } else {
      return 0
    }
  } else {
    return ((a < b) ? (-1) : 1)
  }
});
var $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$()
  };
  return $n_jl_Double$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  var len = ((s === null) ? 0 : s.length);
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= s.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $$x1 = $m_jl_Character$();
    var index = i;
    var digit = $$x1.digitWithValidRadix__I__I__I(s.charCodeAt(index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return ((n | 0.0) | 0)
  } else {
    var n$1 = result;
    return ((n$1 | 0.0) | 0)
  }
});
$c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $$x1 = this;
    var reference = (false ? $$x1.sjs_js_JavaScriptException__f_exception : $$x1);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error()
      } else {
        Error.captureStackTrace(this)
      }
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $p_ju_Random__loop$1__I__I($thiz, n$1) {
  while (true) {
    var bits = $thiz.next__I__I(31);
    var value = $intMod(bits, n$1);
    if ((((((bits - value) | 0) + (((-1) + n$1) | 0)) | 0) < 0)) {
      /*<skip>*/
    } else {
      return value
    }
  }
}
function $ct_ju_Random__J__($thiz, seed_in) {
  $thiz.setSeed__J__V(seed_in);
  return $thiz
}
function $ct_ju_Random__($thiz) {
  $ct_ju_Random__J__($thiz, $m_ju_Random$().java$util$Random$$randomSeed__J());
  return $thiz
}
/** @constructor */
function $c_ju_Random() {
  this.ju_Random__f_seedHi = 0;
  this.ju_Random__f_seedLo = 0
}
$c_ju_Random.prototype = new $h_O();
$c_ju_Random.prototype.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
  /*<skip>*/
}
$h_ju_Random.prototype = $c_ju_Random.prototype;
$c_ju_Random.prototype.setSeed__J__V = (function(seed_in) {
  var lo = ((-554899859) ^ seed_in.RTLong__f_lo);
  var hi = (5 ^ seed_in.RTLong__f_hi);
  var hi$1 = (65535 & hi);
  var lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
  this.ju_Random__f_seedHi = lo$1;
  this.ju_Random__f_seedLo = (16777215 & lo)
});
$c_ju_Random.prototype.next__I__I = (function(bits) {
  var oldSeedHi = this.ju_Random__f_seedHi;
  var oldSeedLo = this.ju_Random__f_seedLo;
  var loProd = ((1.5525485E7 * oldSeedLo) + 11.0);
  var hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
  var x = (loProd / 1.6777216E7);
  var newSeedHi = (16777215 & ((((x | 0) | 0) + (16777215 & ((hiProd | 0) | 0))) | 0));
  var newSeedLo = (16777215 & ((loProd | 0) | 0));
  this.ju_Random__f_seedHi = newSeedHi;
  this.ju_Random__f_seedLo = newSeedLo;
  var result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
  return ((result32 >>> ((32 - bits) | 0)) | 0)
});
$c_ju_Random.prototype.nextInt__I__I = (function(n) {
  if ((n <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "n must be positive")
  } else {
    return (((n & ((-n) | 0)) === n) ? (this.next__I__I(31) >> Math.clz32(n)) : $p_ju_Random__loop$1__I__I(this, n))
  }
});
var $d_ju_Random = new $TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
function $p_ju_Random$__randomInt__I($thiz) {
  var a = (4.294967296E9 * (+Math.random()));
  return $doubleToInt(((+Math.floor(a)) - 2.147483648E9))
}
/** @constructor */
function $c_ju_Random$() {
  /*<skip>*/
}
$c_ju_Random$.prototype = new $h_O();
$c_ju_Random$.prototype.constructor = $c_ju_Random$;
/** @constructor */
function $h_ju_Random$() {
  /*<skip>*/
}
$h_ju_Random$.prototype = $c_ju_Random$.prototype;
$c_ju_Random$.prototype.java$util$Random$$randomSeed__J = (function() {
  var value = $p_ju_Random$__randomInt__I(this);
  var value$1 = $p_ju_Random$__randomInt__I(this);
  return new $c_RTLong(value$1, value)
});
var $d_ju_Random$ = new $TypeData().initClass({
  ju_Random$: 0
}, false, "java.util.Random$", {
  ju_Random$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random$.prototype.$classData = $d_ju_Random$;
var $n_ju_Random$;
function $m_ju_Random$() {
  if ((!$n_ju_Random$)) {
    $n_ju_Random$ = new $c_ju_Random$()
  };
  return $n_ju_Random$
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
  /*<skip>*/
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
    src.copyTo(srcPos, dest, destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
/** @constructor */
function $c_sc_BuildFrom$$anon$5() {
  /*<skip>*/
}
$c_sc_BuildFrom$$anon$5.prototype = new $h_O();
$c_sc_BuildFrom$$anon$5.prototype.constructor = $c_sc_BuildFrom$$anon$5;
/** @constructor */
function $h_sc_BuildFrom$$anon$5() {
  /*<skip>*/
}
$h_sc_BuildFrom$$anon$5.prototype = $c_sc_BuildFrom$$anon$5.prototype;
$c_sc_BuildFrom$$anon$5.prototype.newBuilder__O__scm_Builder = (function(from) {
  return $m_sc_Factory$().sc_Factory$__f_stringFactory.newBuilder__scm_Builder()
});
var $d_sc_BuildFrom$$anon$5 = new $TypeData().initClass({
  sc_BuildFrom$$anon$5: 0
}, false, "scala.collection.BuildFrom$$anon$5", {
  sc_BuildFrom$$anon$5: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFrom$$anon$5.prototype.$classData = $d_sc_BuildFrom$$anon$5;
/** @constructor */
function $c_sc_BuildFrom$$anon$6() {
  /*<skip>*/
}
$c_sc_BuildFrom$$anon$6.prototype = new $h_O();
$c_sc_BuildFrom$$anon$6.prototype.constructor = $c_sc_BuildFrom$$anon$6;
/** @constructor */
function $h_sc_BuildFrom$$anon$6() {
  /*<skip>*/
}
$h_sc_BuildFrom$$anon$6.prototype = $c_sc_BuildFrom$$anon$6.prototype;
$c_sc_BuildFrom$$anon$6.prototype.newBuilder__O__scm_Builder = (function(from) {
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
var $d_sc_BuildFrom$$anon$6 = new $TypeData().initClass({
  sc_BuildFrom$$anon$6: 0
}, false, "scala.collection.BuildFrom$$anon$6", {
  sc_BuildFrom$$anon$6: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFrom$$anon$6.prototype.$classData = $d_sc_BuildFrom$$anon$6;
/** @constructor */
function $c_sc_BuildFromLowPriority2$$anon$11(outer) {
  /*<skip>*/
}
$c_sc_BuildFromLowPriority2$$anon$11.prototype = new $h_O();
$c_sc_BuildFromLowPriority2$$anon$11.prototype.constructor = $c_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $h_sc_BuildFromLowPriority2$$anon$11() {
  /*<skip>*/
}
$h_sc_BuildFromLowPriority2$$anon$11.prototype = $c_sc_BuildFromLowPriority2$$anon$11.prototype;
$c_sc_BuildFromLowPriority2$$anon$11.prototype.newBuilder__O__scm_Builder = (function(from) {
  var from$1 = from;
  return from$1.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder()
});
var $d_sc_BuildFromLowPriority2$$anon$11 = new $TypeData().initClass({
  sc_BuildFromLowPriority2$$anon$11: 0
}, false, "scala.collection.BuildFromLowPriority2$$anon$11", {
  sc_BuildFromLowPriority2$$anon$11: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFromLowPriority2$$anon$11.prototype.$classData = $d_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashMap__f_rootNode);
  while (this.hasNext__Z()) {
    var originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    outer.update__sci_MapNode__O__O__I__I__I__V(outer.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, this.sci_ChampBaseIterator__f_currentValueNode.getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), this.sci_ChampBaseIterator__f_currentValueNode.getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
  }
}
$c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$c_sci_HashMapBuilder$$anon$1.prototype.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
  /*<skip>*/
}
$h_sci_HashMapBuilder$$anon$1.prototype = $c_sci_HashMapBuilder$$anon$1.prototype;
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashMapBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashMapBuilder$$anon$1", {
  sci_HashMapBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashMapBuilder$$anon$1.prototype.$classData = $d_sci_HashMapBuilder$$anon$1;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
/** @constructor */
function $c_sci_MapNode() {
  /*<skip>*/
}
$c_sci_MapNode.prototype = new $h_sci_Node();
$c_sci_MapNode.prototype.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
  /*<skip>*/
}
$h_sci_MapNode.prototype = $c_sci_MapNode.prototype;
function $isArrayOf_sci_MapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapNode)))
}
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
}
/** @constructor */
function $c_sci_Range$() {
  /*<skip>*/
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
  /*<skip>*/
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
});
var $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, xs) {
  if ((xs === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(xs))
  } else {
    var it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $thiz.addOne__O__scm_Growable(it.next__O())
    }
  };
  return $thiz
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_AbstractFunction3() {
  /*<skip>*/
}
$c_sr_AbstractFunction3.prototype = new $h_O();
$c_sr_AbstractFunction3.prototype.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
  /*<skip>*/
}
$h_sr_AbstractFunction3.prototype = $c_sr_AbstractFunction3.prototype;
$c_sr_AbstractFunction3.prototype.toString__T = (function() {
  return "<function3>"
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_LazyDouble() {
  this.sr_LazyDouble__f__initialized = false;
  this.sr_LazyDouble__f__value = 0.0
}
$c_sr_LazyDouble.prototype = new $h_O();
$c_sr_LazyDouble.prototype.constructor = $c_sr_LazyDouble;
/** @constructor */
function $h_sr_LazyDouble() {
  /*<skip>*/
}
$h_sr_LazyDouble.prototype = $c_sr_LazyDouble.prototype;
$c_sr_LazyDouble.prototype.initialize__D__D = (function(value) {
  this.sr_LazyDouble__f__value = value;
  this.sr_LazyDouble__f__initialized = true;
  return value
});
$c_sr_LazyDouble.prototype.toString__T = (function() {
  return ("LazyDouble " + (this.sr_LazyDouble__f__initialized ? ("of: " + this.sr_LazyDouble__f__value) : "thunk"))
});
var $d_sr_LazyDouble = new $TypeData().initClass({
  sr_LazyDouble: 0
}, false, "scala.runtime.LazyDouble", {
  sr_LazyDouble: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyDouble.prototype.$classData = $d_sr_LazyDouble;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
function $p_s_util_Random__swap$1__I__I__scm_ArrayBuffer__V($thiz, i1, i2, buf$1) {
  var tmp = buf$1.apply__I__O(i1);
  buf$1.update__I__O__V(i1, buf$1.apply__I__O(i2));
  buf$1.update__I__O__V(i2, tmp)
}
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.s_util_Random__f_self = self;
  return $thiz
}
/** @constructor */
function $c_s_util_Random() {
  this.s_util_Random__f_self = null
}
$c_s_util_Random.prototype = new $h_O();
$c_s_util_Random.prototype.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
  /*<skip>*/
}
$h_s_util_Random.prototype = $c_s_util_Random.prototype;
$c_s_util_Random.prototype.shuffle__sc_IterableOnce__sc_BuildFrom__O = (function(xs, bf) {
  var this$1 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  var buf = this$1.addAll__sc_IterableOnce__scm_ArrayBuffer(xs);
  var x = buf.scm_ArrayBuffer__f_size0;
  var isEmpty = (x > 2);
  var isEmpty$1 = (x < 2);
  if ((!isEmpty$1)) {
    var i = x;
    while (true) {
      var v1 = i;
      var k = this.s_util_Random__f_self.nextInt__I__I(v1);
      $p_s_util_Random__swap$1__I__I__scm_ArrayBuffer__V(this, (((-1) + v1) | 0), k, buf);
      if ((i === 2)) {
        break
      };
      i = (((-1) + i) | 0)
    }
  };
  var this$13 = bf.newBuilder__O__scm_Builder(xs);
  return this$13.addAll__sc_IterableOnce__scm_Growable(buf).result__O()
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.tuple2Hash__O__O__I = (function(x, y) {
  return this.tuple2Hash__I__I__I__I($m_sr_Statics$().anyHash__O__I(x), $m_sr_Statics$().anyHash__O__I(y), (-889275714))
});
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = xs;
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = xs;
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
$c_s_util_hashing_MurmurHash3$.prototype.mapHash__sc_Map__I = (function(xs) {
  if (xs.isEmpty__Z()) {
    return this.s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.s_util_hashing_MurmurHash3$__f_mapSeed;
    xs.foreachEntry__F2__V(accum);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_a);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_b);
    h = this.mixLast__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_c);
    return this.finalizeHash__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_n)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 1
}
$c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3$accum$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $c_s_util_hashing_MurmurHash3$accum$1.prototype;
$c_s_util_hashing_MurmurHash3$accum$1.prototype.toString__T = (function() {
  return "<function2>"
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__V = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(k, v);
  this.s_util_hashing_MurmurHash3$accum$1__f_a = ((this.s_util_hashing_MurmurHash3$accum$1__f_a + h) | 0);
  this.s_util_hashing_MurmurHash3$accum$1__f_b = (this.s_util_hashing_MurmurHash3$accum$1__f_b ^ h);
  this.s_util_hashing_MurmurHash3$accum$1__f_c = Math.imul(this.s_util_hashing_MurmurHash3$accum$1__f_c, (1 | h));
  this.s_util_hashing_MurmurHash3$accum$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$accum$1__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2)
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$accum$1: 0
}, false, "scala.util.hashing.MurmurHash3$accum$1", {
  s_util_hashing_MurmurHash3$accum$1: 1,
  O: 1,
  F2: 1
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.$classData = $d_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_SimulationSettings$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_SimulationSettings$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_SimulationSettings$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype = $c_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype;
$c_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype.default__Lxyz_bluepitaya_d3force_SimulationSettings = (function() {
  return new $c_Lxyz_bluepitaya_d3force_SimulationSettings(0.001, (1.0 - (+Math.pow(0.001, 0.0033333333333333335))), 0.0, 0.6, new $c_sjsr_AnonFunction3(((alpha$2, target$2, decay$2) => {
    var alpha = (+alpha$2);
    var target = (+target$2);
    var decay = (+decay$2);
    return (alpha + ((target - alpha) * decay))
  })))
});
var $d_Lxyz_bluepitaya_d3force_SimulationSettings$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_SimulationSettings$: 0
}, false, "xyz.bluepitaya.d3force.SimulationSettings$", {
  Lxyz_bluepitaya_d3force_SimulationSettings$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_SimulationSettings$;
var $n_Lxyz_bluepitaya_d3force_SimulationSettings$;
function $m_Lxyz_bluepitaya_d3force_SimulationSettings$() {
  if ((!$n_Lxyz_bluepitaya_d3force_SimulationSettings$)) {
    $n_Lxyz_bluepitaya_d3force_SimulationSettings$ = new $c_Lxyz_bluepitaya_d3force_SimulationSettings$()
  };
  return $n_Lxyz_bluepitaya_d3force_SimulationSettings$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Vec2f$() {
  this.Lxyz_bluepitaya_d3force_Vec2f$__f_zero = null;
  $n_Lxyz_bluepitaya_d3force_Vec2f$ = this;
  this.Lxyz_bluepitaya_d3force_Vec2f$__f_zero = new $c_Lxyz_bluepitaya_d3force_Vec2f(0.0, 0.0)
}
$c_Lxyz_bluepitaya_d3force_Vec2f$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Vec2f$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Vec2f$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Vec2f$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Vec2f$.prototype = $c_Lxyz_bluepitaya_d3force_Vec2f$.prototype;
var $d_Lxyz_bluepitaya_d3force_Vec2f$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Vec2f$: 0
}, false, "xyz.bluepitaya.d3force.Vec2f$", {
  Lxyz_bluepitaya_d3force_Vec2f$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_Vec2f$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Vec2f$;
var $n_Lxyz_bluepitaya_d3force_Vec2f$;
function $m_Lxyz_bluepitaya_d3force_Vec2f$() {
  if ((!$n_Lxyz_bluepitaya_d3force_Vec2f$)) {
    $n_Lxyz_bluepitaya_d3force_Vec2f$ = new $c_Lxyz_bluepitaya_d3force_Vec2f$()
  };
  return $n_Lxyz_bluepitaya_d3force_Vec2f$
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
/** @constructor */
function $c_s_$less$colon$less() {
  /*<skip>*/
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
  /*<skip>*/
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  this.s_Predef$__f_Map = $m_sci_Map$()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
  }
});
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T4__f__1;
      break
    }
    case 1: {
      return $thiz.T4__f__2;
      break
    }
    case 2: {
      return $thiz.T4__f__3;
      break
    }
    case 3: {
      return $thiz.T4__f__4;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"))
    }
  }
}
/** @constructor */
function $c_sc_BuildFrom$() {
  $n_sc_BuildFrom$ = this;
  new $c_sc_BuildFrom$$anon$5();
  new $c_sc_BuildFrom$$anon$6()
}
$c_sc_BuildFrom$.prototype = new $h_O();
$c_sc_BuildFrom$.prototype.constructor = $c_sc_BuildFrom$;
/** @constructor */
function $h_sc_BuildFrom$() {
  /*<skip>*/
}
$h_sc_BuildFrom$.prototype = $c_sc_BuildFrom$.prototype;
var $d_sc_BuildFrom$ = new $TypeData().initClass({
  sc_BuildFrom$: 0
}, false, "scala.collection.BuildFrom$", {
  sc_BuildFrom$: 1,
  O: 1,
  sc_BuildFromLowPriority1: 1,
  sc_BuildFromLowPriority2: 1
});
$c_sc_BuildFrom$.prototype.$classData = $d_sc_BuildFrom$;
var $n_sc_BuildFrom$;
function $m_sc_BuildFrom$() {
  if ((!$n_sc_BuildFrom$)) {
    $n_sc_BuildFrom$ = new $c_sc_BuildFrom$()
  };
  return $n_sc_BuildFrom$
}
/** @constructor */
function $c_sc_Factory$StringFactory() {
  /*<skip>*/
}
$c_sc_Factory$StringFactory.prototype = new $h_O();
$c_sc_Factory$StringFactory.prototype.constructor = $c_sc_Factory$StringFactory;
/** @constructor */
function $h_sc_Factory$StringFactory() {
  /*<skip>*/
}
$h_sc_Factory$StringFactory.prototype = $c_sc_Factory$StringFactory.prototype;
$c_sc_Factory$StringFactory.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
var $d_sc_Factory$StringFactory = new $TypeData().initClass({
  sc_Factory$StringFactory: 0
}, false, "scala.collection.Factory$StringFactory", {
  sc_Factory$StringFactory: 1,
  O: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Factory$StringFactory.prototype.$classData = $d_sc_Factory$StringFactory;
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
$c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.sc_IterableFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
});
$c_sc_IterableFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return this.sc_IterableFactory$Delegate__f_delegate.newBuilder__scm_Builder()
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return 1
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f))
}
function $f_sc_IterableOps__flatMap__F1__O($thiz, f) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(new $c_sc_View$FlatMap($thiz, f))
}
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs)
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
}
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
$c_sc_Iterator$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sc_Iterator$$anon$21()
});
$c_sc_Iterator$.prototype.from__sc_IterableOnce__O = (function(source) {
  return source.iterator__sc_Iterator()
});
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.sc_MapFactory$Delegate__f_delegate = null
}
$c_sc_MapFactory$Delegate.prototype = new $h_O();
$c_sc_MapFactory$Delegate.prototype.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
  /*<skip>*/
}
$h_sc_MapFactory$Delegate.prototype = $c_sc_MapFactory$Delegate.prototype;
$c_sc_MapFactory$Delegate.prototype.empty__O = (function() {
  return this.sc_MapFactory$Delegate__f_delegate.empty__O()
});
$c_sc_MapFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return this.sc_MapFactory$Delegate__f_delegate.newBuilder__scm_Builder()
});
/** @constructor */
function $c_sc_View$() {
  /*<skip>*/
}
$c_sc_View$.prototype = new $h_O();
$c_sc_View$.prototype.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
  /*<skip>*/
}
$h_sc_View$.prototype = $c_sc_View$.prototype;
$c_sc_View$.prototype.from__sc_IterableOnce__sc_View = (function(it) {
  if ($is_sc_View(it)) {
    var x2 = it;
    return x2
  } else if ($is_sc_Iterable(it)) {
    var x3 = it;
    var it$1 = new $c_sjsr_AnonFunction0((() => x3.iterator__sc_Iterator()));
    return new $c_sc_View$$anon$1(it$1)
  } else {
    var this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
    return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
  }
});
$c_sc_View$.prototype.newBuilder__scm_Builder = (function() {
  var this$3 = new $c_scm_ArrayBuffer$$anon$1();
  var f = new $c_sjsr_AnonFunction1(((it$2) => {
    var it = it$2;
    return $m_sc_View$().from__sc_IterableOnce__sc_View(it)
  }));
  return new $c_scm_Builder$$anon$1(this$3, f)
});
$c_sc_View$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_View(source)
});
var $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.sci_BitmapIndexedMapNode__f_dataMap = 0;
  this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
  this.sci_BitmapIndexedMapNode__f_content = null;
  this.sci_BitmapIndexedMapNode__f_originalHashes = null;
  this.sci_BitmapIndexedMapNode__f_size = 0;
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
  this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
  this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
  this.sci_BitmapIndexedMapNode__f_content = content;
  this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
  this.sci_BitmapIndexedMapNode__f_size = size;
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
}
$c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$c_sci_BitmapIndexedMapNode.prototype.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
  /*<skip>*/
}
$h_sci_BitmapIndexedMapNode.prototype = $c_sci_BitmapIndexedMapNode.prototype;
$c_sci_BitmapIndexedMapNode.prototype.size__I = (function() {
  return this.sci_BitmapIndexedMapNode__f_size
});
$c_sci_BitmapIndexedMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
  return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode
});
$c_sci_BitmapIndexedMapNode.prototype.getKey__I__O = (function(index) {
  return this.sci_BitmapIndexedMapNode__f_content.u[(index << 1)]
});
$c_sci_BitmapIndexedMapNode.prototype.getValue__I__O = (function(index) {
  return this.sci_BitmapIndexedMapNode__f_content.u[((1 + (index << 1)) | 0)]
});
$c_sci_BitmapIndexedMapNode.prototype.getPayload__I__T2 = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.sci_BitmapIndexedMapNode__f_content.u[(index << 1)], this.sci_BitmapIndexedMapNode__f_content.u[((1 + (index << 1)) | 0)])
});
$c_sci_BitmapIndexedMapNode.prototype.getHash__I__I = (function(index) {
  return this.sci_BitmapIndexedMapNode__f_originalHashes.u[index]
});
$c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
  return this.sci_BitmapIndexedMapNode__f_content.u[(((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - index) | 0)]
});
$c_sci_BitmapIndexedMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
      return this.getValue__I__O(index)
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    return this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0))
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_BitmapIndexedMapNode.prototype.get__O__I__I__I__s_Option = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? new $c_s_Some(this.getValue__I__O(index)) : $m_s_None$())
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    return this.getNode__I__sci_MapNode(index$2).get__O__I__I__I__s_Option(key, originalHash, keyHash, ((5 + shift) | 0))
  } else {
    return $m_s_None$()
  }
});
$c_sci_BitmapIndexedMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : f.apply__O())
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    return this.getNode__I__sci_MapNode(index$2).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f)
  } else {
    return f.apply__O()
  }
});
$c_sci_BitmapIndexedMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    return ((this.sci_BitmapIndexedMapNode__f_originalHashes.u[index] === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)))
  } else {
    return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)))
  }
});
$c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    var key0UnimprovedHash = this.getHash__I__I(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
      if (replaceValue) {
        var value0 = this.getValue__I__O(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value))
      } else {
        return this
      }
    } else {
      var value0$2 = this.getValue__I__O(index);
      var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
      var subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
      return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
    }
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    var subNode = this.getNode__I__sci_MapNode(index$2);
    var subNodeNew$2 = subNode.updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2))
  } else {
    return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value)
  }
});
$c_sci_BitmapIndexedMapNode.prototype.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    var this$4 = $m_sci_Vector$();
    var array = [$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)];
    var elems = new $c_sjsr_WrappedVarArgs(array);
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
  } else {
    var mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
    var mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash))
    } else {
      var nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
      var node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
    }
  }
});
$c_sci_BitmapIndexedMapNode.prototype.hasNodes__Z = (function() {
  return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0)
});
$c_sci_BitmapIndexedMapNode.prototype.nodeArity__I = (function() {
  var i = this.sci_BitmapIndexedMapNode__f_nodeMap;
  return $m_jl_Integer$().bitCount__I__I(i)
});
$c_sci_BitmapIndexedMapNode.prototype.hasPayload__Z = (function() {
  return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0)
});
$c_sci_BitmapIndexedMapNode.prototype.payloadArity__I = (function() {
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  return $m_jl_Integer$().bitCount__I__I(i)
});
$c_sci_BitmapIndexedMapNode.prototype.dataIndex__I__I = (function(bitpos) {
  var i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i)
});
$c_sci_BitmapIndexedMapNode.prototype.nodeIndex__I__I = (function(bitpos) {
  var i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i)
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode = (function(bitpos, newKey, newValue) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(src.u.length);
  var length = src.u.length;
  src.copyTo(0, dst, 0, length);
  dst.u[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(src.u.length);
  var length = src.u.length;
  src.copyTo(0, dst, 0, length);
  dst.u[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(((2 + src.u.length) | 0));
  src.copyTo(0, dst, 0, idx);
  dst.u[idx] = key;
  dst.u[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.u.length - idx) | 0);
  src.copyTo(idx, dst, destPos, length);
  var dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0))
});
$c_sci_BitmapIndexedMapNode.prototype.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O((((-1) + src.u.length) | 0));
  src.copyTo(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.copyTo(srcPos, dst, idxOld, length);
  dst.u[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
  src.copyTo(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
  this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
  this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
  this.sci_BitmapIndexedMapNode__f_content = dst;
  this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0);
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
  return this
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O((((-1) + src.u.length) | 0));
  src.copyTo(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.copyTo(srcPos, dst, idxOld, length);
  dst.u[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
  src.copyTo(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
});
$c_sci_BitmapIndexedMapNode.prototype.foreachEntry__F2__V = (function(f) {
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  var iN = $m_jl_Integer$().bitCount__I__I(i);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.apply__O__O__O(this.getKey__I__O(i$1), this.getValue__I__O(i$1));
    i$1 = ((1 + i$1) | 0)
  };
  var i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
  var jN = $m_jl_Integer$().bitCount__I__I(i$2);
  var j = 0;
  while ((j < jN)) {
    this.getNode__I__sci_MapNode(j).foreachEntry__F2__V(f);
    j = ((1 + j) | 0)
  }
});
$c_sci_BitmapIndexedMapNode.prototype.foreachWithHash__F3__V = (function(f) {
  var i = 0;
  var i$1 = this.sci_BitmapIndexedMapNode__f_dataMap;
  var iN = $m_jl_Integer$().bitCount__I__I(i$1);
  while ((i < iN)) {
    f.apply__O__O__O__O(this.getKey__I__O(i), this.getValue__I__O(i), this.getHash__I__I(i));
    i = ((1 + i) | 0)
  };
  var i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
  var jN = $m_jl_Integer$().bitCount__I__I(i$2);
  var j = 0;
  while ((j < jN)) {
    this.getNode__I__sci_MapNode(j).foreachWithHash__F3__V(f);
    j = ((1 + j) | 0)
  }
});
$c_sci_BitmapIndexedMapNode.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    var x2 = that;
    if ((this === x2)) {
      return true
    } else {
      if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === x2.sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === x2.sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === x2.sci_BitmapIndexedMapNode__f_size))) {
        var a = this.sci_BitmapIndexedMapNode__f_originalHashes;
        var b = x2.sci_BitmapIndexedMapNode__f_originalHashes;
        var $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var a1 = this.sci_BitmapIndexedMapNode__f_content;
        var a2 = x2.sci_BitmapIndexedMapNode__f_content;
        var length = this.sci_BitmapIndexedMapNode__f_content.u.length;
        if ((a1 === a2)) {
          return true
        } else {
          var isEqual = true;
          var i = 0;
          while ((isEqual && (i < length))) {
            isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.u[i], a2.u[i]);
            i = ((1 + i) | 0)
          };
          return isEqual
        }
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_sci_BitmapIndexedMapNode.prototype.hashCode__I = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.")
});
$c_sci_BitmapIndexedMapNode.prototype.copy__sci_BitmapIndexedMapNode = (function() {
  var this$1 = this.sci_BitmapIndexedMapNode__f_content;
  var contentClone = this$1.clone__O();
  var contentLength = contentClone.u.length;
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  var i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
  while ((i$1 < contentLength)) {
    contentClone.u[i$1] = contentClone.u[i$1].copy__sci_MapNode();
    i$1 = ((1 + i$1) | 0)
  };
  var $$x2 = this.sci_BitmapIndexedMapNode__f_dataMap;
  var $$x1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
  var this$2 = this.sci_BitmapIndexedMapNode__f_originalHashes;
  return new $c_sci_BitmapIndexedMapNode($$x2, $$x1, contentClone, this$2.clone__O(), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
});
$c_sci_BitmapIndexedMapNode.prototype.copy__sci_MapNode = (function() {
  return this.copy__sci_BitmapIndexedMapNode()
});
$c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue)
});
$c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_Node = (function(index) {
  return this.getNode__I__sci_MapNode(index)
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedMapNode)))
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().initClass({
  sci_BitmapIndexedMapNode: 0
}, false, "scala.collection.immutable.BitmapIndexedMapNode", {
  sci_BitmapIndexedMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedMapNode.prototype.$classData = $d_sci_BitmapIndexedMapNode;
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.sci_HashCollisionMapNode__f_originalHash = 0;
  this.sci_HashCollisionMapNode__f_hash = 0;
  this.sci_HashCollisionMapNode__f_content = null;
  this.sci_HashCollisionMapNode__f_originalHash = originalHash;
  this.sci_HashCollisionMapNode__f_hash = hash;
  this.sci_HashCollisionMapNode__f_content = content;
  $m_s_Predef$().require__Z__V((this.sci_HashCollisionMapNode__f_content.length__I() >= 2))
}
$c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$c_sci_HashCollisionMapNode.prototype.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
  /*<skip>*/
}
$h_sci_HashCollisionMapNode.prototype = $c_sci_HashCollisionMapNode.prototype;
$c_sci_HashCollisionMapNode.prototype.indexOf__O__I = (function(key) {
  var iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
  var i = 0;
  while (iter.hasNext__Z()) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(iter.next__O()._1__O(), key)) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
$c_sci_HashCollisionMapNode.prototype.size__I = (function() {
  return this.sci_HashCollisionMapNode__f_content.length__I()
});
$c_sci_HashCollisionMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, hash, shift) {
  var this$1 = this.get__O__I__I__I__s_Option(key, originalHash, hash, shift);
  if (this$1.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  } else {
    return this$1.get__O()
  }
});
$c_sci_HashCollisionMapNode.prototype.get__O__I__I__I__s_Option = (function(key, originalHash, hash, shift) {
  if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
    var index = this.indexOf__O__I(key);
    return ((index >= 0) ? new $c_s_Some(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)._2__O()) : $m_s_None$())
  } else {
    return $m_s_None$()
  }
});
$c_sci_HashCollisionMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, hash, shift, f) {
  if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
    var x1 = this.indexOf__O__I(key);
    return ((x1 === (-1)) ? f.apply__O() : this.sci_HashCollisionMapNode__f_content.apply__I__O(x1)._2__O())
  } else {
    return f.apply__O()
  }
});
$c_sci_HashCollisionMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, hash, shift) {
  return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0))
});
$c_sci_HashCollisionMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.indexOf__O__I(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)._2__O(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.updated__I__O__sci_Vector(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector($ct_T2__O__O__(new $c_T2(), key, value))))
});
$c_sci_HashCollisionMapNode.prototype.hasNodes__Z = (function() {
  return false
});
$c_sci_HashCollisionMapNode.prototype.nodeArity__I = (function() {
  return 0
});
$c_sci_HashCollisionMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
});
$c_sci_HashCollisionMapNode.prototype.hasPayload__Z = (function() {
  return true
});
$c_sci_HashCollisionMapNode.prototype.payloadArity__I = (function() {
  return this.sci_HashCollisionMapNode__f_content.length__I()
});
$c_sci_HashCollisionMapNode.prototype.getKey__I__O = (function(index) {
  return this.sci_HashCollisionMapNode__f_content.apply__I__O(index)._1__O()
});
$c_sci_HashCollisionMapNode.prototype.getValue__I__O = (function(index) {
  return this.sci_HashCollisionMapNode__f_content.apply__I__O(index)._2__O()
});
$c_sci_HashCollisionMapNode.prototype.getPayload__I__T2 = (function(index) {
  return this.sci_HashCollisionMapNode__f_content.apply__I__O(index)
});
$c_sci_HashCollisionMapNode.prototype.getHash__I__I = (function(index) {
  return this.sci_HashCollisionMapNode__f_originalHash
});
$c_sci_HashCollisionMapNode.prototype.foreachEntry__F2__V = (function(f) {
  this.sci_HashCollisionMapNode__f_content.foreach__F1__V(new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = x0$1$2;
    if ((x0$1 !== null)) {
      var k = x0$1._1__O();
      var v = x0$1._2__O();
      return f.apply__O__O__O(k, v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  })))
});
$c_sci_HashCollisionMapNode.prototype.foreachWithHash__F3__V = (function(f) {
  var iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
  while (iter.hasNext__Z()) {
    var next = iter.next__O();
    f.apply__O__O__O__O(next._1__O(), next._2__O(), this.sci_HashCollisionMapNode__f_originalHash)
  }
});
$c_sci_HashCollisionMapNode.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    var x2 = that;
    if ((this === x2)) {
      return true
    } else if (((this.sci_HashCollisionMapNode__f_hash === x2.sci_HashCollisionMapNode__f_hash) && (this.sci_HashCollisionMapNode__f_content.length__I() === x2.sci_HashCollisionMapNode__f_content.length__I()))) {
      var iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
      while (iter.hasNext__Z()) {
        var x1$2 = iter.next__O();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2)
        };
        var key = x1$2._1__O();
        var value = x1$2._2__O();
        var index = x2.indexOf__O__I(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, x2.sci_HashCollisionMapNode__f_content.apply__I__O(index)._2__O())))) {
          return false
        }
      };
      return true
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_sci_HashCollisionMapNode.prototype.hashCode__I = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.")
});
$c_sci_HashCollisionMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
  return Math.imul(this.sci_HashCollisionMapNode__f_content.length__I(), this.sci_HashCollisionMapNode__f_hash)
});
$c_sci_HashCollisionMapNode.prototype.copy__sci_MapNode = (function() {
  return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content)
});
$c_sci_HashCollisionMapNode.prototype.getNode__I__sci_Node = (function(index) {
  return this.getNode__I__sci_MapNode(index)
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionMapNode)))
}
var $d_sci_HashCollisionMapNode = new $TypeData().initClass({
  sci_HashCollisionMapNode: 0
}, false, "scala.collection.immutable.HashCollisionMapNode", {
  sci_HashCollisionMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionMapNode.prototype.$classData = $d_sci_HashCollisionMapNode;
/** @constructor */
function $c_sci_HashMap$() {
  this.sci_HashMap$__f_EmptyMap = null;
  $n_sci_HashMap$ = this;
  var this$1 = $m_sci_MapNode$();
  this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1.sci_MapNode$__f_EmptyMapNode)
}
$c_sci_HashMap$.prototype = new $h_O();
$c_sci_HashMap$.prototype.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
  /*<skip>*/
}
$h_sci_HashMap$.prototype = $c_sci_HashMap$.prototype;
$c_sci_HashMap$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_HashMapBuilder()
});
$c_sci_HashMap$.prototype.empty__O = (function() {
  return this.sci_HashMap$__f_EmptyMap
});
var $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
  /*<skip>*/
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
/** @constructor */
function $c_sci_Map$() {
  /*<skip>*/
}
$c_sci_Map$.prototype = new $h_O();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
$c_sci_Map$.prototype.from__sc_IterableOnce__sci_Map = (function(it) {
  if ($is_sci_Iterable(it)) {
    var x2 = it;
    if (x2.isEmpty__Z()) {
      return $m_sci_Map$EmptyMap$()
    }
  };
  if ($is_sci_Map(it)) {
    var x3 = it;
    return x3
  };
  var this$1 = new $c_sci_MapBuilderImpl();
  var this$2 = this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it);
  return this$2.result__sci_Map()
});
$c_sci_Map$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_MapBuilderImpl()
});
$c_sci_Map$.prototype.empty__O = (function() {
  return $m_sci_Map$EmptyMap$()
});
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
/** @constructor */
function $c_scm_HashMap$() {
  /*<skip>*/
}
$c_scm_HashMap$.prototype = new $h_O();
$c_scm_HashMap$.prototype.constructor = $c_scm_HashMap$;
/** @constructor */
function $h_scm_HashMap$() {
  /*<skip>*/
}
$h_scm_HashMap$.prototype = $c_scm_HashMap$.prototype;
$c_scm_HashMap$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_HashMap$$anon$6(16, 0.75)
});
$c_scm_HashMap$.prototype.empty__O = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap())
});
var $d_scm_HashMap$ = new $TypeData().initClass({
  scm_HashMap$: 0
}, false, "scala.collection.mutable.HashMap$", {
  scm_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap$.prototype.$classData = $d_scm_HashMap$;
var $n_scm_HashMap$;
function $m_scm_HashMap$() {
  if ((!$n_scm_HashMap$)) {
    $n_scm_HashMap$ = new $c_scm_HashMap$()
  };
  return $n_scm_HashMap$
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_sjsr_AnonFunction3(f) {
  this.sjsr_AnonFunction3__f_f = null;
  this.sjsr_AnonFunction3__f_f = f
}
$c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$c_sjsr_AnonFunction3.prototype.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
  /*<skip>*/
}
$h_sjsr_AnonFunction3.prototype = $c_sjsr_AnonFunction3.prototype;
$c_sjsr_AnonFunction3.prototype.apply__O__O__O__O = (function(arg1, arg2, arg3) {
  return (0, this.sjsr_AnonFunction3__f_f)(arg1, arg2, arg3)
});
var $d_sjsr_AnonFunction3 = new $TypeData().initClass({
  sjsr_AnonFunction3: 0
}, false, "scala.scalajs.runtime.AnonFunction3", {
  sjsr_AnonFunction3: 1,
  sr_AbstractFunction3: 1,
  O: 1,
  F3: 1
});
$c_sjsr_AnonFunction3.prototype.$classData = $d_sjsr_AnonFunction3;
/** @constructor */
function $c_s_util_Random$() {
  this.s_util_Random__f_self = null;
  $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()))
}
$c_s_util_Random$.prototype = new $h_s_util_Random();
$c_s_util_Random$.prototype.constructor = $c_s_util_Random$;
/** @constructor */
function $h_s_util_Random$() {
  /*<skip>*/
}
$h_s_util_Random$.prototype = $c_s_util_Random$.prototype;
var $d_s_util_Random$ = new $TypeData().initClass({
  s_util_Random$: 0
}, false, "scala.util.Random$", {
  s_util_Random$: 1,
  s_util_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Random$.prototype.$classData = $d_s_util_Random$;
var $n_s_util_Random$;
function $m_s_util_Random$() {
  if ((!$n_s_util_Random$)) {
    $n_s_util_Random$ = new $c_s_util_Random$()
  };
  return $n_s_util_Random$
}
/** @constructor */
function $c_Lexample_JsData(nodes, links) {
  this.Lexample_JsData__f_nodes = null;
  this.Lexample_JsData__f_links = null;
  this.Lexample_JsData__f_nodes = nodes;
  this.Lexample_JsData__f_links = links
}
$c_Lexample_JsData.prototype = new $h_O();
$c_Lexample_JsData.prototype.constructor = $c_Lexample_JsData;
/** @constructor */
function $h_Lexample_JsData() {
  /*<skip>*/
}
$h_Lexample_JsData.prototype = $c_Lexample_JsData.prototype;
$c_Lexample_JsData.prototype.productPrefix__T = (function() {
  return "JsData"
});
$c_Lexample_JsData.prototype.productArity__I = (function() {
  return 2
});
$c_Lexample_JsData.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lexample_JsData__f_nodes;
      break
    }
    case 1: {
      return this.Lexample_JsData__f_links;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lexample_JsData.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lexample_JsData.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lexample_JsData.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lexample_JsData.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lexample_JsData)) {
    var JsData$1 = x$1;
    var x = this.Lexample_JsData__f_nodes;
    var y = JsData$1.Lexample_JsData__f_nodes;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
      var x$2 = this.Lexample_JsData__f_links;
      var y$1 = JsData$1.Lexample_JsData__f_links;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$1)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lexample_JsData.prototype.$js$exported$prop$nodes__O = (function() {
  return this.Lexample_JsData__f_nodes
});
$c_Lexample_JsData.prototype.$js$exported$prop$links__O = (function() {
  return this.Lexample_JsData__f_links
});
Object.defineProperty($c_Lexample_JsData.prototype, "links", {
  "get": (function() {
    return this.$js$exported$prop$links__O()
  }),
  "configurable": true
});
Object.defineProperty($c_Lexample_JsData.prototype, "nodes", {
  "get": (function() {
    return this.$js$exported$prop$nodes__O()
  }),
  "configurable": true
});
function $isArrayOf_Lexample_JsData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lexample_JsData)))
}
var $d_Lexample_JsData = new $TypeData().initClass({
  Lexample_JsData: 0
}, false, "example.JsData", {
  Lexample_JsData: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lexample_JsData.prototype.$classData = $d_Lexample_JsData;
/** @constructor */
function $c_Lexample_JsLink(source, target) {
  this.Lexample_JsLink__f_source = null;
  this.Lexample_JsLink__f_target = null;
  this.Lexample_JsLink__f_source = source;
  this.Lexample_JsLink__f_target = target
}
$c_Lexample_JsLink.prototype = new $h_O();
$c_Lexample_JsLink.prototype.constructor = $c_Lexample_JsLink;
/** @constructor */
function $h_Lexample_JsLink() {
  /*<skip>*/
}
$h_Lexample_JsLink.prototype = $c_Lexample_JsLink.prototype;
$c_Lexample_JsLink.prototype.productPrefix__T = (function() {
  return "JsLink"
});
$c_Lexample_JsLink.prototype.productArity__I = (function() {
  return 2
});
$c_Lexample_JsLink.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lexample_JsLink__f_source;
      break
    }
    case 1: {
      return this.Lexample_JsLink__f_target;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lexample_JsLink.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lexample_JsLink.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lexample_JsLink.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lexample_JsLink.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lexample_JsLink)) {
    var JsLink$1 = x$1;
    return ((this.Lexample_JsLink__f_source === JsLink$1.Lexample_JsLink__f_source) && (this.Lexample_JsLink__f_target === JsLink$1.Lexample_JsLink__f_target))
  } else {
    return false
  }
});
$c_Lexample_JsLink.prototype.$js$exported$prop$source__O = (function() {
  return this.Lexample_JsLink__f_source
});
$c_Lexample_JsLink.prototype.$js$exported$prop$target__O = (function() {
  return this.Lexample_JsLink__f_target
});
Object.defineProperty($c_Lexample_JsLink.prototype, "target", {
  "get": (function() {
    return this.$js$exported$prop$target__O()
  }),
  "configurable": true
});
Object.defineProperty($c_Lexample_JsLink.prototype, "source", {
  "get": (function() {
    return this.$js$exported$prop$source__O()
  }),
  "configurable": true
});
function $isArrayOf_Lexample_JsLink(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lexample_JsLink)))
}
var $d_Lexample_JsLink = new $TypeData().initClass({
  Lexample_JsLink: 0
}, false, "example.JsLink", {
  Lexample_JsLink: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lexample_JsLink.prototype.$classData = $d_Lexample_JsLink;
/** @constructor */
function $c_Lexample_JsNode(id, position, velocity) {
  this.Lexample_JsNode__f_id = null;
  this.Lexample_JsNode__f_position = null;
  this.Lexample_JsNode__f_velocity = null;
  this.Lexample_JsNode__f_id = id;
  this.Lexample_JsNode__f_position = position;
  this.Lexample_JsNode__f_velocity = velocity
}
$c_Lexample_JsNode.prototype = new $h_O();
$c_Lexample_JsNode.prototype.constructor = $c_Lexample_JsNode;
/** @constructor */
function $h_Lexample_JsNode() {
  /*<skip>*/
}
$h_Lexample_JsNode.prototype = $c_Lexample_JsNode.prototype;
$c_Lexample_JsNode.prototype.productPrefix__T = (function() {
  return "JsNode"
});
$c_Lexample_JsNode.prototype.productArity__I = (function() {
  return 3
});
$c_Lexample_JsNode.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lexample_JsNode__f_id;
      break
    }
    case 1: {
      return this.Lexample_JsNode__f_position;
      break
    }
    case 2: {
      return this.Lexample_JsNode__f_velocity;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lexample_JsNode.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lexample_JsNode.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lexample_JsNode.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lexample_JsNode.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lexample_JsNode)) {
    var JsNode$1 = x$1;
    if ((this.Lexample_JsNode__f_id === JsNode$1.Lexample_JsNode__f_id)) {
      var x = this.Lexample_JsNode__f_position;
      var x$2 = JsNode$1.Lexample_JsNode__f_position;
      var $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$3 = this.Lexample_JsNode__f_velocity;
      var x$4 = JsNode$1.Lexample_JsNode__f_velocity;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lexample_JsNode.prototype.$js$exported$prop$id__O = (function() {
  return this.Lexample_JsNode__f_id
});
$c_Lexample_JsNode.prototype.$js$exported$prop$position__O = (function() {
  return this.Lexample_JsNode__f_position
});
$c_Lexample_JsNode.prototype.$js$exported$prop$velocity__O = (function() {
  return this.Lexample_JsNode__f_velocity
});
Object.defineProperty($c_Lexample_JsNode.prototype, "velocity", {
  "get": (function() {
    return this.$js$exported$prop$velocity__O()
  }),
  "configurable": true
});
Object.defineProperty($c_Lexample_JsNode.prototype, "position", {
  "get": (function() {
    return this.$js$exported$prop$position__O()
  }),
  "configurable": true
});
Object.defineProperty($c_Lexample_JsNode.prototype, "id", {
  "get": (function() {
    return this.$js$exported$prop$id__O()
  }),
  "configurable": true
});
function $isArrayOf_Lexample_JsNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lexample_JsNode)))
}
var $d_Lexample_JsNode = new $TypeData().initClass({
  Lexample_JsNode: 0
}, false, "example.JsNode", {
  Lexample_JsNode: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lexample_JsNode.prototype.$classData = $d_Lexample_JsNode;
/** @constructor */
function $c_Lexample_Vec2d(x, y) {
  this.Lexample_Vec2d__f_x = 0;
  this.Lexample_Vec2d__f_y = 0;
  this.Lexample_Vec2d__f_x = x;
  this.Lexample_Vec2d__f_y = y
}
$c_Lexample_Vec2d.prototype = new $h_O();
$c_Lexample_Vec2d.prototype.constructor = $c_Lexample_Vec2d;
/** @constructor */
function $h_Lexample_Vec2d() {
  /*<skip>*/
}
$h_Lexample_Vec2d.prototype = $c_Lexample_Vec2d.prototype;
$c_Lexample_Vec2d.prototype.productPrefix__T = (function() {
  return "Vec2d"
});
$c_Lexample_Vec2d.prototype.productArity__I = (function() {
  return 2
});
$c_Lexample_Vec2d.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lexample_Vec2d__f_x;
      break
    }
    case 1: {
      return this.Lexample_Vec2d__f_y;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lexample_Vec2d.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lexample_Vec2d.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Vec2d");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Lexample_Vec2d__f_x;
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = this.Lexample_Vec2d__f_y;
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lexample_Vec2d.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lexample_Vec2d.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lexample_Vec2d)) {
    var Vec2d$1 = x$1;
    return ((this.Lexample_Vec2d__f_x === Vec2d$1.Lexample_Vec2d__f_x) && (this.Lexample_Vec2d__f_y === Vec2d$1.Lexample_Vec2d__f_y))
  } else {
    return false
  }
});
$c_Lexample_Vec2d.prototype.$js$exported$prop$x__O = (function() {
  return this.Lexample_Vec2d__f_x
});
$c_Lexample_Vec2d.prototype.$js$exported$prop$y__O = (function() {
  return this.Lexample_Vec2d__f_y
});
Object.defineProperty($c_Lexample_Vec2d.prototype, "y", {
  "get": (function() {
    return this.$js$exported$prop$y__O()
  }),
  "configurable": true
});
Object.defineProperty($c_Lexample_Vec2d.prototype, "x", {
  "get": (function() {
    return this.$js$exported$prop$x__O()
  }),
  "configurable": true
});
function $isArrayOf_Lexample_Vec2d(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lexample_Vec2d)))
}
var $d_Lexample_Vec2d = new $TypeData().initClass({
  Lexample_Vec2d: 0
}, false, "example.Vec2d", {
  Lexample_Vec2d: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lexample_Vec2d.prototype.$classData = $d_Lexample_Vec2d;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC(that);
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return String.fromCharCode($thiz)
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return this$1.charCodeAt(index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
/** @constructor */
function $c_s_$eq$colon$eq() {
  /*<skip>*/
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
  /*<skip>*/
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sc_AbstractIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterator.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sc_AbstractIterator.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sc_AbstractIterator.prototype.toSeq__sci_Seq = (function() {
  return $m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
/** @constructor */
function $c_sc_Map$() {
  this.sc_MapFactory$Delegate__f_delegate = null;
  this.sc_Map$__f_DefaultSentinel = null;
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.sc_Map$__f_DefaultSentinel = $ct_O__(new $c_O());
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = new $c_sjsr_AnonFunction0((() => $m_sc_Map$().sc_Map$__f_DefaultSentinel))
}
$c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$c_sc_Map$.prototype.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
  /*<skip>*/
}
$h_sc_Map$.prototype = $c_sc_Map$.prototype;
var $d_sc_Map$ = new $TypeData().initClass({
  sc_Map$: 0
}, false, "scala.collection.Map$", {
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Map$.prototype.$classData = $d_sc_Map$;
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$()
  };
  return $n_sc_Map$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__sc_SeqOps = (function(elems) {
  return this.sc_SeqFactory$Delegate__f_delegate.apply__sci_Seq__O(elems)
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
});
$c_sc_SeqFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return this.sc_SeqFactory$Delegate__f_delegate.newBuilder__scm_Builder()
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source)
});
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__O = (function(elems) {
  return this.apply__sci_Seq__sc_SeqOps(elems)
});
function $f_sc_SeqOps__appended__O__O($thiz, elem) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(new $c_sc_View$Appended($thiz, elem))
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder();
  var it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    var elem = f.apply__O__O(it.next__O());
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O()
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder();
  var it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    var xs = f.apply__O__O(it.next__O());
    b.addAll__sc_IterableOnce__scm_Growable(xs)
  };
  return b.result__O()
}
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
$c_sci_Iterable$.prototype.from__sc_IterableOnce__sci_Iterable = (function(it) {
  if ($is_sci_Iterable(it)) {
    var x2 = it;
    return x2
  } else {
    return $c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it)
  }
});
$c_sci_Iterable$.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.from__sc_IterableOnce__sci_Iterable(it)
});
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_LazyList(elems)
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$flatMapImpl__sci_LazyList__F1__sci_LazyList = (function(ll, f) {
  var restRef = new $c_sr_ObjectRef(ll);
  var state$1 = new $c_sjsr_AnonFunction0((() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var elem = restRef.sr_ObjectRef__f_elem;
    var rest = new $c_sr_ObjectRef(elem);
    while (((!itHasNext) && (!rest.sr_ObjectRef__f_elem.isEmpty__Z()))) {
      var this$5 = rest.sr_ObjectRef__f_elem;
      it.sr_ObjectRef__f_elem = f.apply__O__O(this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()).iterator__sc_Iterator();
      itHasNext = it.sr_ObjectRef__f_elem.hasNext__Z();
      if ((!itHasNext)) {
        var this$6 = rest.sr_ObjectRef__f_elem;
        rest.sr_ObjectRef__f_elem = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef.sr_ObjectRef__f_elem = rest.sr_ObjectRef__f_elem
      }
    };
    if (itHasNext) {
      var head = it.sr_ObjectRef__f_elem.next__O();
      var this$7 = rest.sr_ObjectRef__f_elem;
      rest.sr_ObjectRef__f_elem = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest.sr_ObjectRef__f_elem;
      $m_sci_LazyList$();
      $m_sci_LazyList$();
      var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it.sr_ObjectRef__f_elem, new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$flatMapImpl__sci_LazyList__F1__sci_LazyList(rest.sr_ObjectRef__f_elem, f).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))));
      var tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(head, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  }));
  return new $c_sci_LazyList(state$1)
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = restRef.sr_ObjectRef__f_elem;
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!rest.isEmpty__Z()))) {
      var this$4 = rest;
      rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = coll;
    return x2
  } else if ((coll.knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll.iterator__sc_Iterator())));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State = (function(it, suffix) {
  if (it.hasNext__Z()) {
    var hd = it.next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return suffix.apply__O()
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if (it.hasNext__Z()) {
    var hd = it.next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $m_sci_LazyList$State$Empty$()
  }
});
$c_sci_LazyList$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_LazyList$LazyBuilder()
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
/** @constructor */
function $c_sci_WrappedString$() {
  $n_sci_WrappedString$ = this;
  new $c_sci_WrappedString("")
}
$c_sci_WrappedString$.prototype = new $h_O();
$c_sci_WrappedString$.prototype.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
  /*<skip>*/
}
$h_sci_WrappedString$.prototype = $c_sci_WrappedString$.prototype;
$c_sci_WrappedString$.prototype.newBuilder__scm_Builder = (function() {
  var this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  var f = new $c_sjsr_AnonFunction1(((x$2) => {
    var x = x$2;
    return new $c_sci_WrappedString(x)
  }));
  return new $c_scm_Builder$$anon$1(this$2, f)
});
var $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scm_Builder$$anon$1__f_$outer = outer
  };
  this.scm_Builder$$anon$1__f_f$1 = f$1
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = this.scm_Builder$$anon$1__f_$outer;
  this$1.addOne__O__scm_Growable(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = this.scm_Builder$$anon$1__f_$outer;
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.scm_GrowableBuilder__f_elems = null
}
$c_scm_GrowableBuilder.prototype = new $h_O();
$c_scm_GrowableBuilder.prototype.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
  /*<skip>*/
}
$h_scm_GrowableBuilder.prototype = $c_scm_GrowableBuilder.prototype;
$c_scm_GrowableBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_GrowableBuilder = (function(elem) {
  var this$1 = this.scm_GrowableBuilder__f_elems;
  this$1.addOne__O__scm_Growable(elem);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_GrowableBuilder = (function(xs) {
  this.scm_GrowableBuilder__f_elems.addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_GrowableBuilder(elem)
});
$c_scm_GrowableBuilder.prototype.result__O = (function() {
  return this.scm_GrowableBuilder__f_elems
});
var $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
/** @constructor */
function $c_scm_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$())
}
$c_scm_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_scm_Iterable$.prototype.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
  /*<skip>*/
}
$h_scm_Iterable$.prototype = $c_scm_Iterable$.prototype;
var $d_scm_Iterable$ = new $TypeData().initClass({
  scm_Iterable$: 0
}, false, "scala.collection.mutable.Iterable$", {
  scm_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Iterable$.prototype.$classData = $d_scm_Iterable$;
var $n_scm_Iterable$;
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$()
  };
  return $n_scm_Iterable$
}
/** @constructor */
function $c_scm_Map$() {
  this.sc_MapFactory$Delegate__f_delegate = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_scm_HashMap$())
}
$c_scm_Map$.prototype = new $h_sc_MapFactory$Delegate();
$c_scm_Map$.prototype.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
  /*<skip>*/
}
$h_scm_Map$.prototype = $c_scm_Map$.prototype;
var $d_scm_Map$ = new $TypeData().initClass({
  scm_Map$: 0
}, false, "scala.collection.mutable.Map$", {
  scm_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Map$.prototype.$classData = $d_scm_Map$;
var $n_scm_Map$;
function $m_scm_Map$() {
  if ((!$n_scm_Map$)) {
    $n_scm_Map$ = new $c_scm_Map$()
  };
  return $n_scm_Map$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Force(positionChange, velocityChange) {
  this.Lxyz_bluepitaya_d3force_Force__f_positionChange = null;
  this.Lxyz_bluepitaya_d3force_Force__f_velocityChange = null;
  this.Lxyz_bluepitaya_d3force_Force__f_positionChange = positionChange;
  this.Lxyz_bluepitaya_d3force_Force__f_velocityChange = velocityChange
}
$c_Lxyz_bluepitaya_d3force_Force.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Force.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Force;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Force() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Force.prototype = $c_Lxyz_bluepitaya_d3force_Force.prototype;
$c_Lxyz_bluepitaya_d3force_Force.prototype.$plus__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Force = (function(f) {
  return new $c_Lxyz_bluepitaya_d3force_Force(this.Lxyz_bluepitaya_d3force_Force__f_positionChange.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(f.Lxyz_bluepitaya_d3force_Force__f_positionChange), this.Lxyz_bluepitaya_d3force_Force__f_velocityChange.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(f.Lxyz_bluepitaya_d3force_Force__f_velocityChange))
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.productPrefix__T = (function() {
  return "Force"
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_Force__f_positionChange;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_Force__f_velocityChange;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_Force)) {
    var Force$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_Force__f_positionChange;
    var x$2 = Force$1.Lxyz_bluepitaya_d3force_Force__f_positionChange;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_Force__f_velocityChange;
      var x$4 = Force$1.Lxyz_bluepitaya_d3force_Force__f_velocityChange;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_Force(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_Force)))
}
var $d_Lxyz_bluepitaya_d3force_Force = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Force: 0
}, false, "xyz.bluepitaya.d3force.Force", {
  Lxyz_bluepitaya_d3force_Force: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_Force.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Force;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_IterationState(nodes, alpha) {
  this.Lxyz_bluepitaya_d3force_IterationState__f_nodes = null;
  this.Lxyz_bluepitaya_d3force_IterationState__f_alpha = 0.0;
  this.Lxyz_bluepitaya_d3force_IterationState__f_nodes = nodes;
  this.Lxyz_bluepitaya_d3force_IterationState__f_alpha = alpha
}
$c_Lxyz_bluepitaya_d3force_IterationState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_IterationState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_IterationState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_IterationState.prototype = $c_Lxyz_bluepitaya_d3force_IterationState.prototype;
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.productPrefix__T = (function() {
  return "IterationState"
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_IterationState__f_nodes;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_IterationState__f_alpha;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("IterationState");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_IterationState__f_nodes;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_IterationState__f_alpha;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_IterationState)) {
    var IterationState$1 = x$1;
    if ((this.Lxyz_bluepitaya_d3force_IterationState__f_alpha === IterationState$1.Lxyz_bluepitaya_d3force_IterationState__f_alpha)) {
      var x = this.Lxyz_bluepitaya_d3force_IterationState__f_nodes;
      var x$2 = IterationState$1.Lxyz_bluepitaya_d3force_IterationState__f_nodes;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_IterationState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_IterationState)))
}
var $d_Lxyz_bluepitaya_d3force_IterationState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_IterationState: 0
}, false, "xyz.bluepitaya.d3force.IterationState", {
  Lxyz_bluepitaya_d3force_IterationState: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_IterationState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_IterationState;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_LinkForceState$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype = new $h_sr_AbstractFunction3();
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_LinkForceState$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_LinkForceState$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_LinkForceState$.prototype = $c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype;
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype.toString__T = (function() {
  return "LinkForceState"
});
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype.apply$default$2__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((x$1$2) => 30.0))
});
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  var _links = v1;
  var _distance = v2;
  var _strength = v3;
  return new $c_Lxyz_bluepitaya_d3force_LinkForceState(_links, _distance, _strength)
});
var $d_Lxyz_bluepitaya_d3force_LinkForceState$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_LinkForceState$: 0
}, false, "xyz.bluepitaya.d3force.LinkForceState$", {
  Lxyz_bluepitaya_d3force_LinkForceState$: 1,
  sr_AbstractFunction3: 1,
  O: 1,
  F3: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_LinkForceState$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_LinkForceState$;
var $n_Lxyz_bluepitaya_d3force_LinkForceState$;
function $m_Lxyz_bluepitaya_d3force_LinkForceState$() {
  if ((!$n_Lxyz_bluepitaya_d3force_LinkForceState$)) {
    $n_Lxyz_bluepitaya_d3force_LinkForceState$ = new $c_Lxyz_bluepitaya_d3force_LinkForceState$()
  };
  return $n_Lxyz_bluepitaya_d3force_LinkForceState$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Node(id, pos, velocity, isFixed) {
  this.Lxyz_bluepitaya_d3force_Node__f_id = null;
  this.Lxyz_bluepitaya_d3force_Node__f_pos = null;
  this.Lxyz_bluepitaya_d3force_Node__f_velocity = null;
  this.Lxyz_bluepitaya_d3force_Node__f_isFixed = false;
  this.Lxyz_bluepitaya_d3force_Node__f_id = id;
  this.Lxyz_bluepitaya_d3force_Node__f_pos = pos;
  this.Lxyz_bluepitaya_d3force_Node__f_velocity = velocity;
  this.Lxyz_bluepitaya_d3force_Node__f_isFixed = isFixed
}
$c_Lxyz_bluepitaya_d3force_Node.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Node.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Node;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Node() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Node.prototype = $c_Lxyz_bluepitaya_d3force_Node.prototype;
$c_Lxyz_bluepitaya_d3force_Node.prototype.move__D__Lxyz_bluepitaya_d3force_Node = (function(velocityDecay) {
  var nextVelocity = this.Lxyz_bluepitaya_d3force_Node__f_velocity.$times__D__Lxyz_bluepitaya_d3force_Vec2f(velocityDecay);
  var nextPos = this.Lxyz_bluepitaya_d3force_Node__f_pos.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(nextVelocity);
  var x$3 = this.Lxyz_bluepitaya_d3force_Node__f_id;
  var x$4 = this.Lxyz_bluepitaya_d3force_Node__f_isFixed;
  return new $c_Lxyz_bluepitaya_d3force_Node(x$3, nextPos, nextVelocity, x$4)
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.applyForce__Lxyz_bluepitaya_d3force_Force__Lxyz_bluepitaya_d3force_Node = (function(force) {
  var x$1 = this.Lxyz_bluepitaya_d3force_Node__f_pos.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(force.Lxyz_bluepitaya_d3force_Force__f_positionChange);
  var x$2 = this.Lxyz_bluepitaya_d3force_Node__f_velocity.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f(force.Lxyz_bluepitaya_d3force_Force__f_velocityChange);
  var x$3 = this.Lxyz_bluepitaya_d3force_Node__f_id;
  var x$4 = this.Lxyz_bluepitaya_d3force_Node__f_isFixed;
  return new $c_Lxyz_bluepitaya_d3force_Node(x$3, x$1, x$2, x$4)
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.productPrefix__T = (function() {
  return "Node"
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.productArity__I = (function() {
  return 4
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_Node__f_id;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_Node__f_pos;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_Node__f_velocity;
      break
    }
    case 3: {
      return this.Lxyz_bluepitaya_d3force_Node__f_isFixed;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Node");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_Node__f_id;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Lxyz_bluepitaya_d3force_Node__f_pos;
  var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$2 = this.Lxyz_bluepitaya_d3force_Node__f_velocity;
  var data$3 = $m_sr_Statics$().anyHash__O__I(x$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var data$4 = (this.Lxyz_bluepitaya_d3force_Node__f_isFixed ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_Node)) {
    var Node$1 = x$1;
    if (((this.Lxyz_bluepitaya_d3force_Node__f_isFixed === Node$1.Lxyz_bluepitaya_d3force_Node__f_isFixed) && (this.Lxyz_bluepitaya_d3force_Node__f_id === Node$1.Lxyz_bluepitaya_d3force_Node__f_id))) {
      var x = this.Lxyz_bluepitaya_d3force_Node__f_pos;
      var x$2 = Node$1.Lxyz_bluepitaya_d3force_Node__f_pos;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        var x$3 = this.Lxyz_bluepitaya_d3force_Node__f_velocity;
        var x$4 = Node$1.Lxyz_bluepitaya_d3force_Node__f_velocity;
        return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_Node)))
}
var $d_Lxyz_bluepitaya_d3force_Node = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Node: 0
}, false, "xyz.bluepitaya.d3force.Node", {
  Lxyz_bluepitaya_d3force_Node: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_Node.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Node;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_SimulationSettings(alphaMin, alphaDecay, alphaTarget, velocityDecay, alphaChange) {
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin = 0.0;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay = 0.0;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget = 0.0;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay = 0.0;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange = null;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin = alphaMin;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay = alphaDecay;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget = alphaTarget;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay = velocityDecay;
  this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange = alphaChange
}
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.constructor = $c_Lxyz_bluepitaya_d3force_SimulationSettings;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_SimulationSettings() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_SimulationSettings.prototype = $c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype;
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.productPrefix__T = (function() {
  return "SimulationSettings"
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.productArity__I = (function() {
  return 5
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget;
      break
    }
    case 3: {
      return this.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay;
      break
    }
    case 4: {
      return this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("SimulationSettings");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin;
  var data$1 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv$1 = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var dv$2 = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget;
  var data$3 = $m_sr_Statics$().doubleHash__D__I(dv$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var dv$3 = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay;
  var data$4 = $m_sr_Statics$().doubleHash__D__I(dv$3);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  var x = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange;
  var data$5 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
  var hash$6 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$6, 5)
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_SimulationSettings)) {
    var SimulationSettings$1 = x$1;
    if (((this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin === SimulationSettings$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin) && ((this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay === SimulationSettings$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay) && (this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget === SimulationSettings$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget)))) {
      if ((this.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay === SimulationSettings$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_velocityDecay)) {
        var x = this.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange;
        var x$2 = SimulationSettings$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange;
        return (x === x$2)
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_SimulationSettings(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_SimulationSettings)))
}
var $d_Lxyz_bluepitaya_d3force_SimulationSettings = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_SimulationSettings: 0
}, false, "xyz.bluepitaya.d3force.SimulationSettings", {
  Lxyz_bluepitaya_d3force_SimulationSettings: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_SimulationSettings.prototype.$classData = $d_Lxyz_bluepitaya_d3force_SimulationSettings;
function $p_Lxyz_bluepitaya_d3force_SimulationState__forcesSeq$lzycompute__sci_Seq($thiz) {
  if ((!$thiz.Lxyz_bluepitaya_d3force_SimulationState__f_bitmap$0)) {
    $thiz.Lxyz_bluepitaya_d3force_SimulationState__f_forcesSeq = $thiz.Lxyz_bluepitaya_d3force_SimulationState__f_forces.map__F1__O(new $c_sjsr_AnonFunction1(((x$16$2) => {
      var x$16 = x$16$2;
      return x$16._2__O().force__F1()
    }))).toSeq__sci_Seq();
    $thiz.Lxyz_bluepitaya_d3force_SimulationState__f_bitmap$0 = true
  };
  return $thiz.Lxyz_bluepitaya_d3force_SimulationState__f_forcesSeq
}
function $p_Lxyz_bluepitaya_d3force_SimulationState__forcesSeq__sci_Seq($thiz) {
  return ((!$thiz.Lxyz_bluepitaya_d3force_SimulationState__f_bitmap$0) ? $p_Lxyz_bluepitaya_d3force_SimulationState__forcesSeq$lzycompute__sci_Seq($thiz) : $thiz.Lxyz_bluepitaya_d3force_SimulationState__f_forcesSeq)
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_SimulationState(_nodes, settings, forces, _alpha) {
  this.Lxyz_bluepitaya_d3force_SimulationState__f_forcesSeq = null;
  this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes = null;
  this.Lxyz_bluepitaya_d3force_SimulationState__f_settings = null;
  this.Lxyz_bluepitaya_d3force_SimulationState__f_forces = null;
  this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha = 0.0;
  this.Lxyz_bluepitaya_d3force_SimulationState__f_bitmap$0 = false;
  this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes = _nodes;
  this.Lxyz_bluepitaya_d3force_SimulationState__f_settings = settings;
  this.Lxyz_bluepitaya_d3force_SimulationState__f_forces = forces;
  this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha = _alpha
}
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_SimulationState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_SimulationState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_SimulationState.prototype = $c_Lxyz_bluepitaya_d3force_SimulationState.prototype;
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.velocityDecay__D__Lxyz_bluepitaya_d3force_SimulationState = (function(v) {
  var x$1 = (1.0 - v);
  var this$1 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var x$2 = this$1.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaMin;
  var this$2 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var x$3 = this$2.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaDecay;
  var this$3 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var x$4 = this$3.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaTarget;
  var this$4 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var x$5 = this$4.Lxyz_bluepitaya_d3force_SimulationSettings__f_alphaChange;
  var x$6 = new $c_Lxyz_bluepitaya_d3force_SimulationSettings(x$2, x$3, x$4, x$1, x$5);
  var x$7 = this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
  var x$8 = this.Lxyz_bluepitaya_d3force_SimulationState__f_forces;
  var x$9 = this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha;
  return new $c_Lxyz_bluepitaya_d3force_SimulationState(x$7, x$6, x$8, x$9)
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.force__Lxyz_bluepitaya_d3force_ForceState__Lxyz_bluepitaya_d3force_SimulationState = (function(f) {
  var x$1 = this.Lxyz_bluepitaya_d3force_SimulationState__f_forces.updated__O__O__sci_MapOps(f.forceId__T(), f);
  var x$2 = this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
  var x$3 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var x$4 = this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha;
  return new $c_Lxyz_bluepitaya_d3force_SimulationState(x$2, x$3, x$1, x$4)
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.productPrefix__T = (function() {
  return "SimulationState"
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.productArity__I = (function() {
  return 4
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_SimulationState__f_forces;
      break
    }
    case 3: {
      return this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("SimulationState");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
  var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$2 = this.Lxyz_bluepitaya_d3force_SimulationState__f_forces;
  var data$3 = $m_sr_Statics$().anyHash__O__I(x$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha;
  var data$4 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_SimulationState)) {
    var SimulationState$1 = x$1;
    if ((this.Lxyz_bluepitaya_d3force_SimulationState__f__alpha === SimulationState$1.Lxyz_bluepitaya_d3force_SimulationState__f__alpha)) {
      var x = this.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
      var x$2 = SimulationState$1.Lxyz_bluepitaya_d3force_SimulationState__f__nodes;
      var $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$3 = this.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
      var x$4 = SimulationState$1.Lxyz_bluepitaya_d3force_SimulationState__f_settings;
      if (((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))) {
        var x$5 = this.Lxyz_bluepitaya_d3force_SimulationState__f_forces;
        var x$6 = SimulationState$1.Lxyz_bluepitaya_d3force_SimulationState__f_forces;
        return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_SimulationState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_SimulationState)))
}
var $d_Lxyz_bluepitaya_d3force_SimulationState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_SimulationState: 0
}, false, "xyz.bluepitaya.d3force.SimulationState", {
  Lxyz_bluepitaya_d3force_SimulationState: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_SimulationState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_SimulationState;
function $p_Lxyz_bluepitaya_d3force_Vec2f__magnitude$lzycompute__D($thiz) {
  if (((((1 & $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24) === 0)) {
    var a = (($thiz.Lxyz_bluepitaya_d3force_Vec2f__f_x * $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_x) + ($thiz.Lxyz_bluepitaya_d3force_Vec2f__f_y * $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_y));
    $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_magnitude = (+Math.sqrt(a));
    $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0 = (((1 | $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_magnitude
}
function $p_Lxyz_bluepitaya_d3force_Vec2f__floor$lzycompute__Lxyz_bluepitaya_d3force_Vec2f($thiz) {
  if (((((2 & $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24) === 0)) {
    var a = $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_x;
    var $$x1 = Math.floor(a);
    var a$1 = $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_y;
    $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_floor = new $c_Lxyz_bluepitaya_d3force_Vec2f((+$$x1), (+Math.floor(a$1)));
    $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0 = (((2 | $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.Lxyz_bluepitaya_d3force_Vec2f__f_floor
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_Vec2f(x, y) {
  this.Lxyz_bluepitaya_d3force_Vec2f__f_magnitude = 0.0;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_floor = null;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_x = 0.0;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_y = 0.0;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0 = 0;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_x = x;
  this.Lxyz_bluepitaya_d3force_Vec2f__f_y = y
}
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.constructor = $c_Lxyz_bluepitaya_d3force_Vec2f;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_Vec2f() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_Vec2f.prototype = $c_Lxyz_bluepitaya_d3force_Vec2f.prototype;
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f = (function(v) {
  return new $c_Lxyz_bluepitaya_d3force_Vec2f((this.Lxyz_bluepitaya_d3force_Vec2f__f_x + v.Lxyz_bluepitaya_d3force_Vec2f__f_x), (this.Lxyz_bluepitaya_d3force_Vec2f__f_y + v.Lxyz_bluepitaya_d3force_Vec2f__f_y))
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.$minus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f = (function(v) {
  return new $c_Lxyz_bluepitaya_d3force_Vec2f((this.Lxyz_bluepitaya_d3force_Vec2f__f_x - v.Lxyz_bluepitaya_d3force_Vec2f__f_x), (this.Lxyz_bluepitaya_d3force_Vec2f__f_y - v.Lxyz_bluepitaya_d3force_Vec2f__f_y))
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.$times__D__Lxyz_bluepitaya_d3force_Vec2f = (function(n) {
  return new $c_Lxyz_bluepitaya_d3force_Vec2f((this.Lxyz_bluepitaya_d3force_Vec2f__f_x * n), (this.Lxyz_bluepitaya_d3force_Vec2f__f_y * n))
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.$div__D__Lxyz_bluepitaya_d3force_Vec2f = (function(n) {
  return new $c_Lxyz_bluepitaya_d3force_Vec2f((this.Lxyz_bluepitaya_d3force_Vec2f__f_x / n), (this.Lxyz_bluepitaya_d3force_Vec2f__f_y / n))
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.magnitude__D = (function() {
  return (((((1 & this.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24) === 0) ? $p_Lxyz_bluepitaya_d3force_Vec2f__magnitude$lzycompute__D(this) : this.Lxyz_bluepitaya_d3force_Vec2f__f_magnitude)
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.floor__Lxyz_bluepitaya_d3force_Vec2f = (function() {
  return (((((2 & this.Lxyz_bluepitaya_d3force_Vec2f__f_bitmap$0) << 24) >> 24) === 0) ? $p_Lxyz_bluepitaya_d3force_Vec2f__floor$lzycompute__Lxyz_bluepitaya_d3force_Vec2f(this) : this.Lxyz_bluepitaya_d3force_Vec2f__f_floor)
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.productPrefix__T = (function() {
  return "Vec2f"
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_Vec2f__f_x;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_Vec2f__f_y;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Vec2f");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_Vec2f__f_x;
  var data$1 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv$1 = this.Lxyz_bluepitaya_d3force_Vec2f__f_y;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_Vec2f)) {
    var Vec2f$1 = x$1;
    return ((this.Lxyz_bluepitaya_d3force_Vec2f__f_x === Vec2f$1.Lxyz_bluepitaya_d3force_Vec2f__f_x) && (this.Lxyz_bluepitaya_d3force_Vec2f__f_y === Vec2f$1.Lxyz_bluepitaya_d3force_Vec2f__f_y))
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_Vec2f(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_Vec2f)))
}
var $d_Lxyz_bluepitaya_d3force_Vec2f = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_Vec2f: 0
}, false, "xyz.bluepitaya.d3force.Vec2f", {
  Lxyz_bluepitaya_d3force_Vec2f: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_Vec2f.prototype.$classData = $d_Lxyz_bluepitaya_d3force_Vec2f;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_XForceState$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype = new $h_sr_AbstractFunction2();
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_XForceState$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_XForceState$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_XForceState$.prototype = $c_Lxyz_bluepitaya_d3force_XForceState$.prototype;
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.toString__T = (function() {
  return "XForceState"
});
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.apply$default$1__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((x$5$2) => 0.1))
});
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.apply$default$2__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((x$6$2) => 0.0))
});
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.apply__O__O__O = (function(v1, v2) {
  var _strength = v1;
  var x = v2;
  return new $c_Lxyz_bluepitaya_d3force_XForceState(_strength, x)
});
var $d_Lxyz_bluepitaya_d3force_XForceState$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_XForceState$: 0
}, false, "xyz.bluepitaya.d3force.XForceState$", {
  Lxyz_bluepitaya_d3force_XForceState$: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_XForceState$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_XForceState$;
var $n_Lxyz_bluepitaya_d3force_XForceState$;
function $m_Lxyz_bluepitaya_d3force_XForceState$() {
  if ((!$n_Lxyz_bluepitaya_d3force_XForceState$)) {
    $n_Lxyz_bluepitaya_d3force_XForceState$ = new $c_Lxyz_bluepitaya_d3force_XForceState$()
  };
  return $n_Lxyz_bluepitaya_d3force_XForceState$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_YForceState$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype = new $h_sr_AbstractFunction2();
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_YForceState$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_YForceState$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_YForceState$.prototype = $c_Lxyz_bluepitaya_d3force_YForceState$.prototype;
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.toString__T = (function() {
  return "YForceState"
});
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.apply$default$1__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((x$9$2) => 0.1))
});
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.apply$default$2__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((x$10$2) => 0.0))
});
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.apply__O__O__O = (function(v1, v2) {
  var _strength = v1;
  var y = v2;
  return new $c_Lxyz_bluepitaya_d3force_YForceState(_strength, y)
});
var $d_Lxyz_bluepitaya_d3force_YForceState$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_YForceState$: 0
}, false, "xyz.bluepitaya.d3force.YForceState$", {
  Lxyz_bluepitaya_d3force_YForceState$: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_YForceState$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_YForceState$;
var $n_Lxyz_bluepitaya_d3force_YForceState$;
function $m_Lxyz_bluepitaya_d3force_YForceState$() {
  if ((!$n_Lxyz_bluepitaya_d3force_YForceState$)) {
    $n_Lxyz_bluepitaya_d3force_YForceState$ = new $c_Lxyz_bluepitaya_d3force_YForceState$()
  };
  return $n_Lxyz_bluepitaya_d3force_YForceState$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_Link(from, to) {
  this.Lxyz_bluepitaya_d3force_forces_Link__f_from = null;
  this.Lxyz_bluepitaya_d3force_forces_Link__f_to = null;
  this.Lxyz_bluepitaya_d3force_forces_Link__f_from = from;
  this.Lxyz_bluepitaya_d3force_forces_Link__f_to = to
}
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_Link;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_Link() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_Link.prototype = $c_Lxyz_bluepitaya_d3force_forces_Link.prototype;
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.productPrefix__T = (function() {
  return "Link"
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_forces_Link__f_from;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_forces_Link__f_to;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_forces_Link)) {
    var Link$1 = x$1;
    return ((this.Lxyz_bluepitaya_d3force_forces_Link__f_from === Link$1.Lxyz_bluepitaya_d3force_forces_Link__f_from) && (this.Lxyz_bluepitaya_d3force_forces_Link__f_to === Link$1.Lxyz_bluepitaya_d3force_forces_Link__f_to))
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_forces_Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_forces_Link)))
}
var $d_Lxyz_bluepitaya_d3force_forces_Link = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_Link: 0
}, false, "xyz.bluepitaya.d3force.forces.Link", {
  Lxyz_bluepitaya_d3force_forces_Link: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_Link.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_Link;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options(stength, distanceMin, distanceMax, theta) {
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength = null;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta2 = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin2 = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax2 = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength = stength;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin = distanceMin;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax = distanceMax;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta = theta;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta2 = (theta * theta);
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin2 = (distanceMin * distanceMin);
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax2 = (distanceMax * distanceMax)
}
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype;
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.productPrefix__T = (function() {
  return "Options"
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.productArity__I = (function() {
  return 4
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax;
      break
    }
    case 3: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Options");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var dv$1 = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax;
  var data$3 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var dv$2 = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta;
  var data$4 = $m_sr_Statics$().doubleHash__D__I(dv$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options)) {
    var Options$1 = x$1;
    if (((this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin === Options$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin) && (this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax === Options$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax))) {
      if ((this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta === Options$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta)) {
        var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength;
        var x$2 = Options$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options)))
}
var $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options: 0
}, false, "xyz.bluepitaya.d3force.forces.ManyBodyForce$Options", {
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params(p, w, l) {
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p = null;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p = p;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w = w;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l = l
}
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype;
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.productPrefix__T = (function() {
  return "Params"
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.productArity__I = (function() {
  return 3
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Params");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var dv$1 = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l;
  var data$3 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params)) {
    var Params$1 = x$1;
    if (((this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w === Params$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_w) && (this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l === Params$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_l))) {
      var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p;
      var x$2 = Params$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params__f_p;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params)))
}
var $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params: 0
}, false, "xyz.bluepitaya.d3force.forces.ManyBodyForce$Params", {
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Params;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata(point, value) {
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point = null;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value = 0.0;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point = point;
  this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value = value
}
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype = $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype;
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.productPrefix__T = (function() {
  return "VertexMetadata"
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("VertexMetadata");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata)) {
    var VertexMetadata$1 = x$1;
    if ((this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value === VertexMetadata$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_value)) {
      var x = this.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point;
      var x$2 = VertexMetadata$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata__f_point;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata)))
}
var $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata: 0
}, false, "xyz.bluepitaya.d3force.forces.ManyBodyForce$VertexMetadata", {
  Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$VertexMetadata;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree(region, root) {
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region = null;
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root = null;
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region = region;
  this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root = root
}
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_QuadTree() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.productPrefix__T = (function() {
  return "QuadTree"
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_QuadTree)) {
    var QuadTree$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region;
    var x$2 = QuadTree$1.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_region;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root;
      var x$4 = QuadTree$1.Lxyz_bluepitaya_d3force_quadtree_QuadTree__f_root;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_QuadTree(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_QuadTree)))
}
var $d_Lxyz_bluepitaya_d3force_quadtree_QuadTree = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_QuadTree: 0
}, false, "xyz.bluepitaya.d3force.quadtree.QuadTree", {
  Lxyz_bluepitaya_d3force_quadtree_QuadTree: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_QuadTree.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_QuadTree;
function $p_Lxyz_bluepitaya_d3force_quadtree_Region__middle$lzycompute__Lxyz_bluepitaya_d3force_Vec2f($thiz) {
  if ((!$thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_bitmap$0)) {
    $thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_middle = $thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1.$plus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f($thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2.$minus__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_Vec2f($thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1).$div__D__Lxyz_bluepitaya_d3force_Vec2f(2.0));
    $thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_bitmap$0 = true
  };
  return $thiz.Lxyz_bluepitaya_d3force_quadtree_Region__f_middle
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_Region(p1, p2) {
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_middle = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1 = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2 = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_bitmap$0 = false;
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1 = p1;
  this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2 = p2
}
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_Region;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_Region() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_Region.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.middle__Lxyz_bluepitaya_d3force_Vec2f = (function() {
  return ((!this.Lxyz_bluepitaya_d3force_quadtree_Region__f_bitmap$0) ? $p_Lxyz_bluepitaya_d3force_quadtree_Region__middle$lzycompute__Lxyz_bluepitaya_d3force_Vec2f(this) : this.Lxyz_bluepitaya_d3force_quadtree_Region__f_middle)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.quadrantOf__Lxyz_bluepitaya_d3force_Vec2f__Lxyz_bluepitaya_d3force_quadtree_Quadrant = (function(p) {
  var isRight = (p.Lxyz_bluepitaya_d3force_Vec2f__f_x >= this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_x);
  var isBottom = (p.Lxyz_bluepitaya_d3force_Vec2f__f_y >= this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_y);
  var x1 = new $c_T2$mcZZ$sp(isRight, isBottom);
  var p2 = x1.T2$mcZZ$sp__f__1$mcZ$sp;
  var p3 = x1.T2$mcZZ$sp__f__2$mcZ$sp;
  if (((p2 === false) && (p3 === false))) {
    return $m_Lxyz_bluepitaya_d3force_quadtree_TopLeft$()
  };
  var p6 = x1.T2$mcZZ$sp__f__1$mcZ$sp;
  var p7 = x1.T2$mcZZ$sp__f__2$mcZ$sp;
  if (((p6 === true) && (p7 === false))) {
    return $m_Lxyz_bluepitaya_d3force_quadtree_TopRight$()
  };
  var p10 = x1.T2$mcZZ$sp__f__1$mcZ$sp;
  var p11 = x1.T2$mcZZ$sp__f__2$mcZ$sp;
  if (((p10 === false) && (p11 === true))) {
    return $m_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$()
  };
  var p14 = x1.T2$mcZZ$sp__f__1$mcZ$sp;
  var p15 = x1.T2$mcZZ$sp__f__2$mcZ$sp;
  if (((p14 === true) && (p15 === true))) {
    return $m_Lxyz_bluepitaya_d3force_quadtree_BottomRight$()
  };
  throw new $c_s_MatchError(x1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.applyQuadrant__Lxyz_bluepitaya_d3force_quadtree_Quadrant__Lxyz_bluepitaya_d3force_quadtree_Region = (function(q) {
  var x = $m_Lxyz_bluepitaya_d3force_quadtree_TopLeft$();
  if ((x === q)) {
    return new $c_Lxyz_bluepitaya_d3force_quadtree_Region(this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1, this.middle__Lxyz_bluepitaya_d3force_Vec2f())
  } else {
    var x$3 = $m_Lxyz_bluepitaya_d3force_quadtree_TopRight$();
    if ((x$3 === q)) {
      return new $c_Lxyz_bluepitaya_d3force_quadtree_Region(new $c_Lxyz_bluepitaya_d3force_Vec2f(this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_x, this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1.Lxyz_bluepitaya_d3force_Vec2f__f_y), new $c_Lxyz_bluepitaya_d3force_Vec2f(this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2.Lxyz_bluepitaya_d3force_Vec2f__f_x, this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_y))
    } else {
      var x$5 = $m_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$();
      if ((x$5 === q)) {
        return new $c_Lxyz_bluepitaya_d3force_quadtree_Region(new $c_Lxyz_bluepitaya_d3force_Vec2f(this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1.Lxyz_bluepitaya_d3force_Vec2f__f_x, this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_y), new $c_Lxyz_bluepitaya_d3force_Vec2f(this.middle__Lxyz_bluepitaya_d3force_Vec2f().Lxyz_bluepitaya_d3force_Vec2f__f_x, this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2.Lxyz_bluepitaya_d3force_Vec2f__f_y))
      } else {
        var x$7 = $m_Lxyz_bluepitaya_d3force_quadtree_BottomRight$();
        if ((x$7 === q)) {
          return new $c_Lxyz_bluepitaya_d3force_quadtree_Region(this.middle__Lxyz_bluepitaya_d3force_Vec2f(), this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2)
        } else {
          throw new $c_s_MatchError(q)
        }
      }
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.productPrefix__T = (function() {
  return "Region"
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Region)) {
    var Region$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1;
    var x$2 = Region$1.Lxyz_bluepitaya_d3force_quadtree_Region__f_p1;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2;
      var x$4 = Region$1.Lxyz_bluepitaya_d3force_quadtree_Region__f_p2;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_Region(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_Region)))
}
var $d_Lxyz_bluepitaya_d3force_quadtree_Region = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_Region: 0
}, false, "xyz.bluepitaya.d3force.quadtree.Region", {
  Lxyz_bluepitaya_d3force_quadtree_Region: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_Region.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_Region;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass({
  ju_ConcurrentModificationException: 0
}, false, "java.util.ConcurrentModificationException", {
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_ConcurrentModificationException.prototype.$classData = $d_ju_ConcurrentModificationException;
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint"
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$())
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1)
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    $m_sc_Iterator$();
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a)
  }
});
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.T2__f__1 = _1;
  $thiz.T2__f__2 = _2;
  return $thiz
}
/** @constructor */
function $c_T2() {
  this.T2__f__1 = null;
  this.T2__f__2 = null
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype._1__O = (function() {
  return this.T2__f__1
});
$c_T2.prototype._2__O = (function() {
  return this.T2__f__2
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = x$1;
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), Tuple2$1._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), Tuple2$1._2__O()))
  } else {
    return false
  }
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.T4__f__1 = null;
  this.T4__f__2 = null;
  this.T4__f__3 = null;
  this.T4__f__4 = null;
  this.T4__f__1 = _1;
  this.T4__f__2 = _2;
  this.T4__f__3 = _3;
  this.T4__f__4 = _4
}
$c_T4.prototype = new $h_O();
$c_T4.prototype.constructor = $c_T4;
/** @constructor */
function $h_T4() {
  /*<skip>*/
}
$h_T4.prototype = $c_T4.prototype;
$c_T4.prototype.productArity__I = (function() {
  return 4
});
$c_T4.prototype.productElement__I__O = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n)
});
$c_T4.prototype.toString__T = (function() {
  return (((((((("(" + this.T4__f__1) + ",") + this.T4__f__2) + ",") + this.T4__f__3) + ",") + this.T4__f__4) + ")")
});
$c_T4.prototype.productPrefix__T = (function() {
  return "Tuple4"
});
$c_T4.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T4.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T4.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T4)) {
    var Tuple4$1 = x$1;
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__1, Tuple4$1.T4__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__2, Tuple4$1.T4__f__2)) && ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__3, Tuple4$1.T4__f__3) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__4, Tuple4$1.T4__f__4)))
  } else {
    return false
  }
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T4)))
}
var $d_T4 = new $TypeData().initClass({
  T4: 0
}, false, "scala.Tuple4", {
  T4: 1,
  O: 1,
  s_Product4: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T4.prototype.$classData = $d_T4;
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f))
}
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $p_sc_Iterator$$anon$10__nextCur__V($thiz) {
  $thiz.sc_Iterator$$anon$10__f_cur = null;
  $thiz.sc_Iterator$$anon$10__f_cur = $thiz.sc_Iterator$$anon$10__f_f$3.apply__O__O($thiz.sc_Iterator$$anon$10__f_$outer.next__O()).iterator__sc_Iterator();
  $thiz.sc_Iterator$$anon$10__f__hasNext = (-1)
}
/** @constructor */
function $c_sc_Iterator$$anon$10(outer, f$3) {
  this.sc_Iterator$$anon$10__f_cur = null;
  this.sc_Iterator$$anon$10__f__hasNext = 0;
  this.sc_Iterator$$anon$10__f_$outer = null;
  this.sc_Iterator$$anon$10__f_f$3 = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sc_Iterator$$anon$10__f_$outer = outer
  };
  this.sc_Iterator$$anon$10__f_f$3 = f$3;
  this.sc_Iterator$$anon$10__f_cur = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  this.sc_Iterator$$anon$10__f__hasNext = (-1)
}
$c_sc_Iterator$$anon$10.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$10.prototype.constructor = $c_sc_Iterator$$anon$10;
/** @constructor */
function $h_sc_Iterator$$anon$10() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$10.prototype = $c_sc_Iterator$$anon$10.prototype;
$c_sc_Iterator$$anon$10.prototype.hasNext__Z = (function() {
  if ((this.sc_Iterator$$anon$10__f__hasNext === (-1))) {
    while ((!this.sc_Iterator$$anon$10__f_cur.hasNext__Z())) {
      if ((!this.sc_Iterator$$anon$10__f_$outer.hasNext__Z())) {
        this.sc_Iterator$$anon$10__f__hasNext = 0;
        this.sc_Iterator$$anon$10__f_cur = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
        return false
      };
      $p_sc_Iterator$$anon$10__nextCur__V(this)
    };
    this.sc_Iterator$$anon$10__f__hasNext = 1;
    return true
  } else {
    return (this.sc_Iterator$$anon$10__f__hasNext === 1)
  }
});
$c_sc_Iterator$$anon$10.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$$anon$10__f__hasNext = (-1)
  };
  return this.sc_Iterator$$anon$10__f_cur.next__O()
});
var $d_sc_Iterator$$anon$10 = new $TypeData().initClass({
  sc_Iterator$$anon$10: 0
}, false, "scala.collection.Iterator$$anon$10", {
  sc_Iterator$$anon$10: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$10.prototype.$classData = $d_sc_Iterator$$anon$10;
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed)
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this)
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.sc_Iterator$$anon$9__f_$outer = null;
  this.sc_Iterator$$anon$9__f_f$2 = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sc_Iterator$$anon$9__f_$outer = outer
  };
  this.sc_Iterator$$anon$9__f_f$2 = f$2
}
$c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$9.prototype.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$9.prototype = $c_sc_Iterator$$anon$9.prototype;
$c_sc_Iterator$$anon$9.prototype.knownSize__I = (function() {
  return this.sc_Iterator$$anon$9__f_$outer.knownSize__I()
});
$c_sc_Iterator$$anon$9.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$9__f_$outer.hasNext__Z()
});
$c_sc_Iterator$$anon$9.prototype.next__O = (function() {
  return this.sc_Iterator$$anon$9__f_f$2.apply__O__O(this.sc_Iterator$$anon$9__f_$outer.next__O())
});
var $d_sc_Iterator$$anon$9 = new $TypeData().initClass({
  sc_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", {
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$9.prototype.$classData = $d_sc_Iterator$$anon$9;
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
    var c = $thiz.sc_Iterator$ConcatIterator__f_current;
    $thiz.sc_Iterator$ConcatIterator__f_current = c.sc_Iterator$ConcatIterator__f_current;
    $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = c.sc_Iterator$ConcatIterator__f_currentHasNextChecked;
    if ((c.sc_Iterator$ConcatIterator__f_tail !== null)) {
      if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = c.sc_Iterator$ConcatIterator__f_last
      };
      c.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
      $thiz.sc_Iterator$ConcatIterator__f_tail = c.sc_Iterator$ConcatIterator__f_tail
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $thiz.sc_Iterator$ConcatIterator__f_tail.headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $thiz.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail
      };
      $thiz.sc_Iterator$ConcatIterator__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail.sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $thiz.sc_Iterator$ConcatIterator__f_current.hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
  /*<skip>*/
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if (this.sc_Iterator$ConcatIterator__f_current.hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this)
    }
  } else {
    return false
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return this.sc_Iterator$ConcatIterator__f_current.next__O()
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c
  } else {
    this.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c
  };
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  return this
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)))
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass({
  sc_Iterator$ConcatIterator: 0
}, false, "scala.collection.Iterator$ConcatIterator", {
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$ConcatIterator.prototype.$classData = $d_sc_Iterator$ConcatIterator;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($thiz.sc_Iterator$SliceIterator__f_underlying.hasNext__Z()) {
      $thiz.sc_Iterator$SliceIterator__f_underlying.next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = this.sc_Iterator$SliceIterator__f_underlying.knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && this.sc_Iterator$SliceIterator__f_underlying.hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return this.sc_Iterator$SliceIterator__f_underlying.next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? this.sc_Iterator$SliceIterator__f_underlying.next__O() : $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__headOption__s_Option($thiz) {
  return ($thiz.isEmpty__Z() ? $m_s_None$() : new $c_s_Some($thiz.head__O()))
}
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while (true) {
    var this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = these.tail__O()
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $thiz.drop__I__O(n);
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.isEmpty__Z())) {
    acc = op.apply__O__O__O(acc, these.head__O());
    these = these.tail__O()
  };
  return acc
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = that;
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.tail__O();
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = a;
      if ((!this$1.isEmpty__Z())) {
        var this$2 = b;
        var $$x1 = (!this$2.isEmpty__Z())
      } else {
        var $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        var temp$a = a.tail__O();
        var temp$b = b.tail__O();
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
}
function $is_sc_LinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOps)))
}
function $isArrayOf_sc_LinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOps)))
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O();
  return r
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.sci_HashMapBuilder__f_aliased !== null)
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  var result = new $ac_I(((1 + as.u.length) | 0));
  as.copyTo(0, result, 0, ix);
  result.u[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.u.length - ix) | 0);
  as.copyTo(ix, result, destPos, length);
  return result
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = bm.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(((2 + src.u.length) | 0));
  src.copyTo(0, dst, 0, idx);
  dst.u[idx] = key;
  dst.u[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.u.length - idx) | 0);
  src.copyTo(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedMapNode__f_dataMap = (bm.sci_BitmapIndexedMapNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedMapNode__f_content = dst;
  bm.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedMapNode__f_size = ((1 + bm.sci_BitmapIndexedMapNode__f_size) | 0);
  bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashMapBuilder__f_aliased = null
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.copy__sci_BitmapIndexedMapNode()
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.sci_HashMapBuilder__f_aliased = null;
  this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
  this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
}
$c_sci_HashMapBuilder.prototype = new $h_O();
$c_sci_HashMapBuilder.prototype.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
  /*<skip>*/
}
$h_sci_HashMapBuilder.prototype = $c_sci_HashMapBuilder.prototype;
$c_sci_HashMapBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_HashMapBuilder.prototype.update__sci_MapNode__O__O__I__I__I__V = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var x2 = mapNode;
    var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((x2.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      var index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      var key0 = x2.getKey__I__O(index);
      var key0UnimprovedHash = x2.getHash__I__I(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
        x2.sci_BitmapIndexedMapNode__f_content.u[((1 + (index << 1)) | 0)] = value
      } else {
        var value0 = x2.getValue__I__O(index);
        var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
        var subNodeNew = x2.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        x2.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
      }
    } else if (((x2.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      var subNode = x2.getNode__I__sci_MapNode(index$2);
      var beforeSize = subNode.size__I();
      var beforeHash = subNode.cachedJavaKeySetHashCode__I();
      this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      x2.sci_BitmapIndexedMapNode__f_size = ((x2.sci_BitmapIndexedMapNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
      x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0)
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value)
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var x3 = mapNode;
    var index$3 = x3.indexOf__O__I(key);
    if ((index$3 < 0)) {
      x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector($ct_T2__O__O__(new $c_T2(), key, value))
    } else {
      x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.updated__I__O__sci_Vector(index$3, $ct_T2__O__O__(new $c_T2(), key, value))
    }
  } else {
    throw new $c_s_MatchError(mapNode)
  }
});
$c_sci_HashMapBuilder.prototype.result__sci_HashMap = (function() {
  if ((this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.sci_BitmapIndexedMapNode__f_size === 0)) {
    var this$1 = $m_sci_HashMap$();
    return this$1.sci_HashMap$__f_EmptyMap
  } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
    return this.sci_HashMapBuilder__f_aliased
  } else {
    this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
    return this.sci_HashMapBuilder__f_aliased
  }
});
$c_sci_HashMapBuilder.prototype.addOne__T2__sci_HashMapBuilder = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var x = elem._1__O();
  var h = $m_sr_Statics$().anyHash__O__I(x);
  var im = $m_sc_Hashing$().improve__I__I(h);
  this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, elem._1__O(), elem._2__O(), h, im, 0);
  return this
});
$c_sci_HashMapBuilder.prototype.addOne__O__O__sci_HashMapBuilder = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
  return this
});
$c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__sci_HashMapBuilder = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    var x2 = xs;
    new $c_sci_HashMapBuilder$$anon$1(this, x2)
  } else if ((xs instanceof $c_scm_HashMap)) {
    var x3 = xs;
    var iter = x3.nodeIterator__sc_Iterator();
    while (iter.hasNext__Z()) {
      var next = iter.next__O();
      var improvedHash = next.scm_HashMap$Node__f__hash;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().improve__I__I(originalHash);
      this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, next.scm_HashMap$Node__f__key, next.scm_HashMap$Node__f__value, originalHash, hash, 0)
    }
  } else if ($is_sci_Map(xs)) {
    var x4 = xs;
    x4.foreachEntry__F2__V(new $c_sjsr_AnonFunction2(((key$2, value$2) => this.addOne__O__O__sci_HashMapBuilder(key$2, value$2))))
  } else {
    var it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      this.addOne__T2__sci_HashMapBuilder(it.next__O())
    }
  };
  return this
});
$c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_HashMapBuilder(xs)
});
$c_sci_HashMapBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__T2__sci_HashMapBuilder(elem)
});
$c_sci_HashMapBuilder.prototype.result__O = (function() {
  return this.result__sci_HashMap()
});
var $d_sci_HashMapBuilder = new $TypeData().initClass({
  sci_HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMapBuilder", {
  sci_HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashMapBuilder.prototype.$classData = $d_sci_HashMapBuilder;
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = it;
    return x2
  } else {
    return $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it)
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source)
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it)
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.sci_LazyList$LazyBuilder__f_next = null;
  this.sci_LazyList$LazyBuilder__f_list = null;
  this.clear__V()
}
$c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder.prototype.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder.prototype = $c_sci_LazyList$LazyBuilder.prototype;
$c_sci_LazyList$LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_LazyList$LazyBuilder.prototype.clear__V = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
  this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
  this.sci_LazyList$LazyBuilder__f_next = deferred
});
$c_sci_LazyList$LazyBuilder.prototype.result__sci_LazyList = (function() {
  this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$())));
  return this.sci_LazyList$LazyBuilder__f_list
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__sci_LazyList$LazyBuilder = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0((() => {
    $m_sci_LazyList$();
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(elem, tl)
  })));
  this.sci_LazyList$LazyBuilder__f_next = deferred;
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder = (function(xs) {
  if ((xs.knownSize__I() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(xs.iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()))))));
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_LazyList$LazyBuilder(elem)
});
$c_sci_LazyList$LazyBuilder.prototype.result__O = (function() {
  return this.result__sci_LazyList()
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  } else {
    var this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
    var res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    var this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
    this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    return res
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  $ct_T2__O__O__(new $c_T2(), $m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.apply__sci_Seq__O = (function(elems) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
});
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.sci_Map$Map2$Map2Iterator__f_i = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null
}
$c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map2$Map2Iterator.prototype.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map2$Map2Iterator.prototype = $c_sci_Map$Map2$Map2Iterator.prototype;
$c_sci_Map$Map2$Map2Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map2$Map2Iterator__f_i < 2)
});
$c_sci_Map$Map2$Map2Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map2$Map2Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1;
      var v = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
      var result = $ct_T2__O__O__(new $c_T2(), k, v);
      break
    }
    case 1: {
      var k$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2;
      var v$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
      var result = $ct_T2__O__O__(new $c_T2(), k$1, v$1);
      break
    }
    default: {
      var result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
  return result
});
$c_sci_Map$Map2$Map2Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map2$Map2Iterator__f_i = ((this.sci_Map$Map2$Map2Iterator__f_i + n) | 0);
  return this
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.sci_Map$Map3$Map3Iterator__f_i = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null
}
$c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map3$Map3Iterator.prototype.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map3$Map3Iterator.prototype = $c_sci_Map$Map3$Map3Iterator.prototype;
$c_sci_Map$Map3$Map3Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map3$Map3Iterator__f_i < 3)
});
$c_sci_Map$Map3$Map3Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map3$Map3Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1;
      var v = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
      var result = $ct_T2__O__O__(new $c_T2(), k, v);
      break
    }
    case 1: {
      var k$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2;
      var v$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
      var result = $ct_T2__O__O__(new $c_T2(), k$1, v$1);
      break
    }
    case 2: {
      var k$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3;
      var v$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
      var result = $ct_T2__O__O__(new $c_T2(), k$2, v$2);
      break
    }
    default: {
      var result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
  return result
});
$c_sci_Map$Map3$Map3Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map3$Map3Iterator__f_i = ((this.sci_Map$Map3$Map3Iterator__f_i + n) | 0);
  return this
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.sci_Map$Map4$Map4Iterator__f_i = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null
}
$c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map4$Map4Iterator.prototype.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map4$Map4Iterator.prototype = $c_sci_Map$Map4$Map4Iterator.prototype;
$c_sci_Map$Map4$Map4Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map4$Map4Iterator__f_i < 4)
});
$c_sci_Map$Map4$Map4Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map4$Map4Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1;
      var v = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
      var result = $ct_T2__O__O__(new $c_T2(), k, v);
      break
    }
    case 1: {
      var k$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2;
      var v$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
      var result = $ct_T2__O__O__(new $c_T2(), k$1, v$1);
      break
    }
    case 2: {
      var k$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3;
      var v$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
      var result = $ct_T2__O__O__(new $c_T2(), k$2, v$2);
      break
    }
    case 3: {
      var k$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4;
      var v$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
      var result = $ct_T2__O__O__(new $c_T2(), k$3, v$3);
      break
    }
    default: {
      var result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
  return result
});
$c_sci_Map$Map4$Map4Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map4$Map4Iterator__f_i = ((this.sci_Map$Map4$Map4Iterator__f_i + n) | 0);
  return this
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.sci_MapBuilderImpl__f_elems = null;
  this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
  this.sci_MapBuilderImpl__f_hashMapBuilder = null;
  this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
  this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false
}
$c_sci_MapBuilderImpl.prototype = new $h_O();
$c_sci_MapBuilderImpl.prototype.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
  /*<skip>*/
}
$h_sci_MapBuilderImpl.prototype = $c_sci_MapBuilderImpl.prototype;
$c_sci_MapBuilderImpl.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_MapBuilderImpl.prototype.result__sci_Map = (function() {
  return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems)
});
$c_sci_MapBuilderImpl.prototype.addOne__O__O__sci_MapBuilderImpl = (function(key, value) {
  if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
    this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
  } else if ((this.sci_MapBuilderImpl__f_elems.size__I() < 4)) {
    this.sci_MapBuilderImpl__f_elems = this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value)
  } else if (this.sci_MapBuilderImpl__f_elems.contains__O__Z(key)) {
    this.sci_MapBuilderImpl__f_elems = this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value)
  } else {
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
    if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
      this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder()
    };
    this.sci_MapBuilderImpl__f_elems.buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
    this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
  };
  return this
});
$c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__sci_MapBuilderImpl = (function(xs) {
  return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? (this.sci_MapBuilderImpl__f_hashMapBuilder.addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
});
$c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(xs)
});
$c_sci_MapBuilderImpl.prototype.addOne__O__scm_Growable = (function(elem) {
  var elem$1 = elem;
  return this.addOne__O__O__sci_MapBuilderImpl(elem$1._1__O(), elem$1._2__O())
});
$c_sci_MapBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Map()
});
function $isArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapBuilderImpl)))
}
var $d_sci_MapBuilderImpl = new $TypeData().initClass({
  sci_MapBuilderImpl: 0
}, false, "scala.collection.immutable.MapBuilderImpl", {
  sci_MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_MapBuilderImpl.prototype.$classData = $d_sci_MapBuilderImpl;
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
  this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
  this.sci_ChampBaseReverseIterator__f_nodeStack = null;
  this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
  this.sci_MapKeyValueTupleHashIterator__f_value = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.sci_MapKeyValueTupleHashIterator__f_hash = 0
}
$c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$c_sci_MapKeyValueTupleHashIterator.prototype.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
  /*<skip>*/
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $c_sci_MapKeyValueTupleHashIterator.prototype;
$c_sci_MapKeyValueTupleHashIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sci_MapKeyValueTupleHashIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sci_MapKeyValueTupleHashIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, n, (-1))
});
$c_sci_MapKeyValueTupleHashIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sci_MapKeyValueTupleHashIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.toSeq__sci_Seq = (function() {
  return $m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.knownSize__I = (function() {
  return (-1)
});
$c_sci_MapKeyValueTupleHashIterator.prototype.hashCode__I = (function() {
  var $$x2 = $m_s_util_hashing_MurmurHash3$();
  var $$x1 = this.sci_MapKeyValueTupleHashIterator__f_hash;
  var x = this.sci_MapKeyValueTupleHashIterator__f_value;
  return $$x2.tuple2Hash__I__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x), (-889275714))
});
$c_sci_MapKeyValueTupleHashIterator.prototype.next__sci_MapKeyValueTupleHashIterator = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  this.sci_MapKeyValueTupleHashIterator__f_hash = this.sci_ChampBaseReverseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
  this.sci_MapKeyValueTupleHashIterator__f_value = this.sci_ChampBaseReverseIterator__f_currentValueNode.getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
  return this
});
$c_sci_MapKeyValueTupleHashIterator.prototype.next__O = (function() {
  return this.next__sci_MapKeyValueTupleHashIterator()
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator", {
  sci_MapKeyValueTupleHashIterator: 1,
  sci_ChampBaseReverseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleHashIterator.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
}
$c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$c_sci_MapKeyValueTupleIterator.prototype.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
  /*<skip>*/
}
$h_sci_MapKeyValueTupleIterator.prototype = $c_sci_MapKeyValueTupleIterator.prototype;
$c_sci_MapKeyValueTupleIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sci_MapKeyValueTupleIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sci_MapKeyValueTupleIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
});
$c_sci_MapKeyValueTupleIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, n, (-1))
});
$c_sci_MapKeyValueTupleIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sci_MapKeyValueTupleIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sci_MapKeyValueTupleIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sci_MapKeyValueTupleIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sci_MapKeyValueTupleIterator.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sci_MapKeyValueTupleIterator.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sci_MapKeyValueTupleIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_MapKeyValueTupleIterator.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sci_MapKeyValueTupleIterator.prototype.toSeq__sci_Seq = (function() {
  return $m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_sci_MapKeyValueTupleIterator.prototype.knownSize__I = (function() {
  return (-1)
});
$c_sci_MapKeyValueTupleIterator.prototype.next__T2 = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  var payload = this.sci_ChampBaseIterator__f_currentValueNode.getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
  this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
  return payload
});
$c_sci_MapKeyValueTupleIterator.prototype.next__O = (function() {
  return this.next__T2()
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleIterator", {
  sci_MapKeyValueTupleIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleIterator.prototype.$classData = $d_sci_MapKeyValueTupleIterator;
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while ((slice.u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = slice;
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = slice;
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = slice;
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = slice;
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = slice;
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul(slice.u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $thiz.sci_NewVectorIterator__f_a1.u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[(31 & ((io >>> 10) | 0))];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[0]
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[(31 & ((io >>> 15) | 0))];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[0];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[0]
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.u[(31 & ((io >>> 20) | 0))];
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[0];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[0];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[0]
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.u[((io >>> 25) | 0)];
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.u[0];
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[0];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[0];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[0]
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[(31 & ((io >>> 10) | 0))];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[(31 & ((io >>> 15) | 0))];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[(31 & ((io >>> 10) | 0))];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.u[(31 & ((io >>> 20) | 0))];
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[(31 & ((io >>> 15) | 0))];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[(31 & ((io >>> 10) | 0))];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.u[((io >>> 25) | 0)];
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.u[(31 & ((io >>> 20) | 0))];
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.u[(31 & ((io >>> 15) | 0))];
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.u[(31 & ((io >>> 10) | 0))];
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.u[(31 & ((io >>> 5) | 0))]
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = v.sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_O();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sci_NewVectorIterator.prototype.isEmpty__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
});
$c_sci_NewVectorIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sci_NewVectorIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sci_NewVectorIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sci_NewVectorIterator.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sci_NewVectorIterator.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sci_NewVectorIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_NewVectorIterator.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sci_NewVectorIterator.prototype.toSeq__sci_Seq = (function() {
  return $m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = this.sci_NewVectorIterator__f_a1.u[this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1];
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    var a = ((total - copied) | 0);
    var b = ((this.sci_NewVectorIterator__f_a1.u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      src.copyTo(srcPos, xs, destPos, count)
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count)
    };
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0)
  };
  return total
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_sci_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.from__sc_IterableOnce__sci_Seq = (function(it) {
  if ($is_sci_Seq(it)) {
    var x2 = it;
    return x2
  } else {
    return $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it)
  }
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Seq(source)
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_Seq(it)
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_Vector(elems)
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = it;
    return x2
  } else {
    var knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$()
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if (false) {
          var x2$2 = it;
          var x = x2$2.elemTag__s_reflect_ClassTag().runtimeClass__jl_Class();
          if (((x !== null) && (x === $d_O.getClassOf()))) {
            var a1$3 = x2$2.unsafeArray__AO();
            break matchEnd5
          }
        };
        if ($is_sci_Iterable(it)) {
          var x3 = it;
          var a1 = new $ac_O(knownSize);
          x3.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5
        };
        var a1$2 = new $ac_O(knownSize);
        var this$1 = it.iterator__sc_Iterator();
        this$1.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2
      };
      return new $c_sci_Vector1(a1$3)
    } else {
      var this$2 = new $c_sci_VectorBuilder();
      var this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  }
});
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source)
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    data.copyTo(0, dest, destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      data.copyTo(copy1, dest$1, 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = data$2;
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data)
      })))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a2.u[0] = $thiz.sci_VectorBuilder__f_a1;
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2.u[(31 & ((idx >>> 5) | 0))] = $thiz.sci_VectorBuilder__f_a1
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a3.u[0] = $thiz.sci_VectorBuilder__f_a2;
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.u[(31 & ((idx >>> 5) | 0))] = $thiz.sci_VectorBuilder__f_a1;
    $thiz.sci_VectorBuilder__f_a3.u[(31 & ((idx >>> 10) | 0))] = $thiz.sci_VectorBuilder__f_a2
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a4.u[0] = $thiz.sci_VectorBuilder__f_a3;
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.u[(31 & ((idx >>> 5) | 0))] = $thiz.sci_VectorBuilder__f_a1;
    $thiz.sci_VectorBuilder__f_a3.u[(31 & ((idx >>> 10) | 0))] = $thiz.sci_VectorBuilder__f_a2;
    $thiz.sci_VectorBuilder__f_a4.u[(31 & ((idx >>> 15) | 0))] = $thiz.sci_VectorBuilder__f_a3
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a5.u[0] = $thiz.sci_VectorBuilder__f_a4;
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.u[(31 & ((idx >>> 5) | 0))] = $thiz.sci_VectorBuilder__f_a1;
    $thiz.sci_VectorBuilder__f_a3.u[(31 & ((idx >>> 10) | 0))] = $thiz.sci_VectorBuilder__f_a2;
    $thiz.sci_VectorBuilder__f_a4.u[(31 & ((idx >>> 15) | 0))] = $thiz.sci_VectorBuilder__f_a3;
    $thiz.sci_VectorBuilder__f_a5.u[(31 & ((idx >>> 20) | 0))] = $thiz.sci_VectorBuilder__f_a4
  } else if ((xor < 1073741824)) {
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $thiz.sci_VectorBuilder__f_a6.u[0] = $thiz.sci_VectorBuilder__f_a5;
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.u[(31 & ((idx >>> 5) | 0))] = $thiz.sci_VectorBuilder__f_a1;
    $thiz.sci_VectorBuilder__f_a3.u[(31 & ((idx >>> 10) | 0))] = $thiz.sci_VectorBuilder__f_a2;
    $thiz.sci_VectorBuilder__f_a4.u[(31 & ((idx >>> 15) | 0))] = $thiz.sci_VectorBuilder__f_a3;
    $thiz.sci_VectorBuilder__f_a5.u[(31 & ((idx >>> 20) | 0))] = $thiz.sci_VectorBuilder__f_a4;
    $thiz.sci_VectorBuilder__f_a6.u[(31 & ((idx >>> 25) | 0))] = $thiz.sci_VectorBuilder__f_a5
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 1
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = v.vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break
    }
    case 1: {
      var v1 = v;
      this.sci_VectorBuilder__f_depth = 1;
      var i = v1.sci_Vector__f_prefix1.u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = v1.sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = ((a.u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break
    }
    case 3: {
      var v2 = v;
      var d2 = v2.sci_Vector2__f_data2;
      var a$1 = v2.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$1.u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_offset = ((32 - v2.sci_Vector2__f_len1) | 0);
      var i$1 = ((v2.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a2.u[0] = v2.sci_Vector__f_prefix1;
      var dest = this.sci_VectorBuilder__f_a2;
      var length = d2.u.length;
      d2.copyTo(0, dest, 1, length);
      this.sci_VectorBuilder__f_a2.u[((1 + d2.u.length) | 0)] = this.sci_VectorBuilder__f_a1;
      break
    }
    case 5: {
      var v3 = v;
      var d3 = v3.sci_Vector3__f_data3;
      var s2 = v3.sci_Vector3__f_suffix2;
      var a$2 = v3.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$2.u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_offset = ((1024 - v3.sci_Vector3__f_len12) | 0);
      var i$2 = ((v3.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a3.u[0] = $m_sci_VectorStatics$().copyPrepend__O__AO__AO(v3.sci_Vector__f_prefix1, v3.sci_Vector3__f_prefix2);
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = d3.u.length;
      d3.copyTo(0, dest$1, 1, length$1);
      this.sci_VectorBuilder__f_a2 = $m_ju_Arrays$().copyOf__AO__I__AO(s2, 32);
      this.sci_VectorBuilder__f_a3.u[((1 + d3.u.length) | 0)] = this.sci_VectorBuilder__f_a2;
      this.sci_VectorBuilder__f_a2.u[s2.u.length] = this.sci_VectorBuilder__f_a1;
      break
    }
    case 7: {
      var v4 = v;
      var d4 = v4.sci_Vector4__f_data4;
      var s3 = v4.sci_Vector4__f_suffix3;
      var s2$2 = v4.sci_Vector4__f_suffix2;
      var a$3 = v4.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$3.u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_offset = ((32768 - v4.sci_Vector4__f_len123) | 0);
      var i$3 = ((v4.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a4.u[0] = $m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v4.sci_Vector__f_prefix1, v4.sci_Vector4__f_prefix2), v4.sci_Vector4__f_prefix3);
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = d4.u.length;
      d4.copyTo(0, dest$2, 1, length$2);
      this.sci_VectorBuilder__f_a3 = $m_ju_Arrays$().copyOf__AO__I__AO(s3, 32);
      this.sci_VectorBuilder__f_a2 = $m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32);
      this.sci_VectorBuilder__f_a4.u[((1 + d4.u.length) | 0)] = this.sci_VectorBuilder__f_a3;
      this.sci_VectorBuilder__f_a3.u[s3.u.length] = this.sci_VectorBuilder__f_a2;
      this.sci_VectorBuilder__f_a2.u[s2$2.u.length] = this.sci_VectorBuilder__f_a1;
      break
    }
    case 9: {
      var v5 = v;
      var d5 = v5.sci_Vector5__f_data5;
      var s4 = v5.sci_Vector5__f_suffix4;
      var s3$2 = v5.sci_Vector5__f_suffix3;
      var s2$3 = v5.sci_Vector5__f_suffix2;
      var a$4 = v5.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$4.u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_offset = ((1048576 - v5.sci_Vector5__f_len1234) | 0);
      var i$4 = ((v5.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a5.u[0] = $m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v5.sci_Vector__f_prefix1, v5.sci_Vector5__f_prefix2), v5.sci_Vector5__f_prefix3), v5.sci_Vector5__f_prefix4);
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = d5.u.length;
      d5.copyTo(0, dest$3, 1, length$3);
      this.sci_VectorBuilder__f_a4 = $m_ju_Arrays$().copyOf__AO__I__AO(s4, 32);
      this.sci_VectorBuilder__f_a3 = $m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32);
      this.sci_VectorBuilder__f_a2 = $m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32);
      this.sci_VectorBuilder__f_a5.u[((1 + d5.u.length) | 0)] = this.sci_VectorBuilder__f_a4;
      this.sci_VectorBuilder__f_a4.u[s4.u.length] = this.sci_VectorBuilder__f_a3;
      this.sci_VectorBuilder__f_a3.u[s3$2.u.length] = this.sci_VectorBuilder__f_a2;
      this.sci_VectorBuilder__f_a2.u[s2$3.u.length] = this.sci_VectorBuilder__f_a1;
      break
    }
    case 11: {
      var v6 = v;
      var d6 = v6.sci_Vector6__f_data6;
      var s5 = v6.sci_Vector6__f_suffix5;
      var s4$2 = v6.sci_Vector6__f_suffix4;
      var s3$3 = v6.sci_Vector6__f_suffix3;
      var s2$4 = v6.sci_Vector6__f_suffix2;
      var a$5 = v6.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$5.u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_offset = ((33554432 - v6.sci_Vector6__f_len12345) | 0);
      var i$5 = ((v6.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a6.u[0] = $m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v6.sci_Vector__f_prefix1, v6.sci_Vector6__f_prefix2), v6.sci_Vector6__f_prefix3), v6.sci_Vector6__f_prefix4), v6.sci_Vector6__f_prefix5);
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = d6.u.length;
      d6.copyTo(0, dest$4, 1, length$4);
      this.sci_VectorBuilder__f_a5 = $m_ju_Arrays$().copyOf__AO__I__AO(s5, 32);
      this.sci_VectorBuilder__f_a4 = $m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32);
      this.sci_VectorBuilder__f_a3 = $m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32);
      this.sci_VectorBuilder__f_a2 = $m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32);
      this.sci_VectorBuilder__f_a6.u[((1 + d6.u.length) | 0)] = this.sci_VectorBuilder__f_a5;
      this.sci_VectorBuilder__f_a5.u[s5.u.length] = this.sci_VectorBuilder__f_a4;
      this.sci_VectorBuilder__f_a4.u[s4$2.u.length] = this.sci_VectorBuilder__f_a3;
      this.sci_VectorBuilder__f_a3.u[s3$3.u.length] = this.sci_VectorBuilder__f_a2;
      this.sci_VectorBuilder__f_a2.u[s2$4.u.length] = this.sci_VectorBuilder__f_a1;
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
  };
  return this
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this)
  };
  this.sci_VectorBuilder__f_a1.u[this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1] = elem;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = xs;
    return (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$()
  } else if ((len <= 32)) {
    if ((realLen === 32)) {
      return new $c_sci_Vector1(this.sci_VectorBuilder__f_a1)
    } else {
      var original = this.sci_VectorBuilder__f_a1;
      return new $c_sci_Vector1($m_ju_Arrays$().copyOf__AO__I__AO(original, realLen))
    }
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original$1 = this.sci_VectorBuilder__f_a2;
    var data = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i2);
    var prefix1 = this.sci_VectorBuilder__f_a2.u[0];
    var a = this.sci_VectorBuilder__f_a2.u[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a.u.length === len$1) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_offset) | 0), data, suffix1, realLen)
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$2 = this.sci_VectorBuilder__f_a3;
    var data$2 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, 1, i3);
    var a$1 = this.sci_VectorBuilder__f_a3.u[0];
    var to = a$1.u.length;
    var prefix2 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 1, to);
    var prefix1$2 = this.sci_VectorBuilder__f_a3.u[0].u[0];
    var original$3 = this.sci_VectorBuilder__f_a3.u[i3];
    var suffix2 = $m_ju_Arrays$().copyOf__AO__I__AO(original$3, i2$2);
    var a$2 = this.sci_VectorBuilder__f_a3.u[i3].u[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$2.u.length === len$2) ? a$2 : $m_ju_Arrays$().copyOf__AO__I__AO(a$2, len$2));
    var len1 = prefix1$2.u.length;
    var len12 = ((len1 + (prefix2.u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$4 = this.sci_VectorBuilder__f_a4;
    var data$3 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, 1, i4);
    var a$3 = this.sci_VectorBuilder__f_a4.u[0];
    var to$1 = a$3.u.length;
    var prefix3 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 1, to$1);
    var a$4 = this.sci_VectorBuilder__f_a4.u[0].u[0];
    var to$2 = a$4.u.length;
    var prefix2$2 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$2);
    var prefix1$3 = this.sci_VectorBuilder__f_a4.u[0].u[0].u[0];
    var original$5 = this.sci_VectorBuilder__f_a4.u[i4];
    var suffix3 = $m_ju_Arrays$().copyOf__AO__I__AO(original$5, i3$2);
    var original$6 = this.sci_VectorBuilder__f_a4.u[i4].u[i3$2];
    var suffix2$2 = $m_ju_Arrays$().copyOf__AO__I__AO(original$6, i2$3);
    var a$5 = this.sci_VectorBuilder__f_a4.u[i4].u[i3$2].u[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$5.u.length === len$3) ? a$5 : $m_ju_Arrays$().copyOf__AO__I__AO(a$5, len$3));
    var len1$2 = prefix1$3.u.length;
    var len12$2 = ((len1$2 + (prefix2$2.u.length << 5)) | 0);
    var len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$7 = this.sci_VectorBuilder__f_a5;
    var data$4 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$7, 1, i5);
    var a$6 = this.sci_VectorBuilder__f_a5.u[0];
    var to$3 = a$6.u.length;
    var prefix4 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$6, 1, to$3);
    var a$7 = this.sci_VectorBuilder__f_a5.u[0].u[0];
    var to$4 = a$7.u.length;
    var prefix3$2 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$4);
    var a$8 = this.sci_VectorBuilder__f_a5.u[0].u[0].u[0];
    var to$5 = a$8.u.length;
    var prefix2$3 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$5);
    var prefix1$4 = this.sci_VectorBuilder__f_a5.u[0].u[0].u[0].u[0];
    var original$8 = this.sci_VectorBuilder__f_a5.u[i5];
    var suffix4 = $m_ju_Arrays$().copyOf__AO__I__AO(original$8, i4$2);
    var original$9 = this.sci_VectorBuilder__f_a5.u[i5].u[i4$2];
    var suffix3$2 = $m_ju_Arrays$().copyOf__AO__I__AO(original$9, i3$3);
    var original$10 = this.sci_VectorBuilder__f_a5.u[i5].u[i4$2].u[i3$3];
    var suffix2$3 = $m_ju_Arrays$().copyOf__AO__I__AO(original$10, i2$4);
    var a$9 = this.sci_VectorBuilder__f_a5.u[i5].u[i4$2].u[i3$3].u[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$9.u.length === len$4) ? a$9 : $m_ju_Arrays$().copyOf__AO__I__AO(a$9, len$4));
    var len1$3 = prefix1$4.u.length;
    var len12$3 = ((len1$3 + (prefix2$3.u.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
    var len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$11 = this.sci_VectorBuilder__f_a6;
    var data$5 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$11, 1, i6);
    var a$10 = this.sci_VectorBuilder__f_a6.u[0];
    var to$6 = a$10.u.length;
    var prefix5 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$10, 1, to$6);
    var a$11 = this.sci_VectorBuilder__f_a6.u[0].u[0];
    var to$7 = a$11.u.length;
    var prefix4$2 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$7);
    var a$12 = this.sci_VectorBuilder__f_a6.u[0].u[0].u[0];
    var to$8 = a$12.u.length;
    var prefix3$3 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$8);
    var a$13 = this.sci_VectorBuilder__f_a6.u[0].u[0].u[0].u[0];
    var to$9 = a$13.u.length;
    var prefix2$4 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$9);
    var prefix1$5 = this.sci_VectorBuilder__f_a6.u[0].u[0].u[0].u[0].u[0];
    var original$12 = this.sci_VectorBuilder__f_a6.u[i6];
    var suffix5 = $m_ju_Arrays$().copyOf__AO__I__AO(original$12, i5$2);
    var original$13 = this.sci_VectorBuilder__f_a6.u[i6].u[i5$2];
    var suffix4$2 = $m_ju_Arrays$().copyOf__AO__I__AO(original$13, i4$3);
    var original$14 = this.sci_VectorBuilder__f_a6.u[i6].u[i5$2].u[i4$3];
    var suffix3$3 = $m_ju_Arrays$().copyOf__AO__I__AO(original$14, i3$4);
    var original$15 = this.sci_VectorBuilder__f_a6.u[i6].u[i5$2].u[i4$3].u[i3$4];
    var suffix2$4 = $m_ju_Arrays$().copyOf__AO__I__AO(original$15, i2$5);
    var a$14 = this.sci_VectorBuilder__f_a6.u[i6].u[i5$2].u[i4$3].u[i3$4].u[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$14.u.length === len$5) ? a$14 : $m_ju_Arrays$().copyOf__AO__I__AO(a$14, len$5));
    var len1$4 = prefix1$5.u.length;
    var len12$4 = ((len1$4 + (prefix2$4.u.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
    var len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem)
});
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
function $p_scm_ArrayBuffer$__resizeEnsuring$1__I__I__I__I($thiz, length, end, n) {
  var hi = (length >> 31);
  var newSize__lo = length;
  var newSize__hi = hi;
  var this$2__lo = newSize__lo;
  var this$2__hi = newSize__hi;
  var lo = this$2__lo;
  var lo$1 = (lo << 1);
  var hi$1 = (((lo >>> 31) | 0) | (this$2__hi << 1));
  var t = (((hi$1 === 0) ? (((-2147483648) ^ lo$1) > (-2147483632)) : (hi$1 > 0)) ? new $c_RTLong(lo$1, hi$1) : new $c_RTLong(16, 0));
  var lo$2 = t.RTLong__f_lo;
  var hi$2 = t.RTLong__f_hi;
  var $$x1__lo = lo$2;
  var $$x1__hi = hi$2;
  newSize__lo = $$x1__lo;
  newSize__hi = $$x1__hi;
  while (true) {
    var this$6__lo = newSize__lo;
    var this$6__hi = newSize__hi;
    var hi$3 = (n >> 31);
    var ahi = this$6__hi;
    if (((ahi === hi$3) ? (((-2147483648) ^ this$6__lo) < ((-2147483648) ^ n)) : (ahi < hi$3))) {
      var this$7__lo = newSize__lo;
      var this$7__hi = newSize__hi;
      var lo$3 = this$7__lo;
      var lo$4 = (lo$3 << 1);
      var hi$4 = (((lo$3 >>> 31) | 0) | (this$7__hi << 1));
      var $$x2__lo = lo$4;
      var $$x2__hi = hi$4;
      newSize__lo = $$x2__lo;
      newSize__hi = $$x2__hi
    } else {
      break
    }
  };
  var this$8__lo = newSize__lo;
  var this$8__hi = newSize__hi;
  var ahi$1 = this$8__hi;
  if (((ahi$1 === 0) ? (((-2147483648) ^ this$8__lo) <= (-1)) : (ahi$1 < 0))) {
    var this$9__lo = newSize__lo;
    var this$9__hi = newSize__hi;
    return this$9__lo
  } else if ((end === 2147483647)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements")
  } else {
    return 2147483647
  }
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  /*<skip>*/
}
$c_scm_ArrayBuffer$.prototype = new $h_O();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__scm_ArrayBuffer(elems)
});
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__scm_ArrayBuffer = (function(coll) {
  var k = coll.knownSize__I();
  if ((k >= 0)) {
    var array = new $ac_O(((k > 16) ? k : 16));
    if ($is_sc_Iterable(coll)) {
      var x2 = coll;
      x2.copyToArray__O__I__I__I(array, 0, 2147483647)
    } else {
      coll.iterator__sc_Iterator().copyToArray__O__I__I__I(array, 0, 2147483647)
    };
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
  } else {
    var this$6 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
    return this$6.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
  }
});
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ArrayBuffer$$anon$1()
});
$c_scm_ArrayBuffer$.prototype.scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO = (function(array, end, n) {
  if ((n <= array.u.length)) {
    return array
  } else {
    var a = new $ac_O($p_scm_ArrayBuffer$__resizeEnsuring$1__I__I__I__I(this, array.u.length, end, n));
    $m_s_Array$().copy__O__I__O__I__I__V(array, 0, a, 0, end);
    return a
  }
});
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.scm_GrowableBuilder__f_elems = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()))
}
$c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$c_scm_ArrayBuffer$$anon$1.prototype.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$$anon$1.prototype = $c_scm_ArrayBuffer$$anon$1.prototype;
$c_scm_ArrayBuffer$$anon$1.prototype.sizeHint__I__V = (function(size) {
  this.scm_GrowableBuilder__f_elems.ensureSize__I__V(size)
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass({
  scm_ArrayBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ArrayBuffer$$anon$1", {
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_ArrayBuffer$$anon$1.prototype.$classData = $d_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$())
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
  /*<skip>*/
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass({
  scm_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", {
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Buffer$.prototype.$classData = $d_scm_Buffer$;
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$()
  };
  return $n_scm_Buffer$
}
/** @constructor */
function $c_scm_HashMap$$anon$6(initialCapacity$1, loadFactor$1) {
  this.scm_GrowableBuilder__f_elems = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), initialCapacity$1, loadFactor$1))
}
$c_scm_HashMap$$anon$6.prototype = new $h_scm_GrowableBuilder();
$c_scm_HashMap$$anon$6.prototype.constructor = $c_scm_HashMap$$anon$6;
/** @constructor */
function $h_scm_HashMap$$anon$6() {
  /*<skip>*/
}
$h_scm_HashMap$$anon$6.prototype = $c_scm_HashMap$$anon$6.prototype;
$c_scm_HashMap$$anon$6.prototype.sizeHint__I__V = (function(size) {
  this.scm_GrowableBuilder__f_elems.sizeHint__I__V(size)
});
var $d_scm_HashMap$$anon$6 = new $TypeData().initClass({
  scm_HashMap$$anon$6: 0
}, false, "scala.collection.mutable.HashMap$$anon$6", {
  scm_HashMap$$anon$6: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_HashMap$$anon$6.prototype.$classData = $d_scm_HashMap$$anon$6;
function $ct_scm_HashMap$HashMapIterator__scm_HashMap__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.scm_HashMap$HashMapIterator__f_$outer = outer
  };
  $thiz.scm_HashMap$HashMapIterator__f_i = 0;
  $thiz.scm_HashMap$HashMapIterator__f_node = null;
  $thiz.scm_HashMap$HashMapIterator__f_len = outer.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length;
  return $thiz
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.scm_HashMap$HashMapIterator__f_i = 0;
  this.scm_HashMap$HashMapIterator__f_node = null;
  this.scm_HashMap$HashMapIterator__f_len = 0;
  this.scm_HashMap$HashMapIterator__f_$outer = null
}
$c_scm_HashMap$HashMapIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_HashMap$HashMapIterator.prototype.constructor = $c_scm_HashMap$HashMapIterator;
/** @constructor */
function $h_scm_HashMap$HashMapIterator() {
  /*<skip>*/
}
$h_scm_HashMap$HashMapIterator.prototype = $c_scm_HashMap$HashMapIterator.prototype;
$c_scm_HashMap$HashMapIterator.prototype.hasNext__Z = (function() {
  if ((this.scm_HashMap$HashMapIterator__f_node !== null)) {
    return true
  } else {
    while ((this.scm_HashMap$HashMapIterator__f_i < this.scm_HashMap$HashMapIterator__f_len)) {
      var n = this.scm_HashMap$HashMapIterator__f_$outer.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[this.scm_HashMap$HashMapIterator__f_i];
      this.scm_HashMap$HashMapIterator__f_i = ((1 + this.scm_HashMap$HashMapIterator__f_i) | 0);
      if ((n !== null)) {
        this.scm_HashMap$HashMapIterator__f_node = n;
        return true
      }
    };
    return false
  }
});
$c_scm_HashMap$HashMapIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  } else {
    var r = this.extract__scm_HashMap$Node__O(this.scm_HashMap$HashMapIterator__f_node);
    this.scm_HashMap$HashMapIterator__f_node = this.scm_HashMap$HashMapIterator__f_node.scm_HashMap$Node__f__next;
    return r
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.scm_ImmutableBuilder__f_elems = null
}
$c_scm_ImmutableBuilder.prototype = new $h_O();
$c_scm_ImmutableBuilder.prototype.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
  /*<skip>*/
}
$h_scm_ImmutableBuilder.prototype = $c_scm_ImmutableBuilder.prototype;
$c_scm_ImmutableBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ImmutableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_scm_ImmutableBuilder.prototype.result__O = (function() {
  return this.scm_ImmutableBuilder__f_elems
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
}
$c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
  /*<skip>*/
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
var $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  /*<skip>*/
}
$c_scm_ListBuffer$.prototype = new $h_O();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.apply__sci_Seq__O = (function(elems) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(elems)
});
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer())
});
$c_scm_ListBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(source)
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = (mutationCount.apply__O() | 0)
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
  /*<skip>*/
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = this.scm_MutationTracker$CheckedIterator__f_mutationCount;
  var actualCount = (this$1.apply__O() | 0);
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return this.scm_MutationTracker$CheckedIterator__f_underlying.hasNext__Z()
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return this.scm_MutationTracker$CheckedIterator__f_underlying.next__O()
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass({
  scm_MutationTracker$CheckedIterator: 0
}, false, "scala.collection.mutable.MutationTracker$CheckedIterator", {
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_MutationTracker$CheckedIterator.prototype.$classData = $d_scm_MutationTracker$CheckedIterator;
function $f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) <= 0)
}
function $f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) >= 0)
}
function $f_s_math_Ordering__max__O__O__O($thiz, x, y) {
  return ($thiz.gteq__O__O__Z(x, y) ? x : y)
}
function $f_s_math_Ordering__min__O__O__O($thiz, x, y) {
  return ($thiz.lteq__O__O__Z(x, y) ? x : y)
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
});
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source).result__O()
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$c_sjsr_WrappedVarArgs$.prototype.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs$.prototype = $c_sjsr_WrappedVarArgs$.prototype;
$c_sjsr_WrappedVarArgs$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(elems)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__sjsr_WrappedVarArgs = (function(source) {
  var this$1 = this.newBuilder__scm_Builder();
  return this$1.addAll__sc_IterableOnce__scm_Growable(source).result__O()
});
$c_sjsr_WrappedVarArgs$.prototype.newBuilder__scm_Builder = (function() {
  var array = [];
  var this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var f = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = x$1$2;
    return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
  }));
  return new $c_scm_Builder$$anon$1(this$4, f)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_LinkForceState(_links, _distance, _strength) {
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__links = null;
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__distance = null;
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength = null;
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__links = _links;
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__distance = _distance;
  this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength = _strength
}
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_LinkForceState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_LinkForceState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_LinkForceState.prototype = $c_Lxyz_bluepitaya_d3force_LinkForceState.prototype;
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.forceId__T = (function() {
  return "link"
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.force__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((s$2) => {
    var s = s$2;
    return $m_Lxyz_bluepitaya_d3force_forces_LinkForce$().force__sci_Seq__F1__s_Option__D__sci_Seq__F1(this.Lxyz_bluepitaya_d3force_LinkForceState__f__links, this.Lxyz_bluepitaya_d3force_LinkForceState__f__distance, this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength, s.Lxyz_bluepitaya_d3force_IterationState__f_alpha, s.Lxyz_bluepitaya_d3force_IterationState__f_nodes)
  }))
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.distance__D__Lxyz_bluepitaya_d3force_LinkForceState = (function(v) {
  var x$1 = new $c_sjsr_AnonFunction1(((x$2$2) => v));
  var x$2$3 = this.Lxyz_bluepitaya_d3force_LinkForceState__f__links;
  var x$3 = this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength;
  return new $c_Lxyz_bluepitaya_d3force_LinkForceState(x$2$3, x$1, x$3)
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.productPrefix__T = (function() {
  return "LinkForceState"
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.productArity__I = (function() {
  return 3
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_LinkForceState__f__links;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_LinkForceState__f__distance;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_LinkForceState)) {
    var LinkForceState$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_LinkForceState__f__links;
    var x$2 = LinkForceState$1.Lxyz_bluepitaya_d3force_LinkForceState__f__links;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_LinkForceState__f__distance;
      var x$4 = LinkForceState$1.Lxyz_bluepitaya_d3force_LinkForceState__f__distance;
      var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$5 = this.Lxyz_bluepitaya_d3force_LinkForceState__f__strength;
      var x$6 = LinkForceState$1.Lxyz_bluepitaya_d3force_LinkForceState__f__strength;
      return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_LinkForceState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_LinkForceState)))
}
var $d_Lxyz_bluepitaya_d3force_LinkForceState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_LinkForceState: 0
}, false, "xyz.bluepitaya.d3force.LinkForceState", {
  Lxyz_bluepitaya_d3force_LinkForceState: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_ForceState: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_LinkForceState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_LinkForceState;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_ManyBodyForceState(options) {
  this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options = null;
  this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options = options
}
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_ManyBodyForceState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_ManyBodyForceState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype = $c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype;
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.forceId__T = (function() {
  return "charge"
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.force__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((s$2) => {
    var s = s$2;
    return $m_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$().force__Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__sci_Seq__D__F1(this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options, s.Lxyz_bluepitaya_d3force_IterationState__f_nodes, s.Lxyz_bluepitaya_d3force_IterationState__f_alpha)
  }))
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.strength__D__Lxyz_bluepitaya_d3force_ManyBodyForceState = (function(v) {
  var stength = new $c_sjsr_AnonFunction1(((x$4$2) => v));
  var this$2 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var distanceMin = this$2.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin;
  var this$3 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var distanceMax = this$3.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax;
  var this$4 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var theta = this$4.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_theta;
  var options = new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options(stength, distanceMin, distanceMax, theta);
  return new $c_Lxyz_bluepitaya_d3force_ManyBodyForceState(options)
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.theta__D__Lxyz_bluepitaya_d3force_ManyBodyForceState = (function(v) {
  var this$1 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var x$2 = this$1.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_stength;
  var this$2 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var x$3 = this$2.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMin;
  var this$3 = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
  var x$4 = this$3.Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options__f_distanceMax;
  var options = new $c_Lxyz_bluepitaya_d3force_forces_ManyBodyForce$Options(x$2, x$3, x$4, v);
  return new $c_Lxyz_bluepitaya_d3force_ManyBodyForceState(options)
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.productPrefix__T = (function() {
  return "ManyBodyForceState"
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.productArity__I = (function() {
  return 1
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_ManyBodyForceState)) {
    var ManyBodyForceState$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
    var x$2 = ManyBodyForceState$1.Lxyz_bluepitaya_d3force_ManyBodyForceState__f_options;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_ManyBodyForceState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_ManyBodyForceState)))
}
var $d_Lxyz_bluepitaya_d3force_ManyBodyForceState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_ManyBodyForceState: 0
}, false, "xyz.bluepitaya.d3force.ManyBodyForceState", {
  Lxyz_bluepitaya_d3force_ManyBodyForceState: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_ForceState: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_ManyBodyForceState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_ManyBodyForceState;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_XForceState(_strength, x) {
  this.Lxyz_bluepitaya_d3force_XForceState__f__strength = null;
  this.Lxyz_bluepitaya_d3force_XForceState__f_x = null;
  this.Lxyz_bluepitaya_d3force_XForceState__f__strength = _strength;
  this.Lxyz_bluepitaya_d3force_XForceState__f_x = x
}
$c_Lxyz_bluepitaya_d3force_XForceState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_XForceState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_XForceState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_XForceState.prototype = $c_Lxyz_bluepitaya_d3force_XForceState.prototype;
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.forceId__T = (function() {
  return "x"
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.force__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((s$2) => {
    var s = s$2;
    return $m_Lxyz_bluepitaya_d3force_forces_AxisForce$().force__F1__Lxyz_bluepitaya_d3force_forces_AxisForce$Axis__F1__D__F1(this.Lxyz_bluepitaya_d3force_XForceState__f__strength, $m_Lxyz_bluepitaya_d3force_forces_AxisForce$X$(), new $c_sjsr_AnonFunction1(((n$2) => {
      var n = n$2;
      return (+this.Lxyz_bluepitaya_d3force_XForceState__f_x.apply__O__O(n))
    })), s.Lxyz_bluepitaya_d3force_IterationState__f_alpha)
  }))
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.strength__D__Lxyz_bluepitaya_d3force_XForceState = (function(v) {
  var _strength = new $c_sjsr_AnonFunction1(((x$7$2) => v));
  var x = this.Lxyz_bluepitaya_d3force_XForceState__f_x;
  return new $c_Lxyz_bluepitaya_d3force_XForceState(_strength, x)
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.productPrefix__T = (function() {
  return "XForceState"
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_XForceState__f__strength;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_XForceState__f_x;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_XForceState)) {
    var XForceState$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_XForceState__f__strength;
    var x$2 = XForceState$1.Lxyz_bluepitaya_d3force_XForceState__f__strength;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_XForceState__f_x;
      var x$4 = XForceState$1.Lxyz_bluepitaya_d3force_XForceState__f_x;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_XForceState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_XForceState)))
}
var $d_Lxyz_bluepitaya_d3force_XForceState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_XForceState: 0
}, false, "xyz.bluepitaya.d3force.XForceState", {
  Lxyz_bluepitaya_d3force_XForceState: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_ForceState: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_XForceState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_XForceState;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_YForceState(_strength, y) {
  this.Lxyz_bluepitaya_d3force_YForceState__f__strength = null;
  this.Lxyz_bluepitaya_d3force_YForceState__f_y = null;
  this.Lxyz_bluepitaya_d3force_YForceState__f__strength = _strength;
  this.Lxyz_bluepitaya_d3force_YForceState__f_y = y
}
$c_Lxyz_bluepitaya_d3force_YForceState.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.constructor = $c_Lxyz_bluepitaya_d3force_YForceState;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_YForceState() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_YForceState.prototype = $c_Lxyz_bluepitaya_d3force_YForceState.prototype;
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.forceId__T = (function() {
  return "y"
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.force__F1 = (function() {
  return new $c_sjsr_AnonFunction1(((s$2) => {
    var s = s$2;
    return $m_Lxyz_bluepitaya_d3force_forces_AxisForce$().force__F1__Lxyz_bluepitaya_d3force_forces_AxisForce$Axis__F1__D__F1(this.Lxyz_bluepitaya_d3force_YForceState__f__strength, $m_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$(), new $c_sjsr_AnonFunction1(((n$2) => {
      var n = n$2;
      return (+this.Lxyz_bluepitaya_d3force_YForceState__f_y.apply__O__O(n))
    })), s.Lxyz_bluepitaya_d3force_IterationState__f_alpha)
  }))
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.strength__D__Lxyz_bluepitaya_d3force_YForceState = (function(v) {
  var _strength = new $c_sjsr_AnonFunction1(((x$11$2) => v));
  var y = this.Lxyz_bluepitaya_d3force_YForceState__f_y;
  return new $c_Lxyz_bluepitaya_d3force_YForceState(_strength, y)
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.productPrefix__T = (function() {
  return "YForceState"
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_YForceState__f__strength;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_YForceState__f_y;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_YForceState)) {
    var YForceState$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_YForceState__f__strength;
    var x$2 = YForceState$1.Lxyz_bluepitaya_d3force_YForceState__f__strength;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_YForceState__f_y;
      var x$4 = YForceState$1.Lxyz_bluepitaya_d3force_YForceState__f_y;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_YForceState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_YForceState)))
}
var $d_Lxyz_bluepitaya_d3force_YForceState = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_YForceState: 0
}, false, "xyz.bluepitaya.d3force.YForceState", {
  Lxyz_bluepitaya_d3force_YForceState: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_ForceState: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_YForceState.prototype.$classData = $d_Lxyz_bluepitaya_d3force_YForceState;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_AxisForce$X$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype;
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.productPrefix__T = (function() {
  return "X"
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.hashCode__I = (function() {
  return 88
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.toString__T = (function() {
  return "X"
});
var $d_Lxyz_bluepitaya_d3force_forces_AxisForce$X$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_AxisForce$X$: 0
}, false, "xyz.bluepitaya.d3force.forces.AxisForce$X$", {
  Lxyz_bluepitaya_d3force_forces_AxisForce$X$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_forces_AxisForce$Axis: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_AxisForce$X$;
var $n_Lxyz_bluepitaya_d3force_forces_AxisForce$X$;
function $m_Lxyz_bluepitaya_d3force_forces_AxisForce$X$() {
  if ((!$n_Lxyz_bluepitaya_d3force_forces_AxisForce$X$)) {
    $n_Lxyz_bluepitaya_d3force_forces_AxisForce$X$ = new $c_Lxyz_bluepitaya_d3force_forces_AxisForce$X$()
  };
  return $n_Lxyz_bluepitaya_d3force_forces_AxisForce$X$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype = $c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype;
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.productPrefix__T = (function() {
  return "Y"
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.hashCode__I = (function() {
  return 89
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.toString__T = (function() {
  return "Y"
});
var $d_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_forces_AxisForce$Y$: 0
}, false, "xyz.bluepitaya.d3force.forces.AxisForce$Y$", {
  Lxyz_bluepitaya_d3force_forces_AxisForce$Y$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_forces_AxisForce$Axis: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$;
var $n_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$;
function $m_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$() {
  if ((!$n_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$)) {
    $n_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$ = new $c_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$()
  };
  return $n_Lxyz_bluepitaya_d3force_forces_AxisForce$Y$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.productPrefix__T = (function() {
  return "BottomLeft"
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.hashCode__I = (function() {
  return 310672626
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.toString__T = (function() {
  return "BottomLeft"
});
var $d_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_BottomLeft$: 0
}, false, "xyz.bluepitaya.d3force.quadtree.BottomLeft$", {
  Lxyz_bluepitaya_d3force_quadtree_BottomLeft$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Quadrant: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$;
var $n_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$;
function $m_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$() {
  if ((!$n_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$)) {
    $n_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$ = new $c_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$()
  };
  return $n_Lxyz_bluepitaya_d3force_quadtree_BottomLeft$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_BottomRight$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.productPrefix__T = (function() {
  return "BottomRight"
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.hashCode__I = (function() {
  return 1046577809
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.toString__T = (function() {
  return "BottomRight"
});
var $d_Lxyz_bluepitaya_d3force_quadtree_BottomRight$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_BottomRight$: 0
}, false, "xyz.bluepitaya.d3force.quadtree.BottomRight$", {
  Lxyz_bluepitaya_d3force_quadtree_BottomRight$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Quadrant: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_BottomRight$;
var $n_Lxyz_bluepitaya_d3force_quadtree_BottomRight$;
function $m_Lxyz_bluepitaya_d3force_quadtree_BottomRight$() {
  if ((!$n_Lxyz_bluepitaya_d3force_quadtree_BottomRight$)) {
    $n_Lxyz_bluepitaya_d3force_quadtree_BottomRight$ = new $c_Lxyz_bluepitaya_d3force_quadtree_BottomRight$()
  };
  return $n_Lxyz_bluepitaya_d3force_quadtree_BottomRight$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_Leaf(point, data, metadata) {
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata = null;
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point = point;
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data = data;
  this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata = metadata
}
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_Leaf;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_Leaf() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.metadata__s_Option = (function() {
  return this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.productPrefix__T = (function() {
  return "Leaf"
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.productArity__I = (function() {
  return 3
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
      break
    }
    case 2: {
      return this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_Leaf)) {
    var Leaf$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
    var x$2 = Leaf$1.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_point;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
      var x$4 = Leaf$1.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_data;
      var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$5 = this.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata;
      var x$6 = Leaf$1.Lxyz_bluepitaya_d3force_quadtree_Leaf__f_metadata;
      return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_Leaf(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_Leaf)))
}
var $d_Lxyz_bluepitaya_d3force_quadtree_Leaf = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_Leaf: 0
}, false, "xyz.bluepitaya.d3force.quadtree.Leaf", {
  Lxyz_bluepitaya_d3force_quadtree_Leaf: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Vertex: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_Leaf.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_Leaf;
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_TopLeft$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.productPrefix__T = (function() {
  return "TopLeft"
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.hashCode__I = (function() {
  return 524532444
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.toString__T = (function() {
  return "TopLeft"
});
var $d_Lxyz_bluepitaya_d3force_quadtree_TopLeft$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_TopLeft$: 0
}, false, "xyz.bluepitaya.d3force.quadtree.TopLeft$", {
  Lxyz_bluepitaya_d3force_quadtree_TopLeft$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Quadrant: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_TopLeft$;
var $n_Lxyz_bluepitaya_d3force_quadtree_TopLeft$;
function $m_Lxyz_bluepitaya_d3force_quadtree_TopLeft$() {
  if ((!$n_Lxyz_bluepitaya_d3force_quadtree_TopLeft$)) {
    $n_Lxyz_bluepitaya_d3force_quadtree_TopLeft$ = new $c_Lxyz_bluepitaya_d3force_quadtree_TopLeft$()
  };
  return $n_Lxyz_bluepitaya_d3force_quadtree_TopLeft$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_TopRight$() {
  /*<skip>*/
}
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_TopRight$;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_TopRight$() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.productPrefix__T = (function() {
  return "TopRight"
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.productArity__I = (function() {
  return 0
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.hashCode__I = (function() {
  return (-913702425)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.toString__T = (function() {
  return "TopRight"
});
var $d_Lxyz_bluepitaya_d3force_quadtree_TopRight$ = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_TopRight$: 0
}, false, "xyz.bluepitaya.d3force.quadtree.TopRight$", {
  Lxyz_bluepitaya_d3force_quadtree_TopRight$: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Quadrant: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_TopRight$.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_TopRight$;
var $n_Lxyz_bluepitaya_d3force_quadtree_TopRight$;
function $m_Lxyz_bluepitaya_d3force_quadtree_TopRight$() {
  if ((!$n_Lxyz_bluepitaya_d3force_quadtree_TopRight$)) {
    $n_Lxyz_bluepitaya_d3force_quadtree_TopRight$ = new $c_Lxyz_bluepitaya_d3force_quadtree_TopRight$()
  };
  return $n_Lxyz_bluepitaya_d3force_quadtree_TopRight$
}
/** @constructor */
function $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode(children, metadata) {
  this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children = null;
  this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata = null;
  this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children = children;
  this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata = metadata
}
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype = new $h_O();
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.constructor = $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode;
/** @constructor */
function $h_Lxyz_bluepitaya_d3force_quadtree_TreeNode() {
  /*<skip>*/
}
$h_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype = $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype;
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.metadata__s_Option = (function() {
  return this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.productPrefix__T = (function() {
  return "TreeNode"
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.productArity__I = (function() {
  return 2
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children;
      break
    }
    case 1: {
      return this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lxyz_bluepitaya_d3force_quadtree_TreeNode)) {
    var TreeNode$1 = x$1;
    var x = this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children;
    var x$2 = TreeNode$1.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_children;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
      var x$4 = TreeNode$1.Lxyz_bluepitaya_d3force_quadtree_TreeNode__f_metadata;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
function $isArrayOf_Lxyz_bluepitaya_d3force_quadtree_TreeNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lxyz_bluepitaya_d3force_quadtree_TreeNode)))
}
var $d_Lxyz_bluepitaya_d3force_quadtree_TreeNode = new $TypeData().initClass({
  Lxyz_bluepitaya_d3force_quadtree_TreeNode: 0
}, false, "xyz.bluepitaya.d3force.quadtree.TreeNode", {
  Lxyz_bluepitaya_d3force_quadtree_TreeNode: 1,
  O: 1,
  Lxyz_bluepitaya_d3force_quadtree_Vertex: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lxyz_bluepitaya_d3force_quadtree_TreeNode.prototype.$classData = $d_Lxyz_bluepitaya_d3force_quadtree_TreeNode;
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = that;
    var b = $uJ(x2);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $$x1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($$x1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul($thiz.charCodeAt(index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $thiz.length) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw new $c_jl_StringIndexOutOfBoundsException("Index out of Bound")
  };
  var offset = ((dstBegin - srcBegin) | 0);
  var i = srcBegin;
  while ((i < srcEnd)) {
    var $$x1 = i;
    var index = i;
    dst.u[(($$x1 + offset) | 0)] = $thiz.charCodeAt(index);
    i = ((1 + i) | 0)
  }
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = x$1;
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
  } else {
    return false
  }
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_T2$mcZZ$sp(_1$mcZ$sp, _2$mcZ$sp) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2$mcZZ$sp__f__1$mcZ$sp = false;
  this.T2$mcZZ$sp__f__2$mcZ$sp = false;
  this.T2$mcZZ$sp__f__1$mcZ$sp = _1$mcZ$sp;
  this.T2$mcZZ$sp__f__2$mcZ$sp = _2$mcZ$sp;
  $ct_T2__O__O__(this, null, null)
}
$c_T2$mcZZ$sp.prototype = new $h_T2();
$c_T2$mcZZ$sp.prototype.constructor = $c_T2$mcZZ$sp;
/** @constructor */
function $h_T2$mcZZ$sp() {
  /*<skip>*/
}
$h_T2$mcZZ$sp.prototype = $c_T2$mcZZ$sp.prototype;
$c_T2$mcZZ$sp.prototype._2__O = (function() {
  return this.T2$mcZZ$sp__f__2$mcZ$sp
});
$c_T2$mcZZ$sp.prototype._1__O = (function() {
  return this.T2$mcZZ$sp__f__1$mcZ$sp
});
var $d_T2$mcZZ$sp = new $TypeData().initClass({
  T2$mcZZ$sp: 0
}, false, "scala.Tuple2$mcZZ$sp", {
  T2$mcZZ$sp: 1,
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2$mcZZ$sp.prototype.$classData = $d_T2$mcZZ$sp;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.newSpecificBuilder__scm_Builder = (function() {
  return this.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder()
});
$c_sc_AbstractIterable.prototype.map__F1__O = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f)
});
$c_sc_AbstractIterable.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_IterableOps__flatMap__F1__O(this, f)
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
});
$c_sc_AbstractIterable.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractIterable.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sc_AbstractIterable.prototype.isEmpty__Z = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this)
});
$c_sc_AbstractIterable.prototype.size__I = (function() {
  return $f_sc_IterableOnceOps__size__I(this)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sc_AbstractIterable.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterable.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sc_AbstractIterable.prototype.toSeq__sci_Seq = (function() {
  return $m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this)
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1)
});
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = self.length__I();
  return $thiz
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.scm_ImmutableBuilder__f_elems = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty)
}
$c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$c_sc_Iterator$$anon$21.prototype.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$21.prototype = $c_sc_Iterator$$anon$21.prototype;
$c_sc_Iterator$$anon$21.prototype.addOne__O__sc_Iterator$$anon$21 = (function(elem) {
  var this$3 = this.scm_ImmutableBuilder__f_elems;
  var xs = new $c_sjsr_AnonFunction0((() => {
    $m_sc_Iterator$();
    return new $c_sc_Iterator$$anon$20(elem)
  }));
  this.scm_ImmutableBuilder__f_elems = this$3.concat__F0__sc_Iterator(xs);
  return this
});
$c_sc_Iterator$$anon$21.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sc_Iterator$$anon$21(elem)
});
var $d_sc_Iterator$$anon$21 = new $TypeData().initClass({
  sc_Iterator$$anon$21: 0
}, false, "scala.collection.Iterator$$anon$21", {
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sc_Iterator$$anon$21.prototype.$classData = $d_sc_Iterator$$anon$21;
function $f_sc_MapOps__getOrElse__O__F0__O($thiz, key, default$1) {
  var x1 = $thiz.get__O__s_Option(key);
  if ((x1 instanceof $c_s_Some)) {
    var x2 = x1;
    var v = x2.s_Some__f_value;
    return v
  } else {
    var x = $m_s_None$();
    if ((x === x1)) {
      return default$1.apply__O()
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    var next = it.next__O();
    f.apply__O__O__O(next._1__O(), next._2__O())
  }
}
function $f_sc_MapOps__default__O__O($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  var this$2 = $thiz.iterator__sc_Iterator();
  var f = new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = x0$1$2;
    if ((x0$1 !== null)) {
      var k = x0$1._1__O();
      var v = x0$1._2__O();
      return ((k + " -> ") + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }));
  var this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end)
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.iterableFactory__sc_SeqFactory().newBuilder__scm_Builder();
  if (($thiz.knownSize__I() >= 0)) {
    b.sizeHint__I__V(((1 + $thiz.length__I()) | 0))
  };
  b.addAll__sc_IterableOnce__scm_Growable($thiz);
  b.addOne__O__scm_Growable(elem);
  return b.result__O()
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.iterableFactory__sc_SeqFactory().newBuilder__scm_Builder();
  b.addAll__sc_IterableOnce__scm_Growable($thiz);
  b.addAll__sc_IterableOnce__scm_Growable(suffix);
  return b.result__O()
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.sci_Map$Map2$Map2Iterator__f_i = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
}
$c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$c_sci_Map$Map2$$anon$1.prototype.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
  /*<skip>*/
}
$h_sci_Map$Map2$$anon$1.prototype = $c_sci_Map$Map2$$anon$1.prototype;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.sci_Map$Map3$Map3Iterator__f_i = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
}
$c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$c_sci_Map$Map3$$anon$4.prototype.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
  /*<skip>*/
}
$h_sci_Map$Map3$$anon$4.prototype = $c_sci_Map$Map3$$anon$4.prototype;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.sci_Map$Map4$Map4Iterator__f_i = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
}
$c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$c_sci_Map$Map4$$anon$7.prototype.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
  /*<skip>*/
}
$h_sci_Map$Map4$$anon$7.prototype = $c_sci_Map$Map4$$anon$7.prototype;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.sci_RangeIterator__f_step = 0;
  this.sci_RangeIterator__f_lastElement = 0;
  this.sci_RangeIterator__f__hasNext = false;
  this.sci_RangeIterator__f__next = 0;
  this.sci_RangeIterator__f_step = step;
  this.sci_RangeIterator__f_lastElement = lastElement;
  this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
  this.sci_RangeIterator__f__next = start
}
$c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_RangeIterator.prototype.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
  /*<skip>*/
}
$h_sci_RangeIterator.prototype = $c_sci_RangeIterator.prototype;
$c_sci_RangeIterator.prototype.knownSize__I = (function() {
  return (this.sci_RangeIterator__f__hasNext ? ((1 + $intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
});
$c_sci_RangeIterator.prototype.hasNext__Z = (function() {
  return this.sci_RangeIterator__f__hasNext
});
$c_sci_RangeIterator.prototype.next__I = (function() {
  if ((!this.sci_RangeIterator__f__hasNext)) {
    $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  var value = this.sci_RangeIterator__f__next;
  this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
  this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
  return value
});
$c_sci_RangeIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var value = this.sci_RangeIterator__f__next;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.sci_RangeIterator__f_step, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.sci_RangeIterator__f_step > 0)) {
      var value$2 = this.sci_RangeIterator__f_lastElement;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$6__lo;
      var value$3 = this.sci_RangeIterator__f_lastElement;
      var hi$4 = (value$3 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
    } else if ((this.sci_RangeIterator__f_step < 0)) {
      var value$4 = this.sci_RangeIterator__f_lastElement;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$10__lo;
      var value$5 = this.sci_RangeIterator__f_lastElement;
      var hi$6 = (value$5 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
    }
  };
  return this
});
$c_sci_RangeIterator.prototype.next__O = (function() {
  return this.next__I()
});
var $d_sci_RangeIterator = new $TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
/** @constructor */
function $c_scm_HashMap$$anon$1(outer) {
  this.scm_HashMap$HashMapIterator__f_i = 0;
  this.scm_HashMap$HashMapIterator__f_node = null;
  this.scm_HashMap$HashMapIterator__f_len = 0;
  this.scm_HashMap$HashMapIterator__f_$outer = null;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer)
}
$c_scm_HashMap$$anon$1.prototype = new $h_scm_HashMap$HashMapIterator();
$c_scm_HashMap$$anon$1.prototype.constructor = $c_scm_HashMap$$anon$1;
/** @constructor */
function $h_scm_HashMap$$anon$1() {
  /*<skip>*/
}
$h_scm_HashMap$$anon$1.prototype = $c_scm_HashMap$$anon$1.prototype;
$c_scm_HashMap$$anon$1.prototype.extract__scm_HashMap$Node__O = (function(nd) {
  return $ct_T2__O__O__(new $c_T2(), nd.scm_HashMap$Node__f__key, nd.scm_HashMap$Node__f__value)
});
var $d_scm_HashMap$$anon$1 = new $TypeData().initClass({
  scm_HashMap$$anon$1: 0
}, false, "scala.collection.mutable.HashMap$$anon$1", {
  scm_HashMap$$anon$1: 1,
  scm_HashMap$HashMapIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashMap$$anon$1.prototype.$classData = $d_scm_HashMap$$anon$1;
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.scm_HashMap$HashMapIterator__f_i = 0;
  this.scm_HashMap$HashMapIterator__f_node = null;
  this.scm_HashMap$HashMapIterator__f_len = 0;
  this.scm_HashMap$HashMapIterator__f_$outer = null;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer)
}
$c_scm_HashMap$$anon$4.prototype = new $h_scm_HashMap$HashMapIterator();
$c_scm_HashMap$$anon$4.prototype.constructor = $c_scm_HashMap$$anon$4;
/** @constructor */
function $h_scm_HashMap$$anon$4() {
  /*<skip>*/
}
$h_scm_HashMap$$anon$4.prototype = $c_scm_HashMap$$anon$4.prototype;
$c_scm_HashMap$$anon$4.prototype.extract__scm_HashMap$Node__O = (function(nd) {
  return nd
});
var $d_scm_HashMap$$anon$4 = new $TypeData().initClass({
  scm_HashMap$$anon$4: 0
}, false, "scala.collection.mutable.HashMap$$anon$4", {
  scm_HashMap$$anon$4: 1,
  scm_HashMap$HashMapIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashMap$$anon$4.prototype.$classData = $d_scm_HashMap$$anon$4;
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.scm_HashMap$HashMapIterator__f_i = 0;
  this.scm_HashMap$HashMapIterator__f_node = null;
  this.scm_HashMap$HashMapIterator__f_len = 0;
  this.scm_HashMap$HashMapIterator__f_$outer = null;
  this.scm_HashMap$$anon$5__f_hash = 0;
  this.scm_HashMap$$anon$5__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scm_HashMap$$anon$5__f_$outer = outer
  };
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.scm_HashMap$$anon$5__f_hash = 0
}
$c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$c_scm_HashMap$$anon$5.prototype.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
  /*<skip>*/
}
$h_scm_HashMap$$anon$5.prototype = $c_scm_HashMap$$anon$5.prototype;
$c_scm_HashMap$$anon$5.prototype.hashCode__I = (function() {
  return this.scm_HashMap$$anon$5__f_hash
});
$c_scm_HashMap$$anon$5.prototype.extract__scm_HashMap$Node__O = (function(nd) {
  var $$x1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.scm_HashMap$Node__f__hash;
  var x = nd.scm_HashMap$Node__f__value;
  this.scm_HashMap$$anon$5__f_hash = $$x1.tuple2Hash__O__O__I((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().anyHash__O__I(x));
  return this
});
var $d_scm_HashMap$$anon$5 = new $TypeData().initClass({
  scm_HashMap$$anon$5: 0
}, false, "scala.collection.mutable.HashMap$$anon$5", {
  scm_HashMap$$anon$5: 1,
  scm_HashMap$HashMapIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashMap$$anon$5.prototype.$classData = $d_scm_HashMap$$anon$5;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = null;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = (mutationCount.apply__O() | 0)
}
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
  /*<skip>*/
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype;
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount;
  var this$1 = this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount;
  var actualCount = (this$1.apply__O() | 0);
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().initClass({
  scm_CheckedIndexedSeqView$CheckedIterator: 0
}, false, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", {
  scm_CheckedIndexedSeqView$CheckedIterator: 1,
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.$classData = $d_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $c_s_math_Ordering$DeprecatedDoubleOrdering$() {
  /*<skip>*/
}
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = new $h_O();
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.constructor = $c_s_math_Ordering$DeprecatedDoubleOrdering$;
/** @constructor */
function $h_s_math_Ordering$DeprecatedDoubleOrdering$() {
  /*<skip>*/
}
$h_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = $c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype;
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.lteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y)
});
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.gteq__O__O__Z = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y)
});
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.max__O__O__O = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y)
});
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.min__O__O__O = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y)
});
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.compare__O__O__I = (function(x, y) {
  var x$1 = (+x);
  var y$1 = (+y);
  return $m_jl_Double$().compare__D__D__I(x$1, y$1)
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().initClass({
  s_math_Ordering$DeprecatedDoubleOrdering$: 0
}, false, "scala.math.Ordering$DeprecatedDoubleOrdering$", {
  s_math_Ordering$DeprecatedDoubleOrdering$: 1,
  O: 1,
  s_math_Ordering$Double$TotalOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.$classData = $d_s_math_Ordering$DeprecatedDoubleOrdering$;
var $n_s_math_Ordering$DeprecatedDoubleOrdering$;
function $m_s_math_Ordering$DeprecatedDoubleOrdering$() {
  if ((!$n_s_math_Ordering$DeprecatedDoubleOrdering$)) {
    $n_s_math_Ordering$DeprecatedDoubleOrdering$ = new $c_s_math_Ordering$DeprecatedDoubleOrdering$()
  };
  return $n_s_math_Ordering$DeprecatedDoubleOrdering$
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
  /*<skip>*/
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_AnyValManifest__f_hashCode
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.tail__O();
      n = temp$n;
      s = temp$s
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $c_s_reflect_ManifestFactory$IntManifest.prototype;
$c_s_reflect_ManifestFactory$IntManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_I.getClassOf()
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
});
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sc_View$()
});
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
$c_sc_AbstractView.prototype.stringPrefix__T = (function() {
  return "View"
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Int";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = o;
      if (x2.canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.sc_View$$anon$1__f_it$1 = null;
  this.sc_View$$anon$1__f_it$1 = it$1
}
$c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$c_sc_View$$anon$1.prototype.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
  /*<skip>*/
}
$h_sc_View$$anon$1.prototype = $c_sc_View$$anon$1.prototype;
$c_sc_View$$anon$1.prototype.iterator__sc_Iterator = (function() {
  return this.sc_View$$anon$1__f_it$1.apply__O()
});
var $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
/** @constructor */
function $c_sc_View$Appended(underlying, elem) {
  this.sc_View$Appended__f_underlying = null;
  this.sc_View$Appended__f_elem = null;
  this.sc_View$Appended__f_underlying = underlying;
  this.sc_View$Appended__f_elem = elem
}
$c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$c_sc_View$Appended.prototype.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
  /*<skip>*/
}
$h_sc_View$Appended.prototype = $c_sc_View$Appended.prototype;
$c_sc_View$Appended.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_View$Concat(this.sc_View$Appended__f_underlying, new $c_sc_View$Single(this.sc_View$Appended__f_elem)).iterator__sc_Iterator()
});
$c_sc_View$Appended.prototype.knownSize__I = (function() {
  var size = this.sc_View$Appended__f_underlying.knownSize__I();
  return ((size >= 0) ? ((1 + size) | 0) : (-1))
});
$c_sc_View$Appended.prototype.isEmpty__Z = (function() {
  return false
});
var $d_sc_View$Appended = new $TypeData().initClass({
  sc_View$Appended: 0
}, false, "scala.collection.View$Appended", {
  sc_View$Appended: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Appended.prototype.$classData = $d_sc_View$Appended;
/** @constructor */
function $c_sc_View$Concat(prefix, suffix) {
  this.sc_View$Concat__f_prefix = null;
  this.sc_View$Concat__f_suffix = null;
  this.sc_View$Concat__f_prefix = prefix;
  this.sc_View$Concat__f_suffix = suffix
}
$c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$c_sc_View$Concat.prototype.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
  /*<skip>*/
}
$h_sc_View$Concat.prototype = $c_sc_View$Concat.prototype;
$c_sc_View$Concat.prototype.iterator__sc_Iterator = (function() {
  var this$2 = this.sc_View$Concat__f_prefix.iterator__sc_Iterator();
  var xs = new $c_sjsr_AnonFunction0((() => this.sc_View$Concat__f_suffix.iterator__sc_Iterator()));
  return this$2.concat__F0__sc_Iterator(xs)
});
$c_sc_View$Concat.prototype.knownSize__I = (function() {
  var prefixSize = this.sc_View$Concat__f_prefix.knownSize__I();
  if ((prefixSize >= 0)) {
    var suffixSize = this.sc_View$Concat__f_suffix.knownSize__I();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1))
  } else {
    return (-1)
  }
});
$c_sc_View$Concat.prototype.isEmpty__Z = (function() {
  return (this.sc_View$Concat__f_prefix.isEmpty__Z() && this.sc_View$Concat__f_suffix.isEmpty__Z())
});
var $d_sc_View$Concat = new $TypeData().initClass({
  sc_View$Concat: 0
}, false, "scala.collection.View$Concat", {
  sc_View$Concat: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Concat.prototype.$classData = $d_sc_View$Concat;
/** @constructor */
function $c_sc_View$FlatMap(underlying, f) {
  this.sc_View$FlatMap__f_underlying = null;
  this.sc_View$FlatMap__f_f = null;
  this.sc_View$FlatMap__f_underlying = underlying;
  this.sc_View$FlatMap__f_f = f
}
$c_sc_View$FlatMap.prototype = new $h_sc_AbstractView();
$c_sc_View$FlatMap.prototype.constructor = $c_sc_View$FlatMap;
/** @constructor */
function $h_sc_View$FlatMap() {
  /*<skip>*/
}
$h_sc_View$FlatMap.prototype = $c_sc_View$FlatMap.prototype;
$c_sc_View$FlatMap.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sc_View$FlatMap__f_underlying.iterator__sc_Iterator();
  var f = this.sc_View$FlatMap__f_f;
  return new $c_sc_Iterator$$anon$10(this$1, f)
});
$c_sc_View$FlatMap.prototype.knownSize__I = (function() {
  return ((this.sc_View$FlatMap__f_underlying.knownSize__I() === 0) ? 0 : (-1))
});
$c_sc_View$FlatMap.prototype.isEmpty__Z = (function() {
  var this$1 = this.iterator__sc_Iterator();
  return (!this$1.hasNext__Z())
});
var $d_sc_View$FlatMap = new $TypeData().initClass({
  sc_View$FlatMap: 0
}, false, "scala.collection.View$FlatMap", {
  sc_View$FlatMap: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$FlatMap.prototype.$classData = $d_sc_View$FlatMap;
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  $thiz.sc_View$Map__f_underlying = underlying;
  $thiz.sc_View$Map__f_f = f;
  return $thiz
}
/** @constructor */
function $c_sc_View$Map() {
  this.sc_View$Map__f_underlying = null;
  this.sc_View$Map__f_f = null
}
$c_sc_View$Map.prototype = new $h_sc_AbstractView();
$c_sc_View$Map.prototype.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
  /*<skip>*/
}
$h_sc_View$Map.prototype = $c_sc_View$Map.prototype;
$c_sc_View$Map.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sc_View$Map__f_underlying.iterator__sc_Iterator();
  var f = this.sc_View$Map__f_f;
  return new $c_sc_Iterator$$anon$9(this$1, f)
});
$c_sc_View$Map.prototype.knownSize__I = (function() {
  return this.sc_View$Map__f_underlying.knownSize__I()
});
$c_sc_View$Map.prototype.isEmpty__Z = (function() {
  return this.sc_View$Map__f_underlying.isEmpty__Z()
});
var $d_sc_View$Map = new $TypeData().initClass({
  sc_View$Map: 0
}, false, "scala.collection.View$Map", {
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Map.prototype.$classData = $d_sc_View$Map;
/** @constructor */
function $c_sc_View$Single(a) {
  this.sc_View$Single__f_a = null;
  this.sc_View$Single__f_a = a
}
$c_sc_View$Single.prototype = new $h_sc_AbstractView();
$c_sc_View$Single.prototype.constructor = $c_sc_View$Single;
/** @constructor */
function $h_sc_View$Single() {
  /*<skip>*/
}
$h_sc_View$Single.prototype = $c_sc_View$Single.prototype;
$c_sc_View$Single.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var a = this.sc_View$Single__f_a;
  return new $c_sc_Iterator$$anon$20(a)
});
$c_sc_View$Single.prototype.knownSize__I = (function() {
  return 1
});
$c_sc_View$Single.prototype.isEmpty__Z = (function() {
  return false
});
var $d_sc_View$Single = new $TypeData().initClass({
  sc_View$Single: 0
}, false, "scala.collection.View$Single", {
  sc_View$Single: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Single.prototype.$classData = $d_sc_View$Single;
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Map(o)) {
    var x2 = o;
    if (($thiz.size__I() === x2.size__I())) {
      try {
        return $thiz.forall__F1__Z(new $c_sjsr_AnonFunction1(((kv$2) => {
          var kv = kv$2;
          return $m_sr_BoxesRunTime$().equals__O__O__Z(x2.getOrElse__O__F0__O(kv._1__O(), $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinelFn), kv._2__O())
        })))
      } catch (e) {
        if (false) {
          return false
        } else {
          throw e
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.appended__O__O = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem)
});
$c_sc_AbstractSeq.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
$c_sc_AbstractSeqView.prototype.map__F1__sc_SeqView = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f)
});
$c_sc_AbstractSeqView.prototype.stringPrefix__T = (function() {
  return "SeqView"
});
$c_sc_AbstractSeqView.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_AbstractSeqView.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len)
});
$c_sc_AbstractSeqView.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeqView.prototype.map__F1__O = (function(f) {
  return this.map__F1__sc_SeqView(f)
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
/** @constructor */
function $c_sc_AbstractMap() {
  /*<skip>*/
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
  /*<skip>*/
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.equals__O__Z = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o)
});
$c_sc_AbstractMap.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this)
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map"
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractMap.prototype.newSpecificBuilder__scm_Builder = (function() {
  return this.mapFactory__sc_MapFactory().newBuilder__scm_Builder()
});
$c_sc_AbstractMap.prototype.foreachEntry__F2__V = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f)
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return this.sc_SeqView$Id__f_underlying.length__I()
});
$c_sc_SeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
});
$c_sc_SeqView$Id.prototype.knownSize__I = (function() {
  return this.sc_SeqView$Id__f_underlying.knownSize__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
});
var $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.sc_SeqView$Map__f_underlying = underlying;
  $thiz.sc_SeqView$Map__f_f = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.sc_View$Map__f_underlying = null;
  this.sc_View$Map__f_f = null;
  this.sc_SeqView$Map__f_underlying = null;
  this.sc_SeqView$Map__f_f = null
}
$c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$c_sc_SeqView$Map.prototype.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
  /*<skip>*/
}
$h_sc_SeqView$Map.prototype = $c_sc_SeqView$Map.prototype;
$c_sc_SeqView$Map.prototype.map__F1__sc_SeqView = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f)
});
$c_sc_SeqView$Map.prototype.stringPrefix__T = (function() {
  return "SeqView"
});
$c_sc_SeqView$Map.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_SeqView$Map.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len)
});
$c_sc_SeqView$Map.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_SeqView$Map.prototype.apply__I__O = (function(idx) {
  return this.sc_SeqView$Map__f_f.apply__O__O(this.sc_SeqView$Map__f_underlying.apply__I__O(idx))
});
$c_sc_SeqView$Map.prototype.length__I = (function() {
  return this.sc_SeqView$Map__f_underlying.length__I()
});
$c_sc_SeqView$Map.prototype.map__F1__O = (function(f) {
  return this.map__F1__sc_SeqView(f)
});
var $d_sc_SeqView$Map = new $TypeData().initClass({
  sc_SeqView$Map: 0
}, false, "scala.collection.SeqView$Map", {
  sc_SeqView$Map: 1,
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Map.prototype.$classData = $d_sc_SeqView$Map;
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)))
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map)))
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
  /*<skip>*/
}
$c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$c_sc_AbstractIndexedSeqView.prototype.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
  /*<skip>*/
}
$h_sc_AbstractIndexedSeqView.prototype = $c_sc_AbstractIndexedSeqView.prototype;
$c_sc_AbstractIndexedSeqView.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this)
});
$c_sc_AbstractIndexedSeqView.prototype.map__F1__sc_IndexedSeqView = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f)
});
$c_sc_AbstractIndexedSeqView.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_AbstractIndexedSeqView.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_AbstractIndexedSeqView.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sc_AbstractIndexedSeqView.prototype.map__F1__sc_SeqView = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
$c_sc_AbstractIndexedSeqView.prototype.map__F1__O = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sc_IndexedSeqView$Id.prototype.map__F1__sc_SeqView = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f)
});
$c_sc_IndexedSeqView$Id.prototype.map__F1__O = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f)
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.sc_View$Map__f_underlying = null;
  this.sc_View$Map__f_f = null;
  this.sc_SeqView$Map__f_underlying = null;
  this.sc_SeqView$Map__f_f = null
}
$c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$c_sc_IndexedSeqView$Map.prototype.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Map.prototype = $c_sc_IndexedSeqView$Map.prototype;
$c_sc_IndexedSeqView$Map.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this)
});
$c_sc_IndexedSeqView$Map.prototype.map__F1__sc_IndexedSeqView = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f)
});
$c_sc_IndexedSeqView$Map.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Map.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Map.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sc_IndexedSeqView$Map.prototype.map__F1__sc_SeqView = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
$c_sc_IndexedSeqView$Map.prototype.map__F1__O = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
var $d_sc_IndexedSeqView$Map = new $TypeData().initClass({
  sc_IndexedSeqView$Map: 0
}, false, "scala.collection.IndexedSeqView$Map", {
  sc_IndexedSeqView$Map: 1,
  sc_SeqView$Map: 1,
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Map.prototype.$classData = $d_sc_IndexedSeqView$Map;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
$c_sci_AbstractSeq.prototype.toSeq__sci_Seq = (function() {
  return this
});
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.scm_ArrayBufferView__f_underlying = null;
  this.scm_ArrayBufferView__f_mutationCount = null;
  this.scm_ArrayBufferView__f_underlying = underlying;
  this.scm_ArrayBufferView__f_mutationCount = mutationCount
}
$c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$c_scm_ArrayBufferView.prototype.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
  /*<skip>*/
}
$h_scm_ArrayBufferView.prototype = $c_scm_ArrayBufferView.prototype;
$c_scm_ArrayBufferView.prototype.apply__I__O = (function(n) {
  return this.scm_ArrayBufferView__f_underlying.apply__I__O(n)
});
$c_scm_ArrayBufferView.prototype.length__I = (function() {
  var this$1 = this.scm_ArrayBufferView__f_underlying;
  return this$1.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBufferView.prototype.className__T = (function() {
  return "ArrayBufferView"
});
$c_scm_ArrayBufferView.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.scm_ArrayBufferView__f_mutationCount)
});
$c_scm_ArrayBufferView.prototype.map__F1__sc_IndexedSeqView = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.scm_ArrayBufferView__f_mutationCount)
});
$c_scm_ArrayBufferView.prototype.map__F1__sc_SeqView = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
$c_scm_ArrayBufferView.prototype.map__F1__O = (function(f) {
  return this.map__F1__sc_IndexedSeqView(f)
});
var $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
/** @constructor */
function $c_sci_AbstractMap() {
  /*<skip>*/
}
$c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
  /*<skip>*/
}
$h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
$c_sci_AbstractMap.prototype.mapFactory__sc_MapFactory = (function() {
  return $m_sci_Map$()
});
$c_sci_AbstractMap.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return this
});
$c_sci_AbstractMap.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_Iterable$()
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = that;
    return ($thiz.length__I() === x2.length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = o;
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === x2.length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = x2.applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          var thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
/** @constructor */
function $c_sc_StringView(s) {
  this.sc_StringView__f_s = null;
  this.sc_StringView__f_s = s
}
$c_sc_StringView.prototype = new $h_sc_AbstractIndexedSeqView();
$c_sc_StringView.prototype.constructor = $c_sc_StringView;
/** @constructor */
function $h_sc_StringView() {
  /*<skip>*/
}
$h_sc_StringView.prototype = $c_sc_StringView.prototype;
$c_sc_StringView.prototype.length__I = (function() {
  var this$1 = this.sc_StringView__f_s;
  return this$1.length
});
$c_sc_StringView.prototype.toString__T = (function() {
  return (("StringView(" + this.sc_StringView__f_s) + ")")
});
$c_sc_StringView.prototype.productPrefix__T = (function() {
  return "StringView"
});
$c_sc_StringView.prototype.productArity__I = (function() {
  return 1
});
$c_sc_StringView.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_sc_StringView.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sc_StringView.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_sc_StringView.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_sc_StringView)) {
    var StringView$1 = x$1;
    return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
  } else {
    return false
  }
});
$c_sc_StringView.prototype.apply__I__O = (function(i) {
  var this$1 = this.sc_StringView__f_s;
  return $bC(this$1.charCodeAt(i))
});
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
var $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.sc_View$Map__f_underlying = null;
  this.sc_View$Map__f_f = null;
  this.sc_SeqView$Map__f_underlying = null;
  this.sc_SeqView$Map__f_f = null;
  this.scm_CheckedIndexedSeqView$Map__f_mutationCount = null;
  this.scm_CheckedIndexedSeqView$Map__f_mutationCount = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f)
}
$c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$c_scm_CheckedIndexedSeqView$Map.prototype.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
  /*<skip>*/
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $c_scm_CheckedIndexedSeqView$Map.prototype;
$c_scm_CheckedIndexedSeqView$Map.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.scm_CheckedIndexedSeqView$Map__f_mutationCount)
});
$c_scm_CheckedIndexedSeqView$Map.prototype.map__F1__sc_IndexedSeqView = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.scm_CheckedIndexedSeqView$Map__f_mutationCount)
});
$c_scm_CheckedIndexedSeqView$Map.prototype.map__F1__sc_SeqView = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.scm_CheckedIndexedSeqView$Map__f_mutationCount)
});
$c_scm_CheckedIndexedSeqView$Map.prototype.map__F1__O = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.scm_CheckedIndexedSeqView$Map__f_mutationCount)
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().initClass({
  scm_CheckedIndexedSeqView$Map: 0
}, false, "scala.collection.mutable.CheckedIndexedSeqView$Map", {
  scm_CheckedIndexedSeqView$Map: 1,
  sc_IndexedSeqView$Map: 1,
  sc_SeqView$Map: 1,
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  scm_CheckedIndexedSeqView: 1
});
$c_scm_CheckedIndexedSeqView$Map.prototype.$classData = $d_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$h_sci_Map$EmptyMap$.prototype = $c_sci_Map$EmptyMap$.prototype;
$c_sci_Map$EmptyMap$.prototype.size__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
});
$c_sci_Map$EmptyMap$.prototype.contains__O__Z = (function(key) {
  return false
});
$c_sci_Map$EmptyMap$.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$()
});
$c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return default$1.apply__O()
});
$c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Map$EmptyMap$.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
  this.apply__O__E(key)
});
var $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.sci_Map$Map1__f_key1 = null;
  this.sci_Map$Map1__f_value1 = null;
  this.sci_Map$Map1__f_key1 = key1;
  this.sci_Map$Map1__f_value1 = value1
}
$c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map1.prototype.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
  /*<skip>*/
}
$h_sci_Map$Map1.prototype = $c_sci_Map$Map1.prototype;
$c_sci_Map$Map1.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sci_Map$Map1.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_Map$Map1.prototype.size__I = (function() {
  return 1
});
$c_sci_Map$Map1.prototype.knownSize__I = (function() {
  return 1
});
$c_sci_Map$Map1.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Map$Map1.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
    return this.sci_Map$Map1__f_value1
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map1.prototype.contains__O__Z = (function(key) {
  return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)
});
$c_sci_Map$Map1.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$())
});
$c_sci_Map$Map1.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
});
$c_sci_Map$Map1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var a = $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  return new $c_sc_Iterator$$anon$20(a)
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
});
$c_sci_Map$Map1.prototype.forall__F1__Z = (function(p) {
  return (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))))
});
$c_sci_Map$Map1.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1)
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value)
});
var $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2
}
$c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map2.prototype.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
  /*<skip>*/
}
$h_sci_Map$Map2.prototype = $c_sci_Map$Map2.prototype;
$c_sci_Map$Map2.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sci_Map$Map2.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_Map$Map2.prototype.size__I = (function() {
  return 2
});
$c_sci_Map$Map2.prototype.knownSize__I = (function() {
  return 2
});
$c_sci_Map$Map2.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Map$Map2.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
    return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
    return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map2.prototype.contains__O__Z = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2))
});
$c_sci_Map$Map2.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : $m_s_None$()))
});
$c_sci_Map$Map2.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : default$1.apply__O()))
});
$c_sci_Map$Map2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map2$$anon$1(this)
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)))
});
$c_sci_Map$Map2.prototype.forall__F1__Z = (function(p) {
  return ((!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1)))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2)))))
});
$c_sci_Map$Map2.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2)
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value)
});
var $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3
}
$c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map3.prototype.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
  /*<skip>*/
}
$h_sci_Map$Map3.prototype = $c_sci_Map$Map3.prototype;
$c_sci_Map$Map3.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sci_Map$Map3.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_Map$Map3.prototype.size__I = (function() {
  return 3
});
$c_sci_Map$Map3.prototype.knownSize__I = (function() {
  return 3
});
$c_sci_Map$Map3.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Map$Map3.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map3.prototype.contains__O__Z = (function(key) {
  return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3))
});
$c_sci_Map$Map3.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : $m_s_None$())))
});
$c_sci_Map$Map3.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : default$1.apply__O())))
});
$c_sci_Map$Map3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map3$$anon$4(this)
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))))
});
$c_sci_Map$Map3.prototype.forall__F1__Z = (function(p) {
  return (((!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1)))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2))))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3)))))
});
$c_sci_Map$Map3.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3)
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value)
});
var $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4
}
$c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map4.prototype.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
  /*<skip>*/
}
$h_sci_Map$Map4.prototype = $c_sci_Map$Map4.prototype;
$c_sci_Map$Map4.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sci_Map$Map4.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_Map$Map4.prototype.size__I = (function() {
  return 4
});
$c_sci_Map$Map4.prototype.knownSize__I = (function() {
  return 4
});
$c_sci_Map$Map4.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Map$Map4.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map4.prototype.contains__O__Z = (function(key) {
  return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4))
});
$c_sci_Map$Map4.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : $m_s_None$()))))
});
$c_sci_Map$Map4.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : default$1.apply__O()))))
});
$c_sci_Map$Map4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map4$$anon$7(this)
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_Map = (function(key, value) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value)
  } else {
    var this$1 = $m_sci_HashMap$();
    return this$1.sci_HashMap$__f_EmptyMap.updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4).updated__O__O__sci_HashMap(key, value)
  }
});
$c_sci_Map$Map4.prototype.forall__F1__Z = (function(p) {
  return ((((!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1)))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2))))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3))))) && (!(!p.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)))))
});
$c_sci_Map$Map4.prototype.buildTo__sci_HashMapBuilder__sci_HashMapBuilder = (function(builder) {
  return builder.addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
});
$c_sci_Map$Map4.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4)
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value)
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)))
}
var $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
function $is_scm_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Map)))
}
function $isArrayOf_scm_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Map)))
}
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $thiz.sci_LazyList__f_lazyState.apply__O()
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => {
    if ($thiz.isEmpty__Z()) {
      return $m_sci_LazyList$State$Empty$()
    } else {
      $m_sci_LazyList$();
      var hd = f.apply__O__O($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
      var tl = $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList(), f);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    }
  }));
  return new $c_sci_LazyList(state)
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    var obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || (elem.scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== elem$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = elem$2;
      if ((elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) {
        var this$3 = elem$2;
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while ((((elem !== elem$2) && (elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) && (elem.scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== elem$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$4 = elem;
          var obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$5 = elem;
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          var this$6 = elem$2;
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if ((elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) {
            var this$7 = elem$2;
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!(elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z())))) {
      while ((elem !== elem$2)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$8 = elem;
        var obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$9 = elem;
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!elem.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          var this$11 = elem$2;
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$12 = elem;
        var obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$13 = elem;
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$14 = elem;
          var obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$15 = elem;
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.headOption__s_Option = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this)
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!these.isEmpty__Z())) {
    var this$1 = these;
    these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  while ((those !== these)) {
    if (these.isEmpty__Z()) {
      return this
    };
    var this$2 = these;
    these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    if (these.isEmpty__Z()) {
      return this
    };
    var this$3 = these;
    these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = those;
    those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foldLeft__O__F2__O = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.isEmpty__Z()) {
      return z
    } else {
      var this$1 = _$this;
      var temp$_$this = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      var $$x1 = z;
      var this$2 = _$this;
      var temp$z = op.apply__O__O__O($$x1, this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
      _$this = temp$_$this;
      z = temp$z
    }
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.lazyAppendedAll__F0__sci_LazyList = (function(suffix) {
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => {
    if (this.isEmpty__Z()) {
      var x1 = suffix.apply__O();
      if ((x1 instanceof $c_sci_LazyList)) {
        var x2 = x1;
        return x2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
      } else {
        return ((x1.knownSize__I() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(x1.iterator__sc_Iterator()))
      }
    } else {
      $m_sci_LazyList$();
      var hd = this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      var tl = this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList().lazyAppendedAll__F0__sci_LazyList(suffix);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    }
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList.prototype.appended__O__sci_LazyList = (function(elem) {
  if ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z())) {
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => {
      $m_sci_LazyList$();
      var tl = $m_sci_LazyList$().sci_LazyList$__f__empty;
      return new $c_sci_LazyList$State$Cons(elem, tl)
    }));
    return new $c_sci_LazyList(state)
  } else {
    return this.lazyAppendedAll__F0__sci_LazyList(new $c_sjsr_AnonFunction0((() => {
      $m_sc_Iterator$();
      return new $c_sc_Iterator$$anon$20(elem)
    })))
  }
});
$c_sci_LazyList.prototype.reduceLeft__F2__O = (function(f) {
  if (this.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft")
  } else {
    var reducedRes = this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    var left = this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    while ((!left.isEmpty__Z())) {
      var $$x1 = reducedRes;
      var this$1 = left;
      reducedRes = f.apply__O__O__O($$x1, this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
      var this$2 = left;
      left = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return reducedRes
  }
});
$c_sci_LazyList.prototype.map__F1__sci_LazyList = (function(f) {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f))
});
$c_sci_LazyList.prototype.flatMap__F1__sci_LazyList = (function(f) {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$flatMapImpl__sci_LazyList__F1__sci_LazyList(this, f))
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.flatMap__F1__O = (function(f) {
  return this.flatMap__F1__sci_LazyList(f)
});
$c_sci_LazyList.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_LazyList(f)
});
$c_sci_LazyList.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_LazyList(elem)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
});
$c_sci_LazyList.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_LazyList$()
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sci_WrappedString(self) {
  this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
  this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
}
$c_sci_WrappedString.prototype = new $h_sci_AbstractSeq();
$c_sci_WrappedString.prototype.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
  /*<skip>*/
}
$h_sci_WrappedString.prototype = $c_sci_WrappedString.prototype;
$c_sci_WrappedString.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_WrappedString.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_WrappedString.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1)
});
$c_sci_WrappedString.prototype.map__F1__O = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f)
});
$c_sci_WrappedString.prototype.lengthCompare__I__I = (function(len) {
  var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
  var x = this$1.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_WrappedString.prototype.knownSize__I = (function() {
  var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
  return this$1.length
});
$c_sci_WrappedString.prototype.newSpecificBuilder__scm_Builder = (function() {
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
$c_sci_WrappedString.prototype.length__I = (function() {
  var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
  return this$1.length
});
$c_sci_WrappedString.prototype.toString__T = (function() {
  return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
});
$c_sci_WrappedString.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  if ((xs instanceof $ac_C)) {
    var x2 = xs;
    var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    var srcLen = this$1.length;
    var destLen = x2.u.length;
    var x = ((len < srcLen) ? len : srcLen);
    var y = ((destLen - start) | 0);
    var x$1 = ((x < y) ? x : y);
    var copied = ((x$1 > 0) ? x$1 : 0);
    $f_T__getChars__I__I__AC__I__V(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self, 0, copied, x2, start);
    return copied
  } else {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  }
});
$c_sci_WrappedString.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  if ((o instanceof $c_sci_WrappedString)) {
    var x2 = o;
    return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  }
});
$c_sci_WrappedString.prototype.className__T = (function() {
  return "WrappedString"
});
$c_sci_WrappedString.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647
});
$c_sci_WrappedString.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_WrappedString)) {
    var x2 = other;
    return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
  } else {
    return $f_sc_Seq__equals__O__Z(this, other)
  }
});
$c_sci_WrappedString.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_WrappedString.prototype.apply__O__O = (function(v1) {
  var i = (v1 | 0);
  var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
  return $bC(this$1.charCodeAt(i))
});
$c_sci_WrappedString.prototype.apply__I__O = (function(i) {
  var this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
  return $bC(this$1.charCodeAt(i))
});
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
var $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.appended__O__O = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
});
$c_sjsr_WrappedVarArgs.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.size__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.newSpecificBuilder__scm_Builder = (function() {
  return $m_sjsr_WrappedVarArgs$().newBuilder__scm_Builder()
});
$c_sjsr_WrappedVarArgs.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op)
});
$c_sjsr_WrappedVarArgs.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op)
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjsr_WrappedVarArgs.prototype.min__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord)
});
$c_sjsr_WrappedVarArgs.prototype.max__s_math_Ordering__O = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this)
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjsr_WrappedVarArgs$()
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return (this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length | 0)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O((v1 | 0))
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sjsr_WrappedVarArgs$()
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.sci_HashMap__f_rootNode = null;
  this.sci_HashMap__f_rootNode = rootNode
}
$c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$c_sci_HashMap.prototype.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
  /*<skip>*/
}
$h_sci_HashMap.prototype = $c_sci_HashMap.prototype;
$c_sci_HashMap.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sci_HashMap.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_HashMap.prototype.mapFactory__sc_MapFactory = (function() {
  return $m_sci_HashMap$()
});
$c_sci_HashMap.prototype.knownSize__I = (function() {
  return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
});
$c_sci_HashMap.prototype.size__I = (function() {
  return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
});
$c_sci_HashMap.prototype.isEmpty__Z = (function() {
  return (this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size === 0)
});
$c_sci_HashMap.prototype.iterator__sc_Iterator = (function() {
  return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode))
});
$c_sci_HashMap.prototype.contains__O__Z = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return this.sci_HashMap__f_rootNode.containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0)
});
$c_sci_HashMap.prototype.apply__O__O = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return this.sci_HashMap__f_rootNode.apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0)
});
$c_sci_HashMap.prototype.get__O__s_Option = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return this.sci_HashMap__f_rootNode.get__O__I__I__I__s_Option(key, keyUnimprovedHash, keyHash, 0)
});
$c_sci_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return this.sci_HashMap__f_rootNode.getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1)
});
$c_sci_HashMap.prototype.updated__O__O__sci_HashMap = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var newRootNode = this.sci_HashMap__f_rootNode.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
});
$c_sci_HashMap.prototype.foreachEntry__F2__V = (function(f) {
  this.sci_HashMap__f_rootNode.foreachEntry__F2__V(f)
});
$c_sci_HashMap.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    var x2 = that;
    if ((this === x2)) {
      return true
    } else {
      var x = this.sci_HashMap__f_rootNode;
      var x$2 = x2.sci_HashMap__f_rootNode;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that)
  }
});
$c_sci_HashMap.prototype.hashCode__I = (function() {
  if (this.isEmpty__Z()) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
    var hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
    return hash
  }
});
$c_sci_HashMap.prototype.className__T = (function() {
  return "HashMap"
});
$c_sci_HashMap.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_HashMap(key, value)
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
var $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sci_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
/** @constructor */
function $c_scm_AbstractMap() {
  /*<skip>*/
}
$c_scm_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_scm_AbstractMap.prototype.constructor = $c_scm_AbstractMap;
/** @constructor */
function $h_scm_AbstractMap() {
  /*<skip>*/
}
$h_scm_AbstractMap.prototype = $c_scm_AbstractMap.prototype;
$c_scm_AbstractMap.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_Iterable$()
});
$c_scm_AbstractMap.prototype.result__O = (function() {
  return this
});
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.sci_BigVector__f_length0 : this.sci_Vector__f_prefix1.u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return this.iterator__sc_Iterator().copyToArray__O__I__I__I(xs, start, len)
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $$x1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $$x1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0)
  }
});
$c_sci_Vector.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_Vector$()
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.tail__O();
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = a.isEmpty__Z();
      var bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        var temp$a = a.tail__O();
        var temp$b = b.tail__O();
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
});
$c_sci_List.prototype.appended__O__O = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem)
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else if (prefix.isEmpty__Z()) {
    return this
  } else {
    var result = new $c_sci_$colon$colon(prefix.head__O(), this);
    var curr = result;
    var that = prefix.tail__O();
    while ((!that.isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon(that.head__O(), this);
      curr.sci_$colon$colon__f_next = temp;
      curr = temp;
      that = that.tail__O()
    };
    return result
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = prefix;
    return this.$colon$colon$colon__sci_List__sci_List(x2)
  };
  if ((prefix.knownSize__I() === 0)) {
    return this
  };
  if ((prefix instanceof $c_scm_ListBuffer)) {
    var x3 = prefix;
    if (this.isEmpty__Z()) {
      return x3.toList__sci_List()
    }
  };
  var iter = prefix.iterator__sc_Iterator();
  if (iter.hasNext__Z()) {
    var result = new $c_sci_$colon$colon(iter.next__O(), this);
    var curr = result;
    while (iter.hasNext__Z()) {
      var temp = new $c_sci_$colon$colon(iter.next__O(), this);
      curr.sci_$colon$colon__f_next = temp;
      curr = temp
    };
    return result
  } else {
    return this
  }
});
$c_sci_List.prototype.appendedAll__sc_IterableOnce__sci_List = (function(suffix) {
  if ((suffix instanceof $c_sci_List)) {
    var x2 = suffix;
    return x2.$colon$colon$colon__sci_List__sci_List(this)
  } else {
    return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix)
  }
});
$c_sci_List.prototype.map__F1__sci_List = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$()
  } else {
    var h = new $c_sci_$colon$colon(f.apply__O__O(this.head__O()), $m_sci_Nil$());
    var t = h;
    var rest = this.tail__O();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.apply__O__O(rest.head__O()), $m_sci_Nil$());
      t.sci_$colon$colon__f_next = nx;
      t = nx;
      rest = rest.tail__O()
    };
    return h
  }
});
$c_sci_List.prototype.flatMap__F1__sci_List = (function(f) {
  var rest = this;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = f.apply__O__O(rest.head__O()).iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      var nx = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx
      } else {
        t.sci_$colon$colon__f_next = nx
      };
      t = nx
    };
    rest = rest.tail__O()
  };
  return ((h === null) ? $m_sci_Nil$() : h)
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = these.tail__O()
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = o;
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
$c_sci_List.prototype.flatMap__F1__O = (function(f) {
  return this.flatMap__F1__sci_List(f)
});
$c_sci_List.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_List(f)
});
$c_sci_List.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_List$()
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.scm_HashMap__f_contentSize) | 0) >= $thiz.scm_HashMap__f_threshold)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length << 1))
  };
  var idx = (hash & (((-1) + $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx)
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.scm_HashMap__f_contentSize) | 0) >= $thiz.scm_HashMap__f_threshold)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length << 1))
  };
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  var idx = (hash & (((-1) + $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx)
}
function $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx) {
  var x1 = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[idx];
  if ((x1 === null)) {
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[idx] = new $c_scm_HashMap$Node(key, hash, value, null)
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.scm_HashMap$Node__f__hash <= hash))) {
      if (((n.scm_HashMap$Node__f__hash === hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, n.scm_HashMap$Node__f__key))) {
        var old = n.scm_HashMap$Node__f__value;
        n.scm_HashMap$Node__f__value = value;
        return (getOld ? new $c_s_Some(old) : null)
      };
      prev = n;
      n = n.scm_HashMap$Node__f__next
    };
    if ((prev === null)) {
      $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[idx] = new $c_scm_HashMap$Node(key, hash, value, x1)
    } else {
      prev.scm_HashMap$Node__f__next = new $c_scm_HashMap$Node(key, hash, value, prev.scm_HashMap$Node__f__next)
    }
  };
  $thiz.scm_HashMap__f_contentSize = ((1 + $thiz.scm_HashMap__f_contentSize) | 0);
  return null
}
function $p_scm_HashMap__growTable__I__V($thiz, newlen) {
  if ((newlen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (("new HashMap table size " + newlen) + " exceeds maximum"))
  };
  var oldlen = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length;
  $thiz.scm_HashMap__f_threshold = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.scm_HashMap__f_contentSize === 0)) {
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = new ($d_scm_HashMap$Node.getArrayOf().constr)(newlen)
  } else {
    var original = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table;
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = $m_ju_Arrays$().copyOf__AO__I__AO(original, newlen);
    var preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    var preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[i];
        if ((old !== null)) {
          preLow.scm_HashMap$Node__f__next = null;
          preHigh.scm_HashMap$Node__f__next = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.scm_HashMap$Node__f__next;
            if (((n.scm_HashMap$Node__f__hash & oldlen) === 0)) {
              lastLow.scm_HashMap$Node__f__next = n;
              lastLow = n
            } else {
              lastHigh.scm_HashMap$Node__f__next = n;
              lastHigh = n
            };
            n = next
          };
          lastLow.scm_HashMap$Node__f__next = null;
          if ((old !== preLow.scm_HashMap$Node__f__next)) {
            $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[i] = preLow.scm_HashMap$Node__f__next
          };
          if ((preHigh.scm_HashMap$Node__f__next !== null)) {
            $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[((i + oldlen) | 0)] = preHigh.scm_HashMap$Node__f__next;
            lastHigh.scm_HashMap$Node__f__next = null
          }
        };
        i = ((1 + i) | 0)
      };
      oldlen = (oldlen << 1)
    }
  }
}
function $p_scm_HashMap__tableSizeFor__I__I($thiz, capacity) {
  var x = (((-1) + capacity) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824)
}
function $p_scm_HashMap__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.scm_HashMap__f_loadFactor))
}
function $ct_scm_HashMap__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.scm_HashMap__f_loadFactor = loadFactor;
  $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = new ($d_scm_HashMap$Node.getArrayOf().constr)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.scm_HashMap__f_threshold = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length);
  $thiz.scm_HashMap__f_contentSize = 0;
  return $thiz
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz
}
/** @constructor */
function $c_scm_HashMap() {
  this.scm_HashMap__f_loadFactor = 0.0;
  this.scm_HashMap__f_scala$collection$mutable$HashMap$$table = null;
  this.scm_HashMap__f_threshold = 0;
  this.scm_HashMap__f_contentSize = 0
}
$c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$c_scm_HashMap.prototype.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
  /*<skip>*/
}
$h_scm_HashMap.prototype = $c_scm_HashMap.prototype;
$c_scm_HashMap.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_scm_HashMap.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_scm_HashMap.prototype.size__I = (function() {
  return this.scm_HashMap__f_contentSize
});
$c_scm_HashMap.prototype.sizeHint__I__V = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.scm_HashMap__f_loadFactor)));
  if ((target > this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length)) {
    $p_scm_HashMap__growTable__I__V(this, target)
  }
});
$c_scm_HashMap.prototype.addAll__sc_IterableOnce__scm_HashMap = (function(xs) {
  this.sizeHint__I__V(xs.knownSize__I());
  if ((xs instanceof $c_sci_HashMap)) {
    var x2 = xs;
    var f = new $c_sjsr_AnonFunction3(((k$2, v$2, h$2) => {
      var h = (h$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, k$2, v$2, (h ^ ((h >>> 16) | 0)), false)
    }));
    x2.sci_HashMap__f_rootNode.foreachWithHash__F3__V(f);
    return this
  } else if ((xs instanceof $c_scm_HashMap)) {
    var x3 = xs;
    var iter = x3.nodeIterator__sc_Iterator();
    while (iter.hasNext__Z()) {
      var next = iter.next__O();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.scm_HashMap$Node__f__key, next.scm_HashMap$Node__f__value, next.scm_HashMap$Node__f__hash, false)
    };
    return this
  } else if ($is_scm_Map(xs)) {
    var x4 = xs;
    x4.foreachEntry__F2__V(new $c_sjsr_AnonFunction2(((key$2, value$2) => {
      var originalHash = $m_sr_Statics$().anyHash__O__I(key$2);
      return $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, key$2, value$2, (originalHash ^ ((originalHash >>> 16) | 0)), false)
    })));
    return this
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  }
});
$c_scm_HashMap.prototype.iterator__sc_Iterator = (function() {
  return ((this.scm_HashMap__f_contentSize === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_scm_HashMap$$anon$1(this))
});
$c_scm_HashMap.prototype.nodeIterator__sc_Iterator = (function() {
  return ((this.scm_HashMap__f_contentSize === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_scm_HashMap$$anon$4(this))
});
$c_scm_HashMap.prototype.get__O__s_Option = (function(key) {
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  var x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[(hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0))];
  var x1$1 = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
  return ((x1$1 === null) ? $m_s_None$() : new $c_s_Some(x1$1.scm_HashMap$Node__f__value))
});
$c_scm_HashMap.prototype.apply__O__O = (function(key) {
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  var x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[(hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0))];
  var x1$1 = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
  return ((x1$1 === null) ? $f_sc_MapOps__default__O__O(this, key) : x1$1.scm_HashMap$Node__f__value)
});
$c_scm_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  var x = $objectGetClass(this);
  if ((!(x === $d_scm_HashMap.getClassOf()))) {
    return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1)
  } else {
    var originalHash = $m_sr_Statics$().anyHash__O__I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    var x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[(hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0))];
    var nd = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
    return ((nd === null) ? default$1.apply__O() : nd.scm_HashMap$Node__f__value)
  }
});
$c_scm_HashMap.prototype.addOne__T2__scm_HashMap = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem._1__O(), elem._2__O(), false);
  return this
});
$c_scm_HashMap.prototype.knownSize__I = (function() {
  return this.scm_HashMap__f_contentSize
});
$c_scm_HashMap.prototype.isEmpty__Z = (function() {
  return (this.scm_HashMap__f_contentSize === 0)
});
$c_scm_HashMap.prototype.foreachEntry__F2__V = (function(f) {
  var len = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length;
  var i = 0;
  while ((i < len)) {
    var n = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u[i];
    if ((n !== null)) {
      n.foreachEntry__F2__V(f)
    };
    i = ((1 + i) | 0)
  }
});
$c_scm_HashMap.prototype.mapFactory__sc_MapFactory = (function() {
  return $m_scm_HashMap$()
});
$c_scm_HashMap.prototype.stringPrefix__T = (function() {
  return "HashMap"
});
$c_scm_HashMap.prototype.hashCode__I = (function() {
  if (this.isEmpty__Z()) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed)
  }
});
$c_scm_HashMap.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__T2__scm_HashMap(elem)
});
$c_scm_HashMap.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_HashMap(xs)
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
var $d_scm_HashMap = new $TypeData().initClass({
  scm_HashMap: 0
}, false, "scala.collection.mutable.HashMap", {
  scm_HashMap: 1,
  scm_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  scm_Map: 1,
  scm_Iterable: 1,
  scm_MapOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_StrictOptimizedMapOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap.prototype.$classData = $d_scm_HashMap;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1)
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
  /*<skip>*/
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
    return this.sci_Vector__f_prefix1.u[index]
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector1.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
    var a1 = this.sci_Vector__f_prefix1;
    var a1c = a1.clone__O();
    a1c.u[index] = elem;
    return new $c_sci_Vector1(a1c)
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector1.prototype.appended__O__sci_Vector = (function(elem) {
  var len1 = this.sci_Vector__f_prefix1.u.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem))
  } else {
    var $$x2 = this.sci_Vector__f_prefix1;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a = new $ac_O(1);
    a.u[0] = elem;
    return new $c_sci_Vector2($$x2, 32, $$x1, a, 33)
  }
});
$c_sci_Vector1.prototype.map__F1__sci_Vector = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f))
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1
});
$c_sci_Vector1.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector1.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
    return this.sci_Vector__f_prefix1.u[index]
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
var $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next
});
$c_sci_$colon$colon.prototype.headOption__s_Option = (function() {
  return new $c_s_Some(this.sci_$colon$colon__f_head)
});
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_$colon$colon)))
}
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  $ct_T2__O__O__(new $c_T2(), $m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.headOption__s_Option = (function() {
  return $m_s_None$()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw this.ioob__I__jl_IndexOutOfBoundsException(index)
});
$c_sci_Vector0$.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  throw this.ioob__I__jl_IndexOutOfBoundsException(index)
});
$c_sci_Vector0$.prototype.appended__O__sci_Vector = (function(elem) {
  var a = new $ac_O(1);
  a.u[0] = elem;
  return new $c_sci_Vector1(a)
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.map__F1__O = (function(f) {
  return this
});
$c_sci_Vector0$.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E((v1 | 0))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
  /*<skip>*/
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[(31 & io)])
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector2.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector2__f_len1)) {
      var io = ((index - this.sci_Vector2__f_len1) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.sci_Vector2__f_data2.u.length)) {
        var a2 = this.sci_Vector2__f_data2;
        var a2c = a2.clone__O();
        var a1 = a2c.u[i2];
        var a1c = a1.clone__O();
        a1c.u[i1] = elem;
        a2c.u[i2] = a1c;
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector2__f_len1;
        var x$4 = this.sci_BigVector__f_suffix1;
        var x$5 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector2(x$2, x$3, a2c, x$4, x$5)
      } else {
        var a1$1 = this.sci_BigVector__f_suffix1;
        var a1c$1 = a1$1.clone__O();
        a1c$1.u[i1] = elem;
        var x$7 = this.sci_Vector__f_prefix1;
        var x$8 = this.sci_Vector2__f_len1;
        var x$9 = this.sci_Vector2__f_data2;
        var x$10 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector2(x$7, x$8, x$9, a1c$1, x$10)
      }
    } else {
      var a1$2 = this.sci_Vector__f_prefix1;
      var a1c$2 = a1$2.clone__O();
      a1c$2.u[index] = elem;
      var len1 = this.sci_Vector2__f_len1;
      var data2 = this.sci_Vector2__f_data2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector2(a1c$2, len1, data2, suffix1, length0)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector2.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector2__f_len1;
    var x$5 = this.sci_Vector2__f_data2;
    return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2)
  } else if ((this.sci_Vector2__f_data2.u.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1);
    var a = new $ac_O(1);
    a.u[0] = elem;
    var x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$9 = this.sci_Vector__f_prefix1;
    var x$10 = this.sci_Vector2__f_len1;
    return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8)
  } else {
    var $$x5 = this.sci_Vector__f_prefix1;
    var $$x4 = this.sci_Vector2__f_len1;
    var $$x3 = this.sci_Vector2__f_data2;
    var $$x2 = this.sci_Vector2__f_len1;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x = this.sci_BigVector__f_suffix1;
    var a$1 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
    a$1.u[0] = x;
    var a$2 = new $ac_O(1);
    a$2.u[0] = elem;
    return new $c_sci_Vector3($$x5, $$x4, $$x3, ((960 + $$x2) | 0), $$x1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector2.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector2__f_data2, f);
  var x$3 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$4 = this.sci_Vector2__f_len1;
  var x$5 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector2(x$1, x$4, x$2, x$3, x$5)
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector2.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector2.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[(31 & io)])
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
var $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
  /*<skip>*/
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1]))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return this.sci_Vector3__f_prefix2.u[((io$2 >>> 5) | 0)].u[(31 & io$2)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector3.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector3__f_len12)) {
      var io = ((index - this.sci_Vector3__f_len12) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.sci_Vector3__f_data3.u.length)) {
        var a3 = this.sci_Vector3__f_data3;
        var a3c = a3.clone__O();
        var a2 = a3c.u[i3];
        var a2c = a2.clone__O();
        var a1 = a2c.u[i2];
        var a1c = a1.clone__O();
        a1c.u[i1] = elem;
        a2c.u[i2] = a1c;
        a3c.u[i3] = a2c;
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector3__f_len1;
        var x$4 = this.sci_Vector3__f_prefix2;
        var x$5 = this.sci_Vector3__f_len12;
        var x$6 = this.sci_Vector3__f_suffix2;
        var x$7 = this.sci_BigVector__f_suffix1;
        var x$8 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$2, x$3, x$4, x$5, a3c, x$6, x$7, x$8)
      } else if ((i2 < this.sci_Vector3__f_suffix2.u.length)) {
        var a2$1 = this.sci_Vector3__f_suffix2;
        var a2c$1 = a2$1.clone__O();
        var a1$1 = a2c$1.u[i2];
        var a1c$1 = a1$1.clone__O();
        a1c$1.u[i1] = elem;
        a2c$1.u[i2] = a1c$1;
        var x$10 = this.sci_Vector__f_prefix1;
        var x$11 = this.sci_Vector3__f_len1;
        var x$12 = this.sci_Vector3__f_prefix2;
        var x$13 = this.sci_Vector3__f_len12;
        var x$14 = this.sci_Vector3__f_data3;
        var x$15 = this.sci_BigVector__f_suffix1;
        var x$16 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$10, x$11, x$12, x$13, x$14, a2c$1, x$15, x$16)
      } else {
        var a1$2 = this.sci_BigVector__f_suffix1;
        var a1c$2 = a1$2.clone__O();
        a1c$2.u[i1] = elem;
        var x$18 = this.sci_Vector__f_prefix1;
        var x$19 = this.sci_Vector3__f_len1;
        var x$20 = this.sci_Vector3__f_prefix2;
        var x$21 = this.sci_Vector3__f_len12;
        var x$22 = this.sci_Vector3__f_data3;
        var x$23 = this.sci_Vector3__f_suffix2;
        var x$24 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$18, x$19, x$20, x$21, x$22, x$23, a1c$2, x$24)
      }
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      var a2$2 = this.sci_Vector3__f_prefix2;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.clone__O();
      var a1$3 = a2c$2.u[idx2];
      var a1c$3 = a1$3.clone__O();
      a1c$3.u[idx1] = elem;
      a2c$2.u[idx2] = a1c$3;
      var x$26 = this.sci_Vector__f_prefix1;
      var x$27 = this.sci_Vector3__f_len1;
      var x$28 = this.sci_Vector3__f_len12;
      var x$29 = this.sci_Vector3__f_data3;
      var x$30 = this.sci_Vector3__f_suffix2;
      var x$31 = this.sci_BigVector__f_suffix1;
      var x$32 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector3(x$26, x$27, a2c$2, x$28, x$29, x$30, x$31, x$32)
    } else {
      var a1$4 = this.sci_Vector__f_prefix1;
      var a1c$4 = a1$4.clone__O();
      a1c$4.u[index] = elem;
      var len1 = this.sci_Vector3__f_len1;
      var prefix2 = this.sci_Vector3__f_prefix2;
      var len12 = this.sci_Vector3__f_len12;
      var data3 = this.sci_Vector3__f_data3;
      var suffix2 = this.sci_Vector3__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector3(a1c$4, len1, prefix2, len12, data3, suffix2, suffix1, length0)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector3.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector3__f_len1;
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_len12;
    var x$7 = this.sci_Vector3__f_data3;
    var x$8 = this.sci_Vector3__f_suffix2;
    return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2)
  } else if ((this.sci_Vector3__f_suffix2.u.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1);
    var a = new $ac_O(1);
    a.u[0] = elem;
    var x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$12 = this.sci_Vector__f_prefix1;
    var x$13 = this.sci_Vector3__f_len1;
    var x$14 = this.sci_Vector3__f_prefix2;
    var x$15 = this.sci_Vector3__f_len12;
    var x$16 = this.sci_Vector3__f_data3;
    return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11)
  } else if ((this.sci_Vector3__f_data3.u.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1));
    var x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.u[0] = elem;
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector3__f_len1;
    var x$23 = this.sci_Vector3__f_prefix2;
    var x$24 = this.sci_Vector3__f_len12;
    return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20)
  } else {
    var $$x8 = this.sci_Vector__f_prefix1;
    var $$x7 = this.sci_Vector3__f_len1;
    var $$x6 = this.sci_Vector3__f_prefix2;
    var $$x5 = this.sci_Vector3__f_len12;
    var $$x4 = this.sci_Vector3__f_data3;
    var $$x3 = this.sci_Vector3__f_len12;
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1);
    var a$2 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$2.u[0] = x;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.u[0] = elem;
    return new $c_sci_Vector4($$x8, $$x7, $$x6, $$x5, $$x4, ((30720 + $$x3) | 0), $$x2, a$2, $$x1, a$3, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector3.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_prefix2, f);
  var x$3 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector3__f_data3, f);
  var x$4 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_suffix2, f);
  var x$5 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$6 = this.sci_Vector3__f_len1;
  var x$7 = this.sci_Vector3__f_len12;
  var x$8 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector3(x$1, x$6, x$2, x$7, x$3, x$4, x$5, x$8)
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector3.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector3.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1]))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return this.sci_Vector3__f_prefix2.u[((io$2 >>> 5) | 0)].u[(31 & io$2)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
var $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
  /*<skip>*/
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1])))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return this.sci_Vector4__f_prefix3.u[((io$2 >>> 10) | 0)].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return this.sci_Vector4__f_prefix2.u[((io$3 >>> 5) | 0)].u[(31 & io$3)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector4.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector4__f_len123)) {
      var io = ((index - this.sci_Vector4__f_len123) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.sci_Vector4__f_data4.u.length)) {
        var a4 = this.sci_Vector4__f_data4;
        var a4c = a4.clone__O();
        var a3 = a4c.u[i4];
        var a3c = a3.clone__O();
        var a2 = a3c.u[i3];
        var a2c = a2.clone__O();
        var a1 = a2c.u[i2];
        var a1c = a1.clone__O();
        a1c.u[i1] = elem;
        a2c.u[i2] = a1c;
        a3c.u[i3] = a2c;
        a4c.u[i4] = a3c;
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector4__f_len1;
        var x$4 = this.sci_Vector4__f_prefix2;
        var x$5 = this.sci_Vector4__f_len12;
        var x$6 = this.sci_Vector4__f_prefix3;
        var x$7 = this.sci_Vector4__f_len123;
        var x$8 = this.sci_Vector4__f_suffix3;
        var x$9 = this.sci_Vector4__f_suffix2;
        var x$10 = this.sci_BigVector__f_suffix1;
        var x$11 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$2, x$3, x$4, x$5, x$6, x$7, a4c, x$8, x$9, x$10, x$11)
      } else if ((i3 < this.sci_Vector4__f_suffix3.u.length)) {
        var a3$1 = this.sci_Vector4__f_suffix3;
        var a3c$1 = a3$1.clone__O();
        var a2$1 = a3c$1.u[i3];
        var a2c$1 = a2$1.clone__O();
        var a1$1 = a2c$1.u[i2];
        var a1c$1 = a1$1.clone__O();
        a1c$1.u[i1] = elem;
        a2c$1.u[i2] = a1c$1;
        a3c$1.u[i3] = a2c$1;
        var x$13 = this.sci_Vector__f_prefix1;
        var x$14 = this.sci_Vector4__f_len1;
        var x$15 = this.sci_Vector4__f_prefix2;
        var x$16 = this.sci_Vector4__f_len12;
        var x$17 = this.sci_Vector4__f_prefix3;
        var x$18 = this.sci_Vector4__f_len123;
        var x$19 = this.sci_Vector4__f_data4;
        var x$20 = this.sci_Vector4__f_suffix2;
        var x$21 = this.sci_BigVector__f_suffix1;
        var x$22 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$13, x$14, x$15, x$16, x$17, x$18, x$19, a3c$1, x$20, x$21, x$22)
      } else if ((i2 < this.sci_Vector4__f_suffix2.u.length)) {
        var a2$2 = this.sci_Vector4__f_suffix2;
        var a2c$2 = a2$2.clone__O();
        var a1$2 = a2c$2.u[i2];
        var a1c$2 = a1$2.clone__O();
        a1c$2.u[i1] = elem;
        a2c$2.u[i2] = a1c$2;
        var x$24 = this.sci_Vector__f_prefix1;
        var x$25 = this.sci_Vector4__f_len1;
        var x$26 = this.sci_Vector4__f_prefix2;
        var x$27 = this.sci_Vector4__f_len12;
        var x$28 = this.sci_Vector4__f_prefix3;
        var x$29 = this.sci_Vector4__f_len123;
        var x$30 = this.sci_Vector4__f_data4;
        var x$31 = this.sci_Vector4__f_suffix3;
        var x$32 = this.sci_BigVector__f_suffix1;
        var x$33 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, a2c$2, x$32, x$33)
      } else {
        var a1$3 = this.sci_BigVector__f_suffix1;
        var a1c$3 = a1$3.clone__O();
        a1c$3.u[i1] = elem;
        var x$35 = this.sci_Vector__f_prefix1;
        var x$36 = this.sci_Vector4__f_len1;
        var x$37 = this.sci_Vector4__f_prefix2;
        var x$38 = this.sci_Vector4__f_len12;
        var x$39 = this.sci_Vector4__f_prefix3;
        var x$40 = this.sci_Vector4__f_len123;
        var x$41 = this.sci_Vector4__f_data4;
        var x$42 = this.sci_Vector4__f_suffix3;
        var x$43 = this.sci_Vector4__f_suffix2;
        var x$44 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, a1c$3, x$44)
      }
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      var a3$2 = this.sci_Vector4__f_prefix3;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.clone__O();
      var a2$3 = a3c$2.u[idx3];
      var a2c$3 = a2$3.clone__O();
      var a1$4 = a2c$3.u[idx2];
      var a1c$4 = a1$4.clone__O();
      a1c$4.u[idx1] = elem;
      a2c$3.u[idx2] = a1c$4;
      a3c$2.u[idx3] = a2c$3;
      var x$46 = this.sci_Vector__f_prefix1;
      var x$47 = this.sci_Vector4__f_len1;
      var x$48 = this.sci_Vector4__f_prefix2;
      var x$49 = this.sci_Vector4__f_len12;
      var x$50 = this.sci_Vector4__f_len123;
      var x$51 = this.sci_Vector4__f_data4;
      var x$52 = this.sci_Vector4__f_suffix3;
      var x$53 = this.sci_Vector4__f_suffix2;
      var x$54 = this.sci_BigVector__f_suffix1;
      var x$55 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(x$46, x$47, x$48, x$49, a3c$2, x$50, x$51, x$52, x$53, x$54, x$55)
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      var a2$4 = this.sci_Vector4__f_prefix2;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.clone__O();
      var a1$5 = a2c$4.u[idx2$1];
      var a1c$5 = a1$5.clone__O();
      a1c$5.u[idx1$1] = elem;
      a2c$4.u[idx2$1] = a1c$5;
      var x$57 = this.sci_Vector__f_prefix1;
      var x$58 = this.sci_Vector4__f_len1;
      var x$59 = this.sci_Vector4__f_len12;
      var x$60 = this.sci_Vector4__f_prefix3;
      var x$61 = this.sci_Vector4__f_len123;
      var x$62 = this.sci_Vector4__f_data4;
      var x$63 = this.sci_Vector4__f_suffix3;
      var x$64 = this.sci_Vector4__f_suffix2;
      var x$65 = this.sci_BigVector__f_suffix1;
      var x$66 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(x$57, x$58, a2c$4, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66)
    } else {
      var a1$6 = this.sci_Vector__f_prefix1;
      var a1c$6 = a1$6.clone__O();
      a1c$6.u[index] = elem;
      var len1 = this.sci_Vector4__f_len1;
      var prefix2 = this.sci_Vector4__f_prefix2;
      var len12 = this.sci_Vector4__f_len12;
      var prefix3 = this.sci_Vector4__f_prefix3;
      var len123 = this.sci_Vector4__f_len123;
      var data4 = this.sci_Vector4__f_data4;
      var suffix3 = this.sci_Vector4__f_suffix3;
      var suffix2 = this.sci_Vector4__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(a1c$6, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, suffix1, length0)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector4.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector4__f_len1;
    var x$5 = this.sci_Vector4__f_prefix2;
    var x$6 = this.sci_Vector4__f_len12;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_len123;
    var x$9 = this.sci_Vector4__f_data4;
    var x$10 = this.sci_Vector4__f_suffix3;
    var x$11 = this.sci_Vector4__f_suffix2;
    return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2)
  } else if ((this.sci_Vector4__f_suffix2.u.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1);
    var a = new $ac_O(1);
    a.u[0] = elem;
    var x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$15 = this.sci_Vector__f_prefix1;
    var x$16 = this.sci_Vector4__f_len1;
    var x$17 = this.sci_Vector4__f_prefix2;
    var x$18 = this.sci_Vector4__f_len12;
    var x$19 = this.sci_Vector4__f_prefix3;
    var x$20 = this.sci_Vector4__f_len123;
    var x$21 = this.sci_Vector4__f_data4;
    var x$22 = this.sci_Vector4__f_suffix3;
    return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14)
  } else if ((this.sci_Vector4__f_suffix3.u.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1));
    var x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.u[0] = elem;
    var x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$27 = this.sci_Vector__f_prefix1;
    var x$28 = this.sci_Vector4__f_len1;
    var x$29 = this.sci_Vector4__f_prefix2;
    var x$30 = this.sci_Vector4__f_len12;
    var x$31 = this.sci_Vector4__f_prefix3;
    var x$32 = this.sci_Vector4__f_len123;
    var x$33 = this.sci_Vector4__f_data4;
    return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26)
  } else if ((this.sci_Vector4__f_data4.u.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)));
    var x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.u[0] = elem;
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector4__f_len1;
    var x$41 = this.sci_Vector4__f_prefix2;
    var x$42 = this.sci_Vector4__f_len12;
    var x$43 = this.sci_Vector4__f_prefix3;
    var x$44 = this.sci_Vector4__f_len123;
    return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38)
  } else {
    var $$x11 = this.sci_Vector__f_prefix1;
    var $$x10 = this.sci_Vector4__f_len1;
    var $$x9 = this.sci_Vector4__f_prefix2;
    var $$x8 = this.sci_Vector4__f_len12;
    var $$x7 = this.sci_Vector4__f_prefix3;
    var $$x6 = this.sci_Vector4__f_len123;
    var $$x5 = this.sci_Vector4__f_data4;
    var $$x4 = this.sci_Vector4__f_len123;
    var $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1));
    var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$3.u[0] = x;
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    a$4.u[0] = elem;
    return new $c_sci_Vector5($$x11, $$x10, $$x9, $$x8, $$x7, $$x6, $$x5, ((983040 + $$x4) | 0), $$x3, a$3, $$x2, $$x1, a$4, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector4.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_prefix2, f);
  var x$3 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_prefix3, f);
  var x$4 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector4__f_data4, f);
  var x$5 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_suffix3, f);
  var x$6 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_suffix2, f);
  var x$7 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$8 = this.sci_Vector4__f_len1;
  var x$9 = this.sci_Vector4__f_len12;
  var x$10 = this.sci_Vector4__f_len123;
  var x$11 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector4(x$1, x$8, x$2, x$9, x$3, x$10, x$4, x$5, x$6, x$7, x$11)
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector4.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector4.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1])))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return this.sci_Vector4__f_prefix3.u[((io$2 >>> 10) | 0)].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return this.sci_Vector4__f_prefix2.u[((io$3 >>> 5) | 0)].u[(31 & io$3)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
var $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
  /*<skip>*/
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.u[i5].u[i4].u[i3].u[i2].u[i1] : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1]))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return this.sci_Vector5__f_prefix4.u[((io$2 >>> 15) | 0)].u[(31 & ((io$2 >>> 10) | 0))].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return this.sci_Vector5__f_prefix3.u[((io$3 >>> 10) | 0)].u[(31 & ((io$3 >>> 5) | 0))].u[(31 & io$3)]
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return this.sci_Vector5__f_prefix2.u[((io$4 >>> 5) | 0)].u[(31 & io$4)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector5.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector5__f_len1234)) {
      var io = ((index - this.sci_Vector5__f_len1234) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.sci_Vector5__f_data5.u.length)) {
        var a5 = this.sci_Vector5__f_data5;
        var a5c = a5.clone__O();
        var a4 = a5c.u[i5];
        var a4c = a4.clone__O();
        var a3 = a4c.u[i4];
        var a3c = a3.clone__O();
        var a2 = a3c.u[i3];
        var a2c = a2.clone__O();
        var a1 = a2c.u[i2];
        var a1c = a1.clone__O();
        a1c.u[i1] = elem;
        a2c.u[i2] = a1c;
        a3c.u[i3] = a2c;
        a4c.u[i4] = a3c;
        a5c.u[i5] = a4c;
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector5__f_len1;
        var x$4 = this.sci_Vector5__f_prefix2;
        var x$5 = this.sci_Vector5__f_len12;
        var x$6 = this.sci_Vector5__f_prefix3;
        var x$7 = this.sci_Vector5__f_len123;
        var x$8 = this.sci_Vector5__f_prefix4;
        var x$9 = this.sci_Vector5__f_len1234;
        var x$10 = this.sci_Vector5__f_suffix4;
        var x$11 = this.sci_Vector5__f_suffix3;
        var x$12 = this.sci_Vector5__f_suffix2;
        var x$13 = this.sci_BigVector__f_suffix1;
        var x$14 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, a5c, x$10, x$11, x$12, x$13, x$14)
      } else if ((i4 < this.sci_Vector5__f_suffix4.u.length)) {
        var a4$1 = this.sci_Vector5__f_suffix4;
        var a4c$1 = a4$1.clone__O();
        var a3$1 = a4c$1.u[i4];
        var a3c$1 = a3$1.clone__O();
        var a2$1 = a3c$1.u[i3];
        var a2c$1 = a2$1.clone__O();
        var a1$1 = a2c$1.u[i2];
        var a1c$1 = a1$1.clone__O();
        a1c$1.u[i1] = elem;
        a2c$1.u[i2] = a1c$1;
        a3c$1.u[i3] = a2c$1;
        a4c$1.u[i4] = a3c$1;
        var x$16 = this.sci_Vector__f_prefix1;
        var x$17 = this.sci_Vector5__f_len1;
        var x$18 = this.sci_Vector5__f_prefix2;
        var x$19 = this.sci_Vector5__f_len12;
        var x$20 = this.sci_Vector5__f_prefix3;
        var x$21 = this.sci_Vector5__f_len123;
        var x$22 = this.sci_Vector5__f_prefix4;
        var x$23 = this.sci_Vector5__f_len1234;
        var x$24 = this.sci_Vector5__f_data5;
        var x$25 = this.sci_Vector5__f_suffix3;
        var x$26 = this.sci_Vector5__f_suffix2;
        var x$27 = this.sci_BigVector__f_suffix1;
        var x$28 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$23, x$24, a4c$1, x$25, x$26, x$27, x$28)
      } else if ((i3 < this.sci_Vector5__f_suffix3.u.length)) {
        var a3$2 = this.sci_Vector5__f_suffix3;
        var a3c$2 = a3$2.clone__O();
        var a2$2 = a3c$2.u[i3];
        var a2c$2 = a2$2.clone__O();
        var a1$2 = a2c$2.u[i2];
        var a1c$2 = a1$2.clone__O();
        a1c$2.u[i1] = elem;
        a2c$2.u[i2] = a1c$2;
        a3c$2.u[i3] = a2c$2;
        var x$30 = this.sci_Vector__f_prefix1;
        var x$31 = this.sci_Vector5__f_len1;
        var x$32 = this.sci_Vector5__f_prefix2;
        var x$33 = this.sci_Vector5__f_len12;
        var x$34 = this.sci_Vector5__f_prefix3;
        var x$35 = this.sci_Vector5__f_len123;
        var x$36 = this.sci_Vector5__f_prefix4;
        var x$37 = this.sci_Vector5__f_len1234;
        var x$38 = this.sci_Vector5__f_data5;
        var x$39 = this.sci_Vector5__f_suffix4;
        var x$40 = this.sci_Vector5__f_suffix2;
        var x$41 = this.sci_BigVector__f_suffix1;
        var x$42 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, a3c$2, x$40, x$41, x$42)
      } else if ((i2 < this.sci_Vector5__f_suffix2.u.length)) {
        var a2$3 = this.sci_Vector5__f_suffix2;
        var a2c$3 = a2$3.clone__O();
        var a1$3 = a2c$3.u[i2];
        var a1c$3 = a1$3.clone__O();
        a1c$3.u[i1] = elem;
        a2c$3.u[i2] = a1c$3;
        var x$44 = this.sci_Vector__f_prefix1;
        var x$45 = this.sci_Vector5__f_len1;
        var x$46 = this.sci_Vector5__f_prefix2;
        var x$47 = this.sci_Vector5__f_len12;
        var x$48 = this.sci_Vector5__f_prefix3;
        var x$49 = this.sci_Vector5__f_len123;
        var x$50 = this.sci_Vector5__f_prefix4;
        var x$51 = this.sci_Vector5__f_len1234;
        var x$52 = this.sci_Vector5__f_data5;
        var x$53 = this.sci_Vector5__f_suffix4;
        var x$54 = this.sci_Vector5__f_suffix3;
        var x$55 = this.sci_BigVector__f_suffix1;
        var x$56 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$52, x$53, x$54, a2c$3, x$55, x$56)
      } else {
        var a1$4 = this.sci_BigVector__f_suffix1;
        var a1c$4 = a1$4.clone__O();
        a1c$4.u[i1] = elem;
        var x$58 = this.sci_Vector__f_prefix1;
        var x$59 = this.sci_Vector5__f_len1;
        var x$60 = this.sci_Vector5__f_prefix2;
        var x$61 = this.sci_Vector5__f_len12;
        var x$62 = this.sci_Vector5__f_prefix3;
        var x$63 = this.sci_Vector5__f_len123;
        var x$64 = this.sci_Vector5__f_prefix4;
        var x$65 = this.sci_Vector5__f_len1234;
        var x$66 = this.sci_Vector5__f_data5;
        var x$67 = this.sci_Vector5__f_suffix4;
        var x$68 = this.sci_Vector5__f_suffix3;
        var x$69 = this.sci_Vector5__f_suffix2;
        var x$70 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, a1c$4, x$70)
      }
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      var a4$2 = this.sci_Vector5__f_prefix4;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.clone__O();
      var a3$3 = a4c$2.u[idx4];
      var a3c$3 = a3$3.clone__O();
      var a2$4 = a3c$3.u[idx3];
      var a2c$4 = a2$4.clone__O();
      var a1$5 = a2c$4.u[idx2];
      var a1c$5 = a1$5.clone__O();
      a1c$5.u[idx1] = elem;
      a2c$4.u[idx2] = a1c$5;
      a3c$3.u[idx3] = a2c$4;
      a4c$2.u[idx4] = a3c$3;
      var x$72 = this.sci_Vector__f_prefix1;
      var x$73 = this.sci_Vector5__f_len1;
      var x$74 = this.sci_Vector5__f_prefix2;
      var x$75 = this.sci_Vector5__f_len12;
      var x$76 = this.sci_Vector5__f_prefix3;
      var x$77 = this.sci_Vector5__f_len123;
      var x$78 = this.sci_Vector5__f_len1234;
      var x$79 = this.sci_Vector5__f_data5;
      var x$80 = this.sci_Vector5__f_suffix4;
      var x$81 = this.sci_Vector5__f_suffix3;
      var x$82 = this.sci_Vector5__f_suffix2;
      var x$83 = this.sci_BigVector__f_suffix1;
      var x$84 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$72, x$73, x$74, x$75, x$76, x$77, a4c$2, x$78, x$79, x$80, x$81, x$82, x$83, x$84)
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      var a3$4 = this.sci_Vector5__f_prefix3;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.clone__O();
      var a2$5 = a3c$4.u[idx3$1];
      var a2c$5 = a2$5.clone__O();
      var a1$6 = a2c$5.u[idx2$1];
      var a1c$6 = a1$6.clone__O();
      a1c$6.u[idx1$1] = elem;
      a2c$5.u[idx2$1] = a1c$6;
      a3c$4.u[idx3$1] = a2c$5;
      var x$86 = this.sci_Vector__f_prefix1;
      var x$87 = this.sci_Vector5__f_len1;
      var x$88 = this.sci_Vector5__f_prefix2;
      var x$89 = this.sci_Vector5__f_len12;
      var x$90 = this.sci_Vector5__f_len123;
      var x$91 = this.sci_Vector5__f_prefix4;
      var x$92 = this.sci_Vector5__f_len1234;
      var x$93 = this.sci_Vector5__f_data5;
      var x$94 = this.sci_Vector5__f_suffix4;
      var x$95 = this.sci_Vector5__f_suffix3;
      var x$96 = this.sci_Vector5__f_suffix2;
      var x$97 = this.sci_BigVector__f_suffix1;
      var x$98 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$86, x$87, x$88, x$89, a3c$4, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98)
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      var a2$6 = this.sci_Vector5__f_prefix2;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.clone__O();
      var a1$7 = a2c$6.u[idx2$2];
      var a1c$7 = a1$7.clone__O();
      a1c$7.u[idx1$2] = elem;
      a2c$6.u[idx2$2] = a1c$7;
      var x$100 = this.sci_Vector__f_prefix1;
      var x$101 = this.sci_Vector5__f_len1;
      var x$102 = this.sci_Vector5__f_len12;
      var x$103 = this.sci_Vector5__f_prefix3;
      var x$104 = this.sci_Vector5__f_len123;
      var x$105 = this.sci_Vector5__f_prefix4;
      var x$106 = this.sci_Vector5__f_len1234;
      var x$107 = this.sci_Vector5__f_data5;
      var x$108 = this.sci_Vector5__f_suffix4;
      var x$109 = this.sci_Vector5__f_suffix3;
      var x$110 = this.sci_Vector5__f_suffix2;
      var x$111 = this.sci_BigVector__f_suffix1;
      var x$112 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$100, x$101, a2c$6, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, x$112)
    } else {
      var a1$8 = this.sci_Vector__f_prefix1;
      var a1c$8 = a1$8.clone__O();
      a1c$8.u[index] = elem;
      var len1 = this.sci_Vector5__f_len1;
      var prefix2 = this.sci_Vector5__f_prefix2;
      var len12 = this.sci_Vector5__f_len12;
      var prefix3 = this.sci_Vector5__f_prefix3;
      var len123 = this.sci_Vector5__f_len123;
      var prefix4 = this.sci_Vector5__f_prefix4;
      var len1234 = this.sci_Vector5__f_len1234;
      var data5 = this.sci_Vector5__f_data5;
      var suffix4 = this.sci_Vector5__f_suffix4;
      var suffix3 = this.sci_Vector5__f_suffix3;
      var suffix2 = this.sci_Vector5__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(a1c$8, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, suffix1, length0)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector5.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector5__f_len1;
    var x$5 = this.sci_Vector5__f_prefix2;
    var x$6 = this.sci_Vector5__f_len12;
    var x$7 = this.sci_Vector5__f_prefix3;
    var x$8 = this.sci_Vector5__f_len123;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_len1234;
    var x$11 = this.sci_Vector5__f_data5;
    var x$12 = this.sci_Vector5__f_suffix4;
    var x$13 = this.sci_Vector5__f_suffix3;
    var x$14 = this.sci_Vector5__f_suffix2;
    return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2)
  } else if ((this.sci_Vector5__f_suffix2.u.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1);
    var a = new $ac_O(1);
    a.u[0] = elem;
    var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$18 = this.sci_Vector__f_prefix1;
    var x$19 = this.sci_Vector5__f_len1;
    var x$20 = this.sci_Vector5__f_prefix2;
    var x$21 = this.sci_Vector5__f_len12;
    var x$22 = this.sci_Vector5__f_prefix3;
    var x$23 = this.sci_Vector5__f_len123;
    var x$24 = this.sci_Vector5__f_prefix4;
    var x$25 = this.sci_Vector5__f_len1234;
    var x$26 = this.sci_Vector5__f_data5;
    var x$27 = this.sci_Vector5__f_suffix4;
    var x$28 = this.sci_Vector5__f_suffix3;
    return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17)
  } else if ((this.sci_Vector5__f_suffix3.u.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1));
    var x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.u[0] = elem;
    var x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$33 = this.sci_Vector__f_prefix1;
    var x$34 = this.sci_Vector5__f_len1;
    var x$35 = this.sci_Vector5__f_prefix2;
    var x$36 = this.sci_Vector5__f_len12;
    var x$37 = this.sci_Vector5__f_prefix3;
    var x$38 = this.sci_Vector5__f_len123;
    var x$39 = this.sci_Vector5__f_prefix4;
    var x$40 = this.sci_Vector5__f_len1234;
    var x$41 = this.sci_Vector5__f_data5;
    var x$42 = this.sci_Vector5__f_suffix4;
    return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32)
  } else if ((this.sci_Vector5__f_suffix4.u.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)));
    var x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.u[0] = elem;
    var x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$48 = this.sci_Vector__f_prefix1;
    var x$49 = this.sci_Vector5__f_len1;
    var x$50 = this.sci_Vector5__f_prefix2;
    var x$51 = this.sci_Vector5__f_len12;
    var x$52 = this.sci_Vector5__f_prefix3;
    var x$53 = this.sci_Vector5__f_len123;
    var x$54 = this.sci_Vector5__f_prefix4;
    var x$55 = this.sci_Vector5__f_len1234;
    var x$56 = this.sci_Vector5__f_data5;
    return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47)
  } else if ((this.sci_Vector5__f_data5.u.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))));
    var x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.u[0] = elem;
    var x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$63 = this.sci_Vector__f_prefix1;
    var x$64 = this.sci_Vector5__f_len1;
    var x$65 = this.sci_Vector5__f_prefix2;
    var x$66 = this.sci_Vector5__f_len12;
    var x$67 = this.sci_Vector5__f_prefix3;
    var x$68 = this.sci_Vector5__f_len123;
    var x$69 = this.sci_Vector5__f_prefix4;
    var x$70 = this.sci_Vector5__f_len1234;
    return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62)
  } else {
    var $$x14 = this.sci_Vector__f_prefix1;
    var $$x13 = this.sci_Vector5__f_len1;
    var $$x12 = this.sci_Vector5__f_prefix2;
    var $$x11 = this.sci_Vector5__f_len12;
    var $$x10 = this.sci_Vector5__f_prefix3;
    var $$x9 = this.sci_Vector5__f_len123;
    var $$x8 = this.sci_Vector5__f_prefix4;
    var $$x7 = this.sci_Vector5__f_len1234;
    var $$x6 = this.sci_Vector5__f_data5;
    var $$x5 = this.sci_Vector5__f_len1234;
    var $$x4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
    var x = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)));
    var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$4.u[0] = x;
    var $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$5 = new $ac_O(1);
    a$5.u[0] = elem;
    return new $c_sci_Vector6($$x14, $$x13, $$x12, $$x11, $$x10, $$x9, $$x8, $$x7, $$x6, ((31457280 + $$x5) | 0), $$x4, a$4, $$x3, $$x2, $$x1, a$5, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector5.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_prefix2, f);
  var x$3 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_prefix3, f);
  var x$4 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_prefix4, f);
  var x$5 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector5__f_data5, f);
  var x$6 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_suffix4, f);
  var x$7 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_suffix3, f);
  var x$8 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_suffix2, f);
  var x$9 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$10 = this.sci_Vector5__f_len1;
  var x$11 = this.sci_Vector5__f_len12;
  var x$12 = this.sci_Vector5__f_len123;
  var x$13 = this.sci_Vector5__f_len1234;
  var x$14 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector5(x$1, x$10, x$2, x$11, x$3, x$12, x$4, x$13, x$5, x$6, x$7, x$8, x$9, x$14)
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector5.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector5.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.u[i5].u[i4].u[i3].u[i2].u[i1] : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1]))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return this.sci_Vector5__f_prefix4.u[((io$2 >>> 15) | 0)].u[(31 & ((io$2 >>> 10) | 0))].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return this.sci_Vector5__f_prefix3.u[((io$3 >>> 10) | 0)].u[(31 & ((io$3 >>> 5) | 0))].u[(31 & io$3)]
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return this.sci_Vector5__f_prefix2.u[((io$4 >>> 5) | 0)].u[(31 & io$4)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
var $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
  /*<skip>*/
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.u[i6].u[i5].u[i4].u[i3].u[i2].u[i1] : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.u[i5].u[i4].u[i3].u[i2].u[i1] : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1])))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return this.sci_Vector6__f_prefix5.u[((io$2 >>> 20) | 0)].u[(31 & ((io$2 >>> 15) | 0))].u[(31 & ((io$2 >>> 10) | 0))].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return this.sci_Vector6__f_prefix4.u[((io$3 >>> 15) | 0)].u[(31 & ((io$3 >>> 10) | 0))].u[(31 & ((io$3 >>> 5) | 0))].u[(31 & io$3)]
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return this.sci_Vector6__f_prefix3.u[((io$4 >>> 10) | 0)].u[(31 & ((io$4 >>> 5) | 0))].u[(31 & io$4)]
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return this.sci_Vector6__f_prefix2.u[((io$5 >>> 5) | 0)].u[(31 & io$5)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector6.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector6__f_len12345)) {
      var io = ((index - this.sci_Vector6__f_len12345) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.sci_Vector6__f_data6.u.length)) {
        var a6 = this.sci_Vector6__f_data6;
        var a6c = a6.clone__O();
        var a5 = a6c.u[i6];
        var a5c = a5.clone__O();
        var a4 = a5c.u[i5];
        var a4c = a4.clone__O();
        var a3 = a4c.u[i4];
        var a3c = a3.clone__O();
        var a2 = a3c.u[i3];
        var a2c = a2.clone__O();
        var a1 = a2c.u[i2];
        var a1c = a1.clone__O();
        a1c.u[i1] = elem;
        a2c.u[i2] = a1c;
        a3c.u[i3] = a2c;
        a4c.u[i4] = a3c;
        a5c.u[i5] = a4c;
        a6c.u[i6] = a5c;
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector6__f_len1;
        var x$4 = this.sci_Vector6__f_prefix2;
        var x$5 = this.sci_Vector6__f_len12;
        var x$6 = this.sci_Vector6__f_prefix3;
        var x$7 = this.sci_Vector6__f_len123;
        var x$8 = this.sci_Vector6__f_prefix4;
        var x$9 = this.sci_Vector6__f_len1234;
        var x$10 = this.sci_Vector6__f_prefix5;
        var x$11 = this.sci_Vector6__f_len12345;
        var x$12 = this.sci_Vector6__f_suffix5;
        var x$13 = this.sci_Vector6__f_suffix4;
        var x$14 = this.sci_Vector6__f_suffix3;
        var x$15 = this.sci_Vector6__f_suffix2;
        var x$16 = this.sci_BigVector__f_suffix1;
        var x$17 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, a6c, x$12, x$13, x$14, x$15, x$16, x$17)
      } else if ((i5 < this.sci_Vector6__f_suffix5.u.length)) {
        var a5$1 = this.sci_Vector6__f_suffix5;
        var a5c$1 = a5$1.clone__O();
        var a4$1 = a5c$1.u[i5];
        var a4c$1 = a4$1.clone__O();
        var a3$1 = a4c$1.u[i4];
        var a3c$1 = a3$1.clone__O();
        var a2$1 = a3c$1.u[i3];
        var a2c$1 = a2$1.clone__O();
        var a1$1 = a2c$1.u[i2];
        var a1c$1 = a1$1.clone__O();
        a1c$1.u[i1] = elem;
        a2c$1.u[i2] = a1c$1;
        a3c$1.u[i3] = a2c$1;
        a4c$1.u[i4] = a3c$1;
        a5c$1.u[i5] = a4c$1;
        var x$19 = this.sci_Vector__f_prefix1;
        var x$20 = this.sci_Vector6__f_len1;
        var x$21 = this.sci_Vector6__f_prefix2;
        var x$22 = this.sci_Vector6__f_len12;
        var x$23 = this.sci_Vector6__f_prefix3;
        var x$24 = this.sci_Vector6__f_len123;
        var x$25 = this.sci_Vector6__f_prefix4;
        var x$26 = this.sci_Vector6__f_len1234;
        var x$27 = this.sci_Vector6__f_prefix5;
        var x$28 = this.sci_Vector6__f_len12345;
        var x$29 = this.sci_Vector6__f_data6;
        var x$30 = this.sci_Vector6__f_suffix4;
        var x$31 = this.sci_Vector6__f_suffix3;
        var x$32 = this.sci_Vector6__f_suffix2;
        var x$33 = this.sci_BigVector__f_suffix1;
        var x$34 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, a5c$1, x$30, x$31, x$32, x$33, x$34)
      } else if ((i4 < this.sci_Vector6__f_suffix4.u.length)) {
        var a4$2 = this.sci_Vector6__f_suffix4;
        var a4c$2 = a4$2.clone__O();
        var a3$2 = a4c$2.u[i4];
        var a3c$2 = a3$2.clone__O();
        var a2$2 = a3c$2.u[i3];
        var a2c$2 = a2$2.clone__O();
        var a1$2 = a2c$2.u[i2];
        var a1c$2 = a1$2.clone__O();
        a1c$2.u[i1] = elem;
        a2c$2.u[i2] = a1c$2;
        a3c$2.u[i3] = a2c$2;
        a4c$2.u[i4] = a3c$2;
        var x$36 = this.sci_Vector__f_prefix1;
        var x$37 = this.sci_Vector6__f_len1;
        var x$38 = this.sci_Vector6__f_prefix2;
        var x$39 = this.sci_Vector6__f_len12;
        var x$40 = this.sci_Vector6__f_prefix3;
        var x$41 = this.sci_Vector6__f_len123;
        var x$42 = this.sci_Vector6__f_prefix4;
        var x$43 = this.sci_Vector6__f_len1234;
        var x$44 = this.sci_Vector6__f_prefix5;
        var x$45 = this.sci_Vector6__f_len12345;
        var x$46 = this.sci_Vector6__f_data6;
        var x$47 = this.sci_Vector6__f_suffix5;
        var x$48 = this.sci_Vector6__f_suffix3;
        var x$49 = this.sci_Vector6__f_suffix2;
        var x$50 = this.sci_BigVector__f_suffix1;
        var x$51 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, a4c$2, x$48, x$49, x$50, x$51)
      } else if ((i3 < this.sci_Vector6__f_suffix3.u.length)) {
        var a3$3 = this.sci_Vector6__f_suffix3;
        var a3c$3 = a3$3.clone__O();
        var a2$3 = a3c$3.u[i3];
        var a2c$3 = a2$3.clone__O();
        var a1$3 = a2c$3.u[i2];
        var a1c$3 = a1$3.clone__O();
        a1c$3.u[i1] = elem;
        a2c$3.u[i2] = a1c$3;
        a3c$3.u[i3] = a2c$3;
        var x$53 = this.sci_Vector__f_prefix1;
        var x$54 = this.sci_Vector6__f_len1;
        var x$55 = this.sci_Vector6__f_prefix2;
        var x$56 = this.sci_Vector6__f_len12;
        var x$57 = this.sci_Vector6__f_prefix3;
        var x$58 = this.sci_Vector6__f_len123;
        var x$59 = this.sci_Vector6__f_prefix4;
        var x$60 = this.sci_Vector6__f_len1234;
        var x$61 = this.sci_Vector6__f_prefix5;
        var x$62 = this.sci_Vector6__f_len12345;
        var x$63 = this.sci_Vector6__f_data6;
        var x$64 = this.sci_Vector6__f_suffix5;
        var x$65 = this.sci_Vector6__f_suffix4;
        var x$66 = this.sci_Vector6__f_suffix2;
        var x$67 = this.sci_BigVector__f_suffix1;
        var x$68 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, a3c$3, x$66, x$67, x$68)
      } else if ((i2 < this.sci_Vector6__f_suffix2.u.length)) {
        var a2$4 = this.sci_Vector6__f_suffix2;
        var a2c$4 = a2$4.clone__O();
        var a1$4 = a2c$4.u[i2];
        var a1c$4 = a1$4.clone__O();
        a1c$4.u[i1] = elem;
        a2c$4.u[i2] = a1c$4;
        var x$70 = this.sci_Vector__f_prefix1;
        var x$71 = this.sci_Vector6__f_len1;
        var x$72 = this.sci_Vector6__f_prefix2;
        var x$73 = this.sci_Vector6__f_len12;
        var x$74 = this.sci_Vector6__f_prefix3;
        var x$75 = this.sci_Vector6__f_len123;
        var x$76 = this.sci_Vector6__f_prefix4;
        var x$77 = this.sci_Vector6__f_len1234;
        var x$78 = this.sci_Vector6__f_prefix5;
        var x$79 = this.sci_Vector6__f_len12345;
        var x$80 = this.sci_Vector6__f_data6;
        var x$81 = this.sci_Vector6__f_suffix5;
        var x$82 = this.sci_Vector6__f_suffix4;
        var x$83 = this.sci_Vector6__f_suffix3;
        var x$84 = this.sci_BigVector__f_suffix1;
        var x$85 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, a2c$4, x$84, x$85)
      } else {
        var a1$5 = this.sci_BigVector__f_suffix1;
        var a1c$5 = a1$5.clone__O();
        a1c$5.u[i1] = elem;
        var x$87 = this.sci_Vector__f_prefix1;
        var x$88 = this.sci_Vector6__f_len1;
        var x$89 = this.sci_Vector6__f_prefix2;
        var x$90 = this.sci_Vector6__f_len12;
        var x$91 = this.sci_Vector6__f_prefix3;
        var x$92 = this.sci_Vector6__f_len123;
        var x$93 = this.sci_Vector6__f_prefix4;
        var x$94 = this.sci_Vector6__f_len1234;
        var x$95 = this.sci_Vector6__f_prefix5;
        var x$96 = this.sci_Vector6__f_len12345;
        var x$97 = this.sci_Vector6__f_data6;
        var x$98 = this.sci_Vector6__f_suffix5;
        var x$99 = this.sci_Vector6__f_suffix4;
        var x$100 = this.sci_Vector6__f_suffix3;
        var x$101 = this.sci_Vector6__f_suffix2;
        var x$102 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$87, x$88, x$89, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, a1c$5, x$102)
      }
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      var a5$2 = this.sci_Vector6__f_prefix5;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.clone__O();
      var a4$3 = a5c$2.u[idx5];
      var a4c$3 = a4$3.clone__O();
      var a3$4 = a4c$3.u[idx4];
      var a3c$4 = a3$4.clone__O();
      var a2$5 = a3c$4.u[idx3];
      var a2c$5 = a2$5.clone__O();
      var a1$6 = a2c$5.u[idx2];
      var a1c$6 = a1$6.clone__O();
      a1c$6.u[idx1] = elem;
      a2c$5.u[idx2] = a1c$6;
      a3c$4.u[idx3] = a2c$5;
      a4c$3.u[idx4] = a3c$4;
      a5c$2.u[idx5] = a4c$3;
      var x$104 = this.sci_Vector__f_prefix1;
      var x$105 = this.sci_Vector6__f_len1;
      var x$106 = this.sci_Vector6__f_prefix2;
      var x$107 = this.sci_Vector6__f_len12;
      var x$108 = this.sci_Vector6__f_prefix3;
      var x$109 = this.sci_Vector6__f_len123;
      var x$110 = this.sci_Vector6__f_prefix4;
      var x$111 = this.sci_Vector6__f_len1234;
      var x$112 = this.sci_Vector6__f_len12345;
      var x$113 = this.sci_Vector6__f_data6;
      var x$114 = this.sci_Vector6__f_suffix5;
      var x$115 = this.sci_Vector6__f_suffix4;
      var x$116 = this.sci_Vector6__f_suffix3;
      var x$117 = this.sci_Vector6__f_suffix2;
      var x$118 = this.sci_BigVector__f_suffix1;
      var x$119 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, a5c$2, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119)
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      var a4$4 = this.sci_Vector6__f_prefix4;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.clone__O();
      var a3$5 = a4c$4.u[idx4$1];
      var a3c$5 = a3$5.clone__O();
      var a2$6 = a3c$5.u[idx3$1];
      var a2c$6 = a2$6.clone__O();
      var a1$7 = a2c$6.u[idx2$1];
      var a1c$7 = a1$7.clone__O();
      a1c$7.u[idx1$1] = elem;
      a2c$6.u[idx2$1] = a1c$7;
      a3c$5.u[idx3$1] = a2c$6;
      a4c$4.u[idx4$1] = a3c$5;
      var x$121 = this.sci_Vector__f_prefix1;
      var x$122 = this.sci_Vector6__f_len1;
      var x$123 = this.sci_Vector6__f_prefix2;
      var x$124 = this.sci_Vector6__f_len12;
      var x$125 = this.sci_Vector6__f_prefix3;
      var x$126 = this.sci_Vector6__f_len123;
      var x$127 = this.sci_Vector6__f_len1234;
      var x$128 = this.sci_Vector6__f_prefix5;
      var x$129 = this.sci_Vector6__f_len12345;
      var x$130 = this.sci_Vector6__f_data6;
      var x$131 = this.sci_Vector6__f_suffix5;
      var x$132 = this.sci_Vector6__f_suffix4;
      var x$133 = this.sci_Vector6__f_suffix3;
      var x$134 = this.sci_Vector6__f_suffix2;
      var x$135 = this.sci_BigVector__f_suffix1;
      var x$136 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$121, x$122, x$123, x$124, x$125, x$126, a4c$4, x$127, x$128, x$129, x$130, x$131, x$132, x$133, x$134, x$135, x$136)
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      var a3$6 = this.sci_Vector6__f_prefix3;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.clone__O();
      var a2$7 = a3c$6.u[idx3$2];
      var a2c$7 = a2$7.clone__O();
      var a1$8 = a2c$7.u[idx2$2];
      var a1c$8 = a1$8.clone__O();
      a1c$8.u[idx1$2] = elem;
      a2c$7.u[idx2$2] = a1c$8;
      a3c$6.u[idx3$2] = a2c$7;
      var x$138 = this.sci_Vector__f_prefix1;
      var x$139 = this.sci_Vector6__f_len1;
      var x$140 = this.sci_Vector6__f_prefix2;
      var x$141 = this.sci_Vector6__f_len12;
      var x$142 = this.sci_Vector6__f_len123;
      var x$143 = this.sci_Vector6__f_prefix4;
      var x$144 = this.sci_Vector6__f_len1234;
      var x$145 = this.sci_Vector6__f_prefix5;
      var x$146 = this.sci_Vector6__f_len12345;
      var x$147 = this.sci_Vector6__f_data6;
      var x$148 = this.sci_Vector6__f_suffix5;
      var x$149 = this.sci_Vector6__f_suffix4;
      var x$150 = this.sci_Vector6__f_suffix3;
      var x$151 = this.sci_Vector6__f_suffix2;
      var x$152 = this.sci_BigVector__f_suffix1;
      var x$153 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$138, x$139, x$140, x$141, a3c$6, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$150, x$151, x$152, x$153)
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      var a2$8 = this.sci_Vector6__f_prefix2;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.clone__O();
      var a1$9 = a2c$8.u[idx2$3];
      var a1c$9 = a1$9.clone__O();
      a1c$9.u[idx1$3] = elem;
      a2c$8.u[idx2$3] = a1c$9;
      var x$155 = this.sci_Vector__f_prefix1;
      var x$156 = this.sci_Vector6__f_len1;
      var x$157 = this.sci_Vector6__f_len12;
      var x$158 = this.sci_Vector6__f_prefix3;
      var x$159 = this.sci_Vector6__f_len123;
      var x$160 = this.sci_Vector6__f_prefix4;
      var x$161 = this.sci_Vector6__f_len1234;
      var x$162 = this.sci_Vector6__f_prefix5;
      var x$163 = this.sci_Vector6__f_len12345;
      var x$164 = this.sci_Vector6__f_data6;
      var x$165 = this.sci_Vector6__f_suffix5;
      var x$166 = this.sci_Vector6__f_suffix4;
      var x$167 = this.sci_Vector6__f_suffix3;
      var x$168 = this.sci_Vector6__f_suffix2;
      var x$169 = this.sci_BigVector__f_suffix1;
      var x$170 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$155, x$156, a2c$8, x$157, x$158, x$159, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$170)
    } else {
      var a1$10 = this.sci_Vector__f_prefix1;
      var a1c$10 = a1$10.clone__O();
      a1c$10.u[index] = elem;
      var len1 = this.sci_Vector6__f_len1;
      var prefix2 = this.sci_Vector6__f_prefix2;
      var len12 = this.sci_Vector6__f_len12;
      var prefix3 = this.sci_Vector6__f_prefix3;
      var len123 = this.sci_Vector6__f_len123;
      var prefix4 = this.sci_Vector6__f_prefix4;
      var len1234 = this.sci_Vector6__f_len1234;
      var prefix5 = this.sci_Vector6__f_prefix5;
      var len12345 = this.sci_Vector6__f_len12345;
      var data6 = this.sci_Vector6__f_data6;
      var suffix5 = this.sci_Vector6__f_suffix5;
      var suffix4 = this.sci_Vector6__f_suffix4;
      var suffix3 = this.sci_Vector6__f_suffix3;
      var suffix2 = this.sci_Vector6__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(a1c$10, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, suffix1, length0)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector6.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector6__f_len1;
    var x$5 = this.sci_Vector6__f_prefix2;
    var x$6 = this.sci_Vector6__f_len12;
    var x$7 = this.sci_Vector6__f_prefix3;
    var x$8 = this.sci_Vector6__f_len123;
    var x$9 = this.sci_Vector6__f_prefix4;
    var x$10 = this.sci_Vector6__f_len1234;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_len12345;
    var x$13 = this.sci_Vector6__f_data6;
    var x$14 = this.sci_Vector6__f_suffix5;
    var x$15 = this.sci_Vector6__f_suffix4;
    var x$16 = this.sci_Vector6__f_suffix3;
    var x$17 = this.sci_Vector6__f_suffix2;
    return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2)
  } else if ((this.sci_Vector6__f_suffix2.u.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1);
    var a = new $ac_O(1);
    a.u[0] = elem;
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector6__f_len1;
    var x$23 = this.sci_Vector6__f_prefix2;
    var x$24 = this.sci_Vector6__f_len12;
    var x$25 = this.sci_Vector6__f_prefix3;
    var x$26 = this.sci_Vector6__f_len123;
    var x$27 = this.sci_Vector6__f_prefix4;
    var x$28 = this.sci_Vector6__f_len1234;
    var x$29 = this.sci_Vector6__f_prefix5;
    var x$30 = this.sci_Vector6__f_len12345;
    var x$31 = this.sci_Vector6__f_data6;
    var x$32 = this.sci_Vector6__f_suffix5;
    var x$33 = this.sci_Vector6__f_suffix4;
    var x$34 = this.sci_Vector6__f_suffix3;
    return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20)
  } else if ((this.sci_Vector6__f_suffix3.u.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1));
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.u[0] = elem;
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector6__f_len1;
    var x$41 = this.sci_Vector6__f_prefix2;
    var x$42 = this.sci_Vector6__f_len12;
    var x$43 = this.sci_Vector6__f_prefix3;
    var x$44 = this.sci_Vector6__f_len123;
    var x$45 = this.sci_Vector6__f_prefix4;
    var x$46 = this.sci_Vector6__f_len1234;
    var x$47 = this.sci_Vector6__f_prefix5;
    var x$48 = this.sci_Vector6__f_len12345;
    var x$49 = this.sci_Vector6__f_data6;
    var x$50 = this.sci_Vector6__f_suffix5;
    var x$51 = this.sci_Vector6__f_suffix4;
    return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38)
  } else if ((this.sci_Vector6__f_suffix4.u.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)));
    var x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.u[0] = elem;
    var x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$57 = this.sci_Vector__f_prefix1;
    var x$58 = this.sci_Vector6__f_len1;
    var x$59 = this.sci_Vector6__f_prefix2;
    var x$60 = this.sci_Vector6__f_len12;
    var x$61 = this.sci_Vector6__f_prefix3;
    var x$62 = this.sci_Vector6__f_len123;
    var x$63 = this.sci_Vector6__f_prefix4;
    var x$64 = this.sci_Vector6__f_len1234;
    var x$65 = this.sci_Vector6__f_prefix5;
    var x$66 = this.sci_Vector6__f_len12345;
    var x$67 = this.sci_Vector6__f_data6;
    var x$68 = this.sci_Vector6__f_suffix5;
    return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56)
  } else if ((this.sci_Vector6__f_suffix5.u.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))));
    var x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.u[0] = elem;
    var x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$75 = this.sci_Vector__f_prefix1;
    var x$76 = this.sci_Vector6__f_len1;
    var x$77 = this.sci_Vector6__f_prefix2;
    var x$78 = this.sci_Vector6__f_len12;
    var x$79 = this.sci_Vector6__f_prefix3;
    var x$80 = this.sci_Vector6__f_len123;
    var x$81 = this.sci_Vector6__f_prefix4;
    var x$82 = this.sci_Vector6__f_len1234;
    var x$83 = this.sci_Vector6__f_prefix5;
    var x$84 = this.sci_Vector6__f_len12345;
    var x$85 = this.sci_Vector6__f_data6;
    return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74)
  } else if ((this.sci_Vector6__f_data6.u.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))));
    var x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    a$4.u[0] = elem;
    var x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$93 = this.sci_Vector__f_prefix1;
    var x$94 = this.sci_Vector6__f_len1;
    var x$95 = this.sci_Vector6__f_prefix2;
    var x$96 = this.sci_Vector6__f_len12;
    var x$97 = this.sci_Vector6__f_prefix3;
    var x$98 = this.sci_Vector6__f_len123;
    var x$99 = this.sci_Vector6__f_prefix4;
    var x$100 = this.sci_Vector6__f_len1234;
    var x$101 = this.sci_Vector6__f_prefix5;
    var x$102 = this.sci_Vector6__f_len12345;
    return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_sci_Vector6.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_prefix2, f);
  var x$3 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_prefix3, f);
  var x$4 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_prefix4, f);
  var x$5 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_prefix5, f);
  var x$6 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(6, this.sci_Vector6__f_data6, f);
  var x$7 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_suffix5, f);
  var x$8 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_suffix4, f);
  var x$9 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_suffix3, f);
  var x$10 = $m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_suffix2, f);
  var x$11 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$12 = this.sci_Vector6__f_len1;
  var x$13 = this.sci_Vector6__f_len12;
  var x$14 = this.sci_Vector6__f_len123;
  var x$15 = this.sci_Vector6__f_len1234;
  var x$16 = this.sci_Vector6__f_len12345;
  var x$17 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector6(x$1, x$12, x$2, x$13, x$3, x$14, x$4, x$15, x$5, x$16, x$6, x$7, x$8, x$9, x$10, x$11, x$17)
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector6.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f)
});
$c_sci_Vector6.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.u[i6].u[i5].u[i4].u[i3].u[i2].u[i1] : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.u[i5].u[i4].u[i3].u[i2].u[i1] : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.u[i4].u[i3].u[i2].u[i1] : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.u[i3].u[i2].u[i1] : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.u[i2].u[i1] : this.sci_BigVector__f_suffix1.u[i1])))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return this.sci_Vector6__f_prefix5.u[((io$2 >>> 20) | 0)].u[(31 & ((io$2 >>> 15) | 0))].u[(31 & ((io$2 >>> 10) | 0))].u[(31 & ((io$2 >>> 5) | 0))].u[(31 & io$2)]
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return this.sci_Vector6__f_prefix4.u[((io$3 >>> 15) | 0)].u[(31 & ((io$3 >>> 10) | 0))].u[(31 & ((io$3 >>> 5) | 0))].u[(31 & io$3)]
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return this.sci_Vector6__f_prefix3.u[((io$4 >>> 10) | 0)].u[(31 & ((io$4 >>> 5) | 0))].u[(31 & io$4)]
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return this.sci_Vector6__f_prefix2.u[((io$5 >>> 5) | 0)].u[(31 & io$5)]
    } else {
      return this.sci_Vector__f_prefix1.u[index]
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
var $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1)
});
$c_scm_StringBuilder.prototype.map__F1__O = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_StringBuilder__f_underlying.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.newSpecificBuilder__scm_Builder = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()))
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = String.fromCharCode(x);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return (this.scm_StringBuilder__f_underlying.length__I() === 0)
});
$c_scm_StringBuilder.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_IndexedSeq$()
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_scm_ListBuffer.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.scm_ListBuffer__f_first.iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scm_ListBuffer__f_mutationCount)))
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = this.scm_ListBuffer__f_first;
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0)
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1
  } else {
    this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
  };
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = xs.iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while (it.hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      last0.sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0)
    };
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0
  };
  return this
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = xs.iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = fresh.scm_ListBuffer__f_first
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = fresh.scm_ListBuffer__f_first
    };
    this.scm_ListBuffer__f_last0 = fresh.scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + fresh.scm_ListBuffer__f_len) | 0)
  };
  return this
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = (v1 | 0);
  var this$1 = this.scm_ListBuffer__f_first;
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ListBuffer$()
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_mutationCount = 0;
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_mutationCount = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
  /*<skip>*/
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_scm_ArrayBuffer.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return this.view__scm_ArrayBufferView().iterator__sc_Iterator()
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_ArrayBuffer__f_size0;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_ArrayBuffer.prototype.knownSize__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.ensureSize__I__V = (function(n) {
  this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
  };
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((((((-1) + hi) | 0) + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
  };
  return this.scm_ArrayBuffer__f_array.u[n]
});
$c_scm_ArrayBuffer.prototype.update__I__O__V = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
  };
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((((((-1) + hi) | 0) + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
  };
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  this.scm_ArrayBuffer__f_array.u[index] = elem
});
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.view__scm_ArrayBufferView = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sjsr_AnonFunction0((() => this.scm_ArrayBuffer__f_mutationCount)))
});
$c_scm_ArrayBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_ArrayBuffer = (function(elem) {
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  var oldSize = this.scm_ArrayBuffer__f_size0;
  this.ensureSize__I__V(((1 + oldSize) | 0));
  this.scm_ArrayBuffer__f_size0 = ((1 + oldSize) | 0);
  this.update__I__O__V(oldSize, elem);
  return this
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_ArrayBuffer = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var x2 = elems;
    var elemsLength = x2.scm_ArrayBuffer__f_size0;
    if ((elemsLength > 0)) {
      this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, elemsLength);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0)
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
  };
  return this
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.scm_ArrayBuffer__f_size0;
  var destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied)
  };
  return copied
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_ArrayBuffer(xs)
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ArrayBuffer(elem)
});
$c_scm_ArrayBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O((v1 | 0))
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
var $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1)
});
$c_sjs_js_WrappedArray.prototype.map__F1__O = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjs_js_WrappedArray.prototype.flatMap__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f)
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0)
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0)
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = (v1 | 0);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sjs_js_WrappedArray$()
});
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
let $e_getData = (function() {
  return $m_Lexample_Example$().getData__Lexample_JsData()
});
export { $e_getData as getData };
let $e_mySimulation = (function() {
  return $m_Lexample_Example$().mySimulation__sjs_js_Array()
});
export { $e_mySimulation as mySimulation };
//# sourceMappingURL=main.js.map
