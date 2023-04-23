import { DownloadSimple, UploadSimple } from "@phosphor-icons/react";
import { FooterComponent } from "./styles";

export function FooterElement() {
  return (
    <FooterComponent>
    <button type='button' title='Download de CSV' className="download">
      Download CSV
      <DownloadSimple size={24} />
    </button>

    <button type='button' title='Upload de CSV' className="upload">
      Upload CSV
      <UploadSimple size={24} />  
    </button>
  </FooterComponent>
  )
}