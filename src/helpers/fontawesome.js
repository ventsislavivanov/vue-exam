import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// ADD NEW ICONS in import and library.add

import {
  faUser,
  faLock,
  faEnvelope,
  faHeart,
  faEye,
  faUnlock,
  faUnlockKeyhole,
  faIdCard,
  faCalendar,
  faPhoneVolume,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  faUser,
  faLock,
  faEnvelope,
  faHeart,
  faEye,
  faUnlock,
  faUnlockKeyhole,
  faIdCard,
  faCalendar,
  faPhoneVolume,
  faLocationPin,
);

export default FontAwesomeIcon;