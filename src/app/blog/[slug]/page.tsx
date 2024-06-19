import React from 'react'
import { DetailHero, BackBlog, GotoMedium } from '@/components'

export default function page() {
  return (
    <>
      <DetailHero />
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper mauris tortor, nec ornare magna
            imperdiet at. Curabitur placerat ultricies vehicula. Mauris iaculis ex sed iaculis dignissim. Aliquam erat
            volutpat. Vestibulum aliquam eros sit amet erat bibendum tristique. Cras consequat nulla vitae dolor
            malesuada, hendrerit mollis mi lacinia. Vivamus non justo vitae magna tincidunt elementum vitae vel turpis.
            Vivamus dignissim ipsum quis facilisis sollicitudin. Aliquam malesuada lacus at blandit rhoncus. Praesent
            lobortis nec odio sit amet aliquet. Phasellus eget diam eros. Maecenas ipsum nisi, convallis sit amet elit
            eu, vestibulum gravida sem. Nullam sed sodales justo. Integer varius tristique diam, ut rutrum velit luctus
            et. Pellentesque dapibus ullamcorper nibh, nec ornare justo tristique at. Vivamus dui odio, egestas ut
            consectetur non, fringilla non ante. Duis id auctor neque, vel imperdiet eros. Fusce ac erat id magna
            sodales malesuada. Maecenas non diam et massa iaculis venenatis. Vestibulum bibendum sem ac accumsan
            gravida. Vestibulum fermentum erat velit, consectetur mattis turpis sodales sit amet. Ut vestibulum enim
            risus, at imperdiet lacus ultrices ultrices. Ut est justo, mattis a interdum vitae, tempus eu massa.
            Suspendisse auctor tortor elit, quis consectetur nisi mollis a. Aliquam erat volutpat. Phasellus eget elit
            erat. Mauris non dui odio. Nullam vel sodales orci. Fusce vel urna mattis, euismod mi vel, aliquet sem.
            Vestibulum vitae bibendum tortor. Proin semper ex eros, at sollicitudin tellus mollis vitae. Praesent sit
            amet elementum nisl, vel ornare dolor. Ut velit ex, egestas ut erat a, ultrices pharetra mi. Phasellus vel
            rutrum enim, consectetur laoreet orci. Praesent ac nibh sit amet eros lobortis accumsan. Mauris eget est eu
            lorem commodo interdum. Suspendisse aliquet maximus augue eget consectetur. Maecenas egestas malesuada elit
            sodales ornare. Curabitur semper, nibh sed suscipit interdum, libero neque luctus odio, id tempus ex est
            vitae neque. Sed at tortor nec odio tincidunt facilisis id ac justo. Maecenas pharetra porta justo et
            elementum. Sed in lacinia orci. Praesent eu erat nec diam convallis pharetra lobortis id magna. Nulla massa
            lectus, rhoncus vel mi et, vulputate mollis tellus. Suspendisse et accumsan justo. Pellentesque dolor nisl,
            egestas eget dolor sed, cursus dictum est. Curabitur a diam non erat efficitur rhoncus vel quis mauris.
            Suspendisse potenti. Donec euismod nisi id pharetra egestas. Nullam lacus libero, rhoncus porta facilisis
            eu, auctor id est. Proin viverra bibendum ante, quis ultricies nisi feugiat sed. Nunc laoreet libero mollis,
            posuere sapien vitae, rutrum leo. In egestas lectus est, sed efficitur diam accumsan ac. Aenean congue
            sagittis arcu eget vulputate. Etiam ligula elit, tristique ac semper quis, accumsan non quam. Nullam id
            sagittis nisl. Curabitur lacinia justo eros, eu sagittis quam egestas in. Fusce accumsan consectetur
            sodales. Fusce interdum ante mi, id lobortis odio suscipit a. Quisque pellentesque magna eros, ac mattis
            erat varius ac.
          </p>
        </div>
        <BackBlog />
      </section>
      <GotoMedium />
    </>
  )
}
