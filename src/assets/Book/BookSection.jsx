import NumberBtn from "./NumberBtn"

function BookSection() {
  return (
    <section className="flex flex-row text-center">
          <NumberBtn children={"-"} size={"size-20"}/>
          <div className="border-3 size-20">0</div>
          <NumberBtn children={"+"} size={"size-20"}/>
    </section>
  )
}

export default BookSection