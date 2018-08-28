import { Message } from 'element-ui';
import VueClipboards from 'vue-clipboards';

export default ({ Vue }) => {
  Vue.prototype.$message = Message;
  Vue.use(VueClipboards);
};
