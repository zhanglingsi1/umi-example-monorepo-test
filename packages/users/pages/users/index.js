import Link from 'umi/link';
import { connect } from 'dva';
import { formatMessage } from "umi/locale";
import styles from './index.css';

export default connect(state => ({
  users: state.users,
}))(function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <li><Link to="/">go to /</Link></li>
      <h2>{formatMessage({ id: "PAGE_USER" })}</h2>
      <ul>
        {
          props.users.data.map((value, i) => {
            return (
              <li key={i}>{value}</li>
            );
          })
        }
      </ul>
    </div>
  );
});
