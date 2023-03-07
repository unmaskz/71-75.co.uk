const convertPhoneNumber = (number: string): string => {
  return `+44${number.substring(1).replaceAll(' ', '')}`;
};

export default convertPhoneNumber;
