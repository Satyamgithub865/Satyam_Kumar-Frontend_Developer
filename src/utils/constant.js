export const addEllipsis = (str) => {
  if (str)
    return (str.length > 70 ? str.substr(0, 70) + '...' : str);
}

const startYear = 2000;
const endYear = 2023;
export const yearArray = [];

for (let year = startYear; year <= endYear; year++) {
  yearArray.push(year);
}

export const Logo = 'https://wordpress.org/five-for-the-future/files/2019/09/bsf-logo-.png';

export const imageUrl1 = 'https://webstockreview.net/images/clipart-rocket-boy-15.png';

export const imageUrl2 = 'https://th.bing.com/th/id/OIP.B_vvcd_MTKBmpPkog51_YAAAAA?pid=ImgDet&w=452&h=452&rs=1';

export const bgImg = 'https://hdwallpaperim.com/wp-content/uploads/2017/08/22/448612-Earth-space.jpg'
