import api, { route } from "@forge/api";
import ForgeUI, {
  CheckboxGroup,
  Checkbox,
  render,
  Fragment,
  Text,
  Macro,
  useProductContext,
  useState,
  Form,
} from "@forge/ui";

const fetchCommentsForContent = async (contentId) => {
  const res = await api
    .asUser()
    .requestConfluence(
      route`/wiki/rest/api/content/${contentId}/child/comment`
    );

  const data = await res.json();
  return data.results;
};

const App = () => {
  const context = useProductContext();
  const [comments] = useState(
    async () => await fetchCommentsForContent(context.contentId)
  );
  console.log("TEST");
  console.log(`Number of comments on this page: ${comments.length}`);

  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Form>
      <CheckboxGroup label="Products" name="products">
        <Checkbox value="jira" label="Jira" />
        <Checkbox value="confluence" label="Confluence" />
      </CheckboxGroup>
      </Form>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
