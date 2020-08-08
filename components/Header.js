import styled from '@emotion/styled';
import { rem } from 'polished';
import { Box } from 'reflexbox';

function Header() {
  return (
    <HeaderStyled>
      <Box variant="container">
        <div className="logo">
          <img src="/images/inventory-logo.png" alt="Logo" />
          <span className="logo-text">Grandpa Inventory</span>
        </div>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};
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
