import React from "react"
import s from "./View.scss"
import Heading from "components/heading/Heading";

const View = ({ title, children }) => (
  <section className={s.view}>
    <Heading>{title}</Heading>
    {children}
  </section>
)

export default View;