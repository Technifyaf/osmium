/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import LogoPng from 'assets/images/os_logo.png'

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={LogoPng} sx={{ display: 'flex' }} width ="150"alt="startup landing logo" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
