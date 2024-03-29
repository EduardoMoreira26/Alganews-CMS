import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import SessionController from "../../components/SessionController";
import * as DL from "./Default.layout.styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
};

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>
          {props.children}
        </DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name="Eduardo Moreira"
            description="Editor há mais de 10 anos"
            onLogout={() => {
              confirm({
                title: "Você tem certeza?",
                onConfirm: () => {
                  info({
                    title: "Saindo...",
                    description: "Você será redirecionado para a página principal"
                  })
                },
                onCancel: () => console.log("Cancel"),
              })
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;