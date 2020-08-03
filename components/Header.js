import styled from '@emotion/styled';
import { rem } from 'polished';

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo">
          <img src="/images/inventory-logo.png" alt="Logo" />
          <span className="logo-text">Grandpa Inventory</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) => {
    console.log(props.theme);
    return props.theme.colors.azul;
  }};
  padding: 20px;
  .logo {
    display: flex;
    align-items: center;
    .logo-text {
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
