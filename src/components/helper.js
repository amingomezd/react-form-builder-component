export function textAreaAdjust(el) {
  const element = el.target
  element.style.height = "1px"
  element.style.height = 25 + element.scrollHeight + "px"
}

export const fromBuilderStub = {
  formStub: {
    title: "Titulo del Formulario",
    description: "Acá puedes describir de que se trata el formulario",
    required: [],
    properties: {
      intro: {
        title: "Titulo de ejemplo",
        description: "Esto es un párrafo. Puedes actualizarme o cambiarme por otros tipos de elementos.",
      },
    },
    ui: {
      intro: {
        widget: "paragraph",
      },
    },
    values: {},
  },
  propertyStub: {
    title: "",
    description: "",
    options: [],
    headerSizes: [],
  },
  uiStub: {
    widget: "input",
    autofocus: false,
    className: "",
  },
  widgets: [
    { input: "Cuadro de Texto" },
    { textarea: "Area de Texto" },
    { select: "Selector de Opciones" },
    { checkbox: "Caja de Verificación" },
    { radio: "Botones Radio" },
    { paragraph: "Párrafo" },
    { header: "Titulo" },
    { hr: "Separador" },
  ],
  headerSizes: ["h1", "h2", "h3", "h4", "h5", "h6"],
  inputClass: "form-control",
  checkboxClass: "form-check-input",
  checkboxWrapperClass: "form-check",
  inputWrapperClass: "form-group",
  btnClass: "btn",
}
