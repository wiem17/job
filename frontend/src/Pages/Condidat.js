import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, FormGroup, Label, FormFeedback } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { upload } from "../Services/CondidatService";
import { useNavigate } from "react-router-dom";

function Condidat({ postId, isOpen, toggle }) {
  const navigate = useNavigate();
  const [titrePoste, setTitrePoste] = useState(""); // Nouvel état pour stocker le titre du poste

  const handleCloseModal = () => {
    toggle(); // Ferme le modal en appelant la fonction de basculement fournie par le parent
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} onHide={handleCloseModal}>
        <ModalHeader toggle={toggle}>Information Form</ModalHeader>
        <Formik
          initialValues={{
            name: "",
            email: "",
            lettre_de_motivation: "",
            file: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            lettre_de_motivation: Yup.string().required("Lettre de motivation is required"),
            file: Yup.mixed().required("CV is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await upload(values.name, values.email, values.lettre_de_motivation, values.file, titrePoste); // Envoyer le titre du poste avec les autres données
              alert("La demande a été envoyée avec succès");
              navigate("/");
              setSubmitting(false);
              handleCloseModal(); // Ferme le modal après la soumission réussie
            } catch (error) {
              alert("La demande n'a pas pu être envoyée");
              console.error(error);
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <FormGroup>
                  <Label>Name</Label>
                  <Input 
                    invalid={errors.name && touched.name}
                    name="name"
                    type="text"
                    value={values.name}
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <FormFeedback>{errors.name}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input 
                    invalid={errors.email && touched.email}
                    name="email"
                    type="text"
                    value={values.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <FormFeedback>{errors.email}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Lettre de motivation</Label>
                  <Input 
                    invalid={errors.lettre_de_motivation && touched.lettre_de_motivation}
                    name="lettre_de_motivation"
                    type="textarea"
                    value={values.lettre_de_motivation}
                    placeholder="Enter lettre de motivation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lettre_de_motivation && touched.lettre_de_motivation && (
                    <FormFeedback>{errors.lettre_de_motivation}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>CV (Obligatoire)</Label>
                  <Input
                    name="file"
                    type="file"
                    onChange={(e) => setFieldValue("file", e.target.files[0])}
                    invalid={errors.file && touched.file}
                  />
                  {errors.file && touched.file && (
                    <FormFeedback>{errors.file}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup> {/* Champ pour saisir le titre du poste */}
                  <Label>Titre du Poste</Label>
                  <Input
                    name="titrePoste"
                    type="text"
                    value={titrePoste}
                    placeholder="Enter titre du poste"
                    onChange={(e) => setTitrePoste(e.target.value)}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit" disabled={isSubmitting}>Envoyez une demande</Button>
                <Button color="secondary" onClick={handleCloseModal}>Annuler</Button>
              </ModalFooter>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default Condidat;
