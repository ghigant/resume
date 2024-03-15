import {
  PDFViewer,
  Font
} from '@react-pdf/renderer';
 import {
  Document
} from "./components/Document";

Font.register({ family: 'FiraSans', src: '/fonts/FiraSans-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'FiraSans', src: '/fonts/FiraSans-Black.ttf', fontStyle: 'normal', fontWeight: 'black' });
Font.register({ family: 'FiraSans', src: '/fonts/FiraSans-SemiBold.ttf', fontStyle: 'normal', fontWeight: 'semibold' });

function App() {
  return (
    <PDFViewer style={{ width: "100%" }}>
      <Document />
    </PDFViewer>
  );
}

export default App;
