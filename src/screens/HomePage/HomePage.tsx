import { Button, Input, Picture } from "../../components"
import { Layout } from "../../layout"
import { StyledHeader, StyledTable } from "./HomePage.styles"

import imgAvatar from "../../assets/img-avatar.jpg"
import imgTrash from "../../assets/icon-trash.jpg"
import imgPreview from "../../assets/icon-preview.jpg"
import imgEdit from "../../assets/icon-edit.jpg"

export const HomePage = () => {
  return (
    <Layout>
      <section>

        <StyledHeader>
          <Input type="text" placeholder="Id a buscar" />
          <Button variant="primary" name="Crear usuario" />
        </StyledHeader>
  
        <StyledTable>
          {/* header table */}
          <thead>
            <tr>
              <th><p><strong>id</strong></p></th>
              <th><p><strong>Nombres y apellidos</strong></p></th>
              <th><p><strong>Foto</strong></p></th>
              <th><p><strong>Acciones</strong></p></th>
            </tr>
          </thead>
          {/* End header table */}
          {/* table content */}
          <tbody>
            <tr>
              <td><p><strong>9834567932846529</strong></p></td>
              <td><p>Sra. Sara Andersen</p></td>
              <td>
                <Picture
                  alt="Sra. Sara Andersen"
                  title="Sra. Sara Andersen"
                  src={imgAvatar}
                  size="avatar"
                  variant="avatar"
                />
              </td>
              <td>
                <div className="actions">
                  <Picture
                    src={imgTrash}
                    size="small"
                    variant="normal"
                  />
                  <Picture
                    src={imgEdit}
                    size="small"
                    variant="normal"
                  />
                  <Picture
                    src={imgPreview}
                    size="small"
                    variant="normal"
                  />
                </div>
              </td>
            </tr>
          </tbody>
          {/* Endtable content */}
        </StyledTable>

      </section>
    </Layout>
  )
}
