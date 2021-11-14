 // Import required components from the UI kit
 import ForgeUI, { render, Form, Fragment, SpaceSettings, TextArea } from "@forge/ui";
 import { useSpaceProperty } from "@forge/ui-confluence";

 const App = () => {
   const [news, setNews] = useSpaceProperty("space-news", "No news currently.");

   return (
     <Fragment>
       <Form onSubmit={async (formData) => {
         await setNews(formData.news)
       }}>
         <TextArea name="news" label="News" defaultValue={news}/>
       </Form>
     </Fragment>
   );
 };

 export const run = render(
   <SpaceSettings>
     <App />
   </SpaceSettings>
 );