import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Marquee, SeasonBanner, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SeasonBanner
        title="Summer shoes have dropped"
        text="This year, our new summer collection will get you those likes.
                      What are those?"
        linkText="Shop now"
        linkHref="/search/summer"
        bannerSrc="/hero-crocks.png"
        bannerImgAlt="Women's crocks"
        productUrl='product/womens-crocks'
      />
      <Hero
        className="bg-paletteLightGreen border-b border-t border-accent-2 w-full mb-8"
        headline="Read all about it"
        description="Sign up to our newsletter today to get £10 off your next order"
        linkText="Sign up here"
        linkUrl="/newsletter"
      />
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
