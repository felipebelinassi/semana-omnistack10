const parseStringAsArray = (str: string): Array<string> => (
  str.split(',').map((tech: string) => tech.trim())
);

export default parseStringAsArray;
