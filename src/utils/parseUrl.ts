const parseUrl = (string: string) => {
  string = string.trim().toLowerCase();

  const regArray: any = {
    a: /á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ/g,

    d: /đ/g,

    e: /é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g,

    i: /í|ì|ỉ|ĩ|ị/g,

    o: /ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g,

    u: /ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g,

    y: /ý|ỳ|ỷ|ỹ|ỵ/g,

    A: /Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ/g,

    D: /Đ/g,

    E: /É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ/g,

    I: /Í|Ì|Ỉ|Ĩ|Ị/g,

    O: /Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ/g,

    U: /Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự/g,

    Y: /Ý|Ỳ|Ỷ|Ỹ|Ỵ/g,

    '-': /'|~|%|\(|\)|\s/g,
  };

  for (let regItem of Object.keys(regArray)) {
    const regEx = new RegExp(regArray[regItem]);
    string = string.replaceAll(regEx, regItem);
  }

  string = string.replaceAll(/-{1,}/g, "-")
  string = string.replaceAll(/-$/g, "")

  return string;
};

export default parseUrl;
