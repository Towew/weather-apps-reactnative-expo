import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LineBtmSht = (props) => (
  <Svg
    width={38}
    height={2}
    viewBox="0 0 38 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 1H37"
      stroke="#838BAA"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SunBold = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
      fill="#444E72"
    />
  </Svg>
);

const DropBold = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 13.172L7.04999 8.222L5.63599 9.636L12 16L18.364 9.636L16.95 8.222L12 13.172Z"
      fill="#444E72"
    />
  </Svg>
);

const WindyOpacity = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5 17H4V15H10.5C11.1387 15.0002 11.7653 15.1752 12.3116 15.5061C12.858 15.8369 13.3035 16.311 13.5997 16.8769C13.8959 17.4428 14.0316 18.079 13.992 18.7165C13.9525 19.3541 13.7393 19.9686 13.3755 20.4936C13.0116 21.0186 12.5111 21.434 11.928 21.6949C11.3449 21.9557 10.7016 22.052 10.0677 21.9734C9.43383 21.8947 8.83356 21.6441 8.33194 21.2486C7.83032 20.8532 7.44647 20.328 7.222 19.73L9.095 19.027C9.19118 19.2833 9.35566 19.5084 9.57063 19.6779C9.78559 19.8474 10.0428 19.9548 10.3145 19.9886C10.5862 20.0223 10.8619 19.9811 11.1118 19.8693C11.3617 19.7575 11.5762 19.5795 11.7322 19.3545C11.8881 19.1295 11.9795 18.8661 11.9965 18.5929C12.0135 18.3197 11.9553 18.047 11.8284 17.8045C11.7015 17.5619 11.5106 17.3588 11.2764 17.2169C11.0423 17.0751 10.7738 17.0001 10.5 17ZM5 11H18.5C19.1387 11.0002 19.7653 11.1752 20.3116 11.5061C20.858 11.8369 21.3035 12.311 21.5997 12.8769C21.8959 13.4428 22.0316 14.079 21.992 14.7165C21.9525 15.3541 21.7393 15.9686 21.3755 16.4936C21.0116 17.0186 20.5111 17.434 19.928 17.6949C19.3449 17.9557 18.7016 18.052 18.0677 17.9734C17.4338 17.8947 16.8336 17.6441 16.3319 17.2486C15.8303 16.8532 15.4465 16.328 15.222 15.73L17.095 15.027C17.1912 15.2833 17.3557 15.5084 17.5706 15.6779C17.7856 15.8474 18.0428 15.9548 18.3145 15.9886C18.5862 16.0223 18.8619 15.981 19.1118 15.8693C19.3617 15.7575 19.5762 15.5795 19.7322 15.3545C19.8881 15.1295 19.9795 14.8661 19.9965 14.5929C20.0135 14.3197 19.9553 14.047 19.8284 13.8045C19.7015 13.5619 19.5106 13.3588 19.2764 13.2169C19.0423 13.0751 18.7738 13.0001 18.5 13H5C4.20435 13 3.44129 12.6839 2.87868 12.1213C2.31607 11.5587 2 10.7956 2 10C2 9.20435 2.31607 8.44128 2.87868 7.87867C3.44129 7.31607 4.20435 7 5 7H13.5C13.7738 6.99988 14.0423 6.92485 14.2764 6.78304C14.5106 6.64123 14.7015 6.43805 14.8284 6.1955C14.9553 5.95296 15.0135 5.6803 14.9965 5.40708C14.9795 5.13385 14.8881 4.87047 14.7322 4.64549C14.5762 4.4205 14.3617 4.24247 14.1118 4.13071C13.8619 4.01894 13.5862 3.97769 13.3145 4.01143C13.0428 4.04517 12.7856 4.15261 12.5706 4.3221C12.3557 4.4916 12.1912 4.7167 12.095 4.973L10.222 4.271C10.5105 3.5038 11.059 2.86214 11.7719 2.45781C12.4849 2.05347 13.3171 1.91211 14.1236 2.05834C14.9301 2.20458 15.6597 2.62914 16.1853 3.25805C16.711 3.88696 16.9993 4.68036 17 5.5C17 6.42825 16.6313 7.31849 15.9749 7.97487C15.3185 8.63125 14.4283 9 13.5 9H5C4.73478 9 4.48043 9.10535 4.29289 9.29289C4.10536 9.48042 4 9.73478 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11Z"
      fill="#838BAA"
    />
  </Svg>
);

const RainOpacity = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.9999 18V16H16.9999C17.621 15.9997 18.2335 15.8547 18.7889 15.5766C19.3442 15.2984 19.8272 14.8948 20.1995 14.3976C20.5718 13.9005 20.8232 13.3234 20.9338 12.7123C21.0444 12.1011 21.0111 11.4725 20.8367 10.8764C20.6622 10.2803 20.3513 9.73306 19.9286 9.27795C19.506 8.82284 18.9831 8.47242 18.4015 8.25444C17.8199 8.03645 17.1956 7.95691 16.5779 8.02209C15.9602 8.08728 15.3662 8.29541 14.8429 8.63C14.5949 7.57362 14.0651 6.60426 13.3099 5.82513C12.5546 5.046 11.6022 4.48627 10.5541 4.20552C9.50592 3.92478 8.40126 3.93353 7.35769 4.23085C6.31412 4.52817 5.37071 5.10293 4.62791 5.89392C3.8851 6.68492 3.37071 7.66256 3.1395 8.72273C2.90828 9.78291 2.9689 10.8859 3.3149 11.9144C3.6609 12.9429 4.27932 13.8582 5.10433 14.5631C5.92934 15.2679 6.93005 15.7358 7.99991 15.917V17.939C5.98102 17.6841 4.1351 16.6696 2.83779 15.1018C1.54048 13.5341 0.88927 11.5309 1.01669 9.50001C1.14411 7.46909 2.04058 5.56303 3.52366 4.16971C5.00675 2.7764 6.965 2.00053 8.99991 2C10.4216 1.99939 11.8178 2.37774 13.0446 3.0961C14.2715 3.81447 15.2847 4.84687 15.9799 6.087C16.7988 5.94602 17.638 5.97665 18.4444 6.17696C19.2508 6.37727 20.0068 6.74289 20.6645 7.25065C21.3222 7.75842 21.8673 8.39726 22.2652 9.1267C22.6631 9.85613 22.9052 10.6603 22.9761 11.4881C23.047 12.316 22.9451 13.1496 22.677 13.9361C22.4089 14.7225 21.9804 15.4447 21.4185 16.0569C20.8567 16.6691 20.1739 17.1579 19.4132 17.4924C18.6526 17.8269 17.8308 17.9997 16.9999 18H15.9999ZM10.2319 18.732L11.9999 16.964L13.7679 18.732C14.1175 19.0817 14.3555 19.5271 14.4519 20.0121C14.5483 20.497 14.4988 20.9996 14.3096 21.4564C14.1203 21.9132 13.7999 22.3036 13.3888 22.5783C12.9777 22.8529 12.4943 22.9995 11.9999 22.9995C11.5055 22.9995 11.0222 22.8529 10.6111 22.5783C10.1999 22.3036 9.87952 21.9132 9.69028 21.4564C9.50104 20.9996 9.45149 20.497 9.5479 20.0121C9.64431 19.5271 9.88235 19.0817 10.2319 18.732Z"
      fill="#838BAA"
    />
  </Svg>
);

const BackBold = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.828 6.99998H16V8.99998H3.828L9.192 14.364L7.778 15.778L0 7.99998L7.778 0.221985L9.192 1.63598L3.828 6.99998Z"
      fill="#444E72"
    />
  </Svg>
);

const MicIconBold = (props) => (
  <Svg
    width={18}
    height={22}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.99993 0C9.65654 0 10.3067 0.129329 10.9133 0.380602C11.52 0.631876 12.0712 1.00017 12.5355 1.46447C12.9998 1.92876 13.3681 2.47995 13.6193 3.08658C13.8706 3.69321 13.9999 4.34339 13.9999 5V9C13.9999 10.3261 13.4731 11.5979 12.5355 12.5355C11.5978 13.4732 10.326 14 8.99993 14C7.67385 14 6.40208 13.4732 5.4644 12.5355C4.52672 11.5979 3.99993 10.3261 3.99993 9V5C3.99993 3.67392 4.52672 2.40215 5.4644 1.46447C6.40208 0.526784 7.67385 0 8.99993 0ZM0.0549316 10H2.06993C2.31222 11.6648 3.1458 13.1867 4.41816 14.2873C5.69053 15.3879 7.31661 15.9936 8.99893 15.9936C10.6813 15.9936 12.3073 15.3879 13.5797 14.2873C14.8521 13.1867 15.6856 11.6648 15.9279 10H17.9439C17.7166 12.0287 16.8066 13.9199 15.3631 15.3635C13.9197 16.8071 12.0286 17.7174 9.99993 17.945V22H7.99993V17.945C5.97107 17.7176 4.07972 16.8074 2.63611 15.3638C1.1925 13.9202 0.282344 12.0289 0.0549316 10Z"
      fill="#444E72"
    />
  </Svg>
);

const RecentIcon = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z"
      fill="#444E72"
    />
  </Svg>
);

const RedLoc = (props) => (
  <Svg
    width={18}
    height={22}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.364 15.364L9 21.728L2.636 15.364C1.37734 14.1053 0.520187 12.5017 0.172928 10.7559C-0.17433 9.01004 0.00390685 7.20044 0.685099 5.55591C1.36629 3.91139 2.51984 2.50579 3.99988 1.51686C5.47992 0.52793 7.21998 9.15527e-05 9 9.15527e-05C10.78 9.15527e-05 12.5201 0.52793 14.0001 1.51686C15.4802 2.50579 16.6337 3.91139 17.3149 5.55591C17.9961 7.20044 18.1743 9.01004 17.8271 10.7559C17.4798 12.5017 16.6227 14.1053 15.364 15.364ZM9 13C10.0609 13 11.0783 12.5786 11.8284 11.8284C12.5786 11.0783 13 10.0609 13 9.00001C13 7.93915 12.5786 6.92173 11.8284 6.17159C11.0783 5.42144 10.0609 5.00001 9 5.00001C7.93914 5.00001 6.92172 5.42144 6.17158 6.17159C5.42143 6.92173 5 7.93915 5 9.00001C5 10.0609 5.42143 11.0783 6.17158 11.8284C6.92172 12.5786 7.93914 13 9 13ZM9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21072 10.0392 7 9.53045 7 9.00001C7 8.46958 7.21072 7.96087 7.58579 7.5858C7.96086 7.21073 8.46957 7.00001 9 7.00001C9.53044 7.00001 10.0391 7.21073 10.4142 7.5858C10.7893 7.96087 11 8.46958 11 9.00001C11 9.53045 10.7893 10.0392 10.4142 10.4142C10.0391 10.7893 9.53044 11 9 11Z"
      fill="#DA3A3A"
    />
  </Svg>
);

const GPSicon = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 0L12.001 3.062C13.7632 3.28479 15.4013 4.08743 16.6572 5.34351C17.9131 6.5996 18.7155 8.23775 18.938 10H22V12L18.938 12.001C18.7153 13.7631 17.9128 15.401 16.6569 16.6569C15.401 17.9128 13.7631 18.7153 12.001 18.938L12 22H10V18.938C8.23775 18.7155 6.5996 17.9131 5.34351 16.6572C4.08743 15.4013 3.28479 13.7632 3.062 12.001L0 12V10H3.062C3.28459 8.23761 4.08713 6.59934 5.34324 5.34324C6.59934 4.08713 8.23761 3.28459 10 3.062V0H12ZM11 5C9.4087 5 7.88258 5.63214 6.75736 6.75736C5.63214 7.88258 5 9.4087 5 11C5 12.5913 5.63214 14.1174 6.75736 15.2426C7.88258 16.3679 9.4087 17 11 17C12.5913 17 14.1174 16.3679 15.2426 15.2426C16.3679 14.1174 17 12.5913 17 11C17 9.4087 16.3679 7.88258 15.2426 6.75736C14.1174 5.63214 12.5913 5 11 5ZM11 9C11.5304 9 12.0391 9.21071 12.4142 9.58579C12.7893 9.96086 13 10.4696 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13C10.4696 13 9.96086 12.7893 9.58579 12.4142C9.21071 12.0391 9 11.5304 9 11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9Z"
      fill="#444E72"
    />
  </Svg>
);

export {
  LineBtmSht,
  SunBold,
  DropBold,
  WindyOpacity,
  RainOpacity,
  BackBold,
  MicIconBold,
  RecentIcon,
  RedLoc,
  GPSicon,
};
