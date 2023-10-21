export function mergeDefaultClassWithProps(defaultClass, props) {
  if (!props.className) {
    return defaultClass;
  } else {
    return `${defaultClass} ${props.className}`;
  };
};
