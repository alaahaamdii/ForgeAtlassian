 // Import required components from the UI kit
 import ForgeUI, { render, Text, InlineDialog, ContentBylineItem } from "@forge/ui";
 import { useSpaceProperty } from "@forge/ui-confluence";

 const App = () => {
   const [news] = useSpaceProperty("space-news", "No news currently.");

   return (
     <InlineDialog>
       <Text>{news}</Text>
     </InlineDialog>
   );
 };

 export const run = render(
   <ContentBylineItem>
     <App />
   </ContentBylineItem>
 );