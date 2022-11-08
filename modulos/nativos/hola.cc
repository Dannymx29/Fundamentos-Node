// hello.cc
#include <node.h>//libreria para trabajar con node

namespace demo { //crea un namespace

using v8::FunctionCallbackInfo;//funciones necesarias para funcionar
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;//funciones necesarias para funcionar

void Method(const FunctionCallbackInfo<Value>& args) {//primer meto
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "mundo", NewStringType::kNormal).ToLocalChecked());//entre "" lo que va devolver
}

void Initialize(Local<Object> exports) {//modulo que vamos a exportar
  NODE_SET_METHOD(exports, "hola", Method); //exportamos el metodo que esta arriba
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)//setea el modulo y lo inicializa 

}  // namespace demo cierra