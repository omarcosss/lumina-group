import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { Section } from './components/Section/Section';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Carousel } from './components/Carousel/Carousel';
import Beams from './components/Beams';
import heroImg from './assets/hero-icons.svg';
import './App.css';
import { CaretRightIcon, LeafIcon, TreeIcon, ShareNetworkIcon, ChartLineUpIcon, KeyIcon, LockIcon, StarIcon, MedalIcon, PlantIcon, CheckCircleIcon, PhoneIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import CountUp from './components/CountUp/CountUp';
import Magnet from './components/Magnet/Magnet';
import CircularText from './components/CircularText/CircularText';

function App() {

  const carouselItems = [
    {
      image: '/carousel-1.png',
      title: 'Casa Verde, São Paulo',
      description: 'Residência unifamiliar de 850m² com certificação LEED Platinum.  Integração total com mata nativa, energia solar e sistema de  reuso de água.',
    },
    {
      image: '/carousel-2.png',
      title: 'Família M., Governança Familiar',
      description: 'Estruturação de holding familiar para 3ª geração, com planejamento sucessório e diversificação em investimentos alternativos.',
    },
    {
      image: '/carousel-1.png',
      title: 'Casa Verde, São Paulo',
      description: 'Residência unifamiliar de 850m² com certificação LEED Platinum.  Integração total com mata nativa, energia solar e sistema de  reuso de água.',
    },
    {
      image: '/carousel-2.png',
      title: 'Família M., Governança Familiar',
      description: 'Estruturação de holding familiar para 3ª geração, com planejamento sucessório e diversificação em investimentos alternativos.',
    },
  ];

  const navItems = [
    {
      label: "Início",
    },
    {
      label: 'Sobre',
      children: [
        { label: 'Nossa História', href: '#nossa-historia' },
        { label: 'Filosofia', href: '#filosofia' },
        { label: 'Liderança', href: '#lideranca' },
        { label: 'Números', href: '#numeros' },
      ],
    },
    {
      label: 'Serviços',
      children: [
        { label: 'Consultoria de Patrimônio', href: '#consultoria-patrimonio' },
        { label: 'Arquitetura Sustentável', href: '#arquitetura-sustentavel' },
        { label: 'Soluções Integradas', href: '#solucoes-integradas' },
      ],
    },
    {
      label: 'Portfólio',
      children: [
        { label: 'Projetos', href: '#projetos' },
        { label: 'Cases de Sucesso', href: '#cases-sucesso' },
      ],
    },
    {
      label: 'Sustentabilidade',
      children: [
        { label: 'Compromisso', href: '#compromisso' },
        { label: 'Certificações', href: '#certificacoes' },
        { label: 'Impacto', href: '#impacto' },
      ],
    },
    {
      label: 'Insights',
      children: [
        { label: 'Artigos', href: '#artigos' },
        { label: 'Publicações', href: '#publicacoes' },
        { label: 'Mídia', href: '#midia' },
      ],
    },
    {
      label: 'Contato',
      children: [
        { label: 'Fale Conosco', href: '#fale-conosco' },
        { label: 'Escritórios', href: '#escritorios' },
        { label: 'Área VIP', href: '#area-vip' },
      ],
    },
  ];

  const footerColumns = [
    {
      title: 'Sobre',
      links: [
        { label: 'Nossa História', href: '#nossa-historia' },
        { label: 'Filosofia', href: '#filosofia' },
        { label: 'Liderança', href: '#lideranca' },
        { label: 'Carreiras', href: '#carreiras' },
      ],
    },
    {
      title: 'Conteúdo',
      links: [
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Cases de Sucesso', href: '#cases-sucesso' },
        { label: 'Artigos e Insights', href: '#artigos-insights' },
        { label: 'Sustentabilidade', href: '#sustentabilidade' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Consultoria de Patrimônio', href: '#consultoria-patrimonio' },
        { label: 'Arquitetura Sustentável', href: '#arquitetura-sustentavel' },
        { label: 'Soluções Integradas', href: '#solucoes-integradas' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: 'Fale Conosco', href: '#fale-conosco' },
        { label: 'Escritórios', href: '#escritorios' },
        { label: 'Área do Cliente', href: '#area-cliente' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
  ];

  const handleLogin = () => {
    alert('Login clicked! Integrate your Auth provider here.');
  };

  return (
    <>
      {/* Header */}
      <Header logoText="LUMINA" navItems={navItems} onLoginClick={handleLogin} />

      {/* Hero Section */}
      <Section variant="accent" spacing="lg" id="hero" className='pt-41.5! pb-36! -mt-18 rounded-b-4xl'>
        <div className='absolute top-0 left-0 w-dvw h-full z-0'>
          <Beams
              beamWidth={4}
              beamHeight={30}
              beamNumber={20}
              lightColor="#b2d7b8"
              speed={1.2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={30}
            />
        </div>
        <div className='absolute top-0 left-0 w-dvw h-full z-0 bg-[#252525]/20' />
        <div className="hero-split">
          <div className="hero-content z-1">
            <img src={heroImg} />
            <h1 className='text-7xl text-white font-bold text-center'>Transformamos patrimônio em legado sustentável</h1>
            <p className='text-center text-white/70'>Consultoria de alto padrão que une precisão financeira <br /> e arquitetura consciente para quem exige excelência sem comprometer o futuro.</p>
            <div className='flex gap-2'>
              <Magnet padding={20} magnetStrength={8}>
                <Button size='lg'>Agendar Consultoria Exclusiva</Button>
              </Magnet>
              <Button size='lg' variant='tertiary' className='text-white/70!'>Conhecer nossos projetos</Button>
            </div>
          </div>
        </div>
      </Section>


      {/* Cards & Grid Section */}
      <Section variant="muted" spacing="lg">
        <Card className="px-4 py-14 gap-11">
          <div className='flex flex-col gap-10 max-w-2xl items-center'>
            
            <h2>Precisão suíça. Alma orgânica.</h2>
            <p>
              Na Lumina Group, acreditamos que verdadeira riqueza vai além dos números. É sobre criar valor que perdura, gerar impacto positivo e construir legados que transcendem gerações.
              <br/>
              <br/>
              Combinamos a rigidez analítica da gestão patrimonial de elite com a sensibilidade da arquitetura sustentável de luxo. O resultado? Soluções que protegem seu patrimônio enquanto preservam o que realmente importa.
            </p>
            <Button variant="primary" size="md" onClick={() => alert('Glass details')}>
              Nossa Filosofia <CaretRightIcon size={20} />
            </Button>
          </div>
        </Card>
      </Section>

      <Section>
        <div className='flex flex-col gap-12'>
          <h2>Excelência em duas dimensões</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Card className='p-12 h-128 overflow-hidden'>
              <TreeIcon weight="duotone" size={480} className='absolute opacity-10 right-0 translate-x-1/2' />
              <div className='flex flex-col justify-between text-left h-full'>
                <h2>Consultoria de <br/>Patrimônio</h2>
                <p>Gestão sofisticada de wealth para famílias e indivíduos que exigem mais do que retorno financeiro. Estruturamos seu patrimônio com visão de longo prazo, governança familiar e investimentos alternativos exclusivos.</p>
                <ul className='list-disc list-inside'>
                  <li>Family Office</li>
                  <li>Planejamento Sucessório</li>
                  <li>Investimentos Alternativos</li>
                  <li>Real Estate de Luxo</li>
                </ul>
                <Button variant='secondary' size='md'>Explorar Soluções Financeiras <CaretRightIcon size={20} /></Button>
              </div>
            </Card>
            <Card className='p-12 h-128 overflow-hidden'>
              <LeafIcon weight="duotone" size={480} className='absolute opacity-10 right-0 translate-x-1/2 -rotate-45' />
              <div className='flex flex-col justify-between text-left h-full'>
                <h2>Arquitetura <br/>Sustentável</h2>
                <p>Projetos residenciais e comerciais que harmonizam luxo, funcionalidade e responsabilidade ambiental. Criamos espaços que respiram, consomem menos e elevam sua qualidade de vida sem abrir mão da sofisticação.</p>
                <ul className='list-disc list-inside'>
                  <li>Residências de Alto Padrão</li>
                    <li>Certificações LEED/WELL</li>
                    <li>Eficiência Energética</li>
                    <li>Integração com Natureza</li>
                </ul>
                <Button variant='secondary' size='md'>Ver Projetos Arquitetônicos <CaretRightIcon size={20} /></Button>
              </div>
            </Card>
            
          </div>
        </div>
      </Section>

      <Section variant='muted' className='relative' spacing='lg'>
        <CircularText
          text="LUMINA*GROUP*"
          onHover="speedUp"
          spinDuration={20}
          className="absolute text-accent left-40 top-10"
        />
        <div className='flex flex-col items-end py-10 gap-12'>
          <h2>Resultados que falam por si</h2>
          <div className='grid grid-cols-3 gap-6 flex-1 w-full'>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'>R$ <CountUp from={0} to={2.4} separator=',' decimalSeparator=',' duration={1} delay={0} /></span> <span className='text-secondary'>Bilhões</span></h2>
                <p className='mt-3'>em patrimônio sob consultoria</p>
              </div>
            </Card>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'><CountUp from={0} to={47} duration={1} delay={0} /></span> <span className='text-secondary'>Projetos</span></h2>
                <p className='mt-3'>arquitetônicos entregues</p>
              </div>
            </Card>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'><CountUp from={0} to={15} duration={1} delay={0} /></span> <span className='text-secondary'>Anos</span></h2>
                <p className='mt-3'>de excelência e confiança</p>
              </div>
            </Card>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'><CountUp from={0} to={98} duration={1} delay={0} /></span><span className='text-secondary'>%</span></h2>
                <p className='mt-3'>de clientes recomendam</p>
              </div>
            </Card>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'><CountUp from={0} to={12500} separator='.' duration={1} delay={0} /></span> <span className='text-secondary'>t</span></h2>
                <p className='mt-3'>de CO₂ evitados com nossos projetos</p>
              </div>
            </Card>
            <Card className='px-8 py-12 w-full'>
              <div>
                <h2><span className='text-accent'><CountUp from={0} to={3} duration={1} delay={0} /></span> <span className='text-secondary'>Certificações</span></h2>
                <p className='mt-3'>LEED Platinum, WELL Gold, AQUA</p>
              </div>
            </Card>
            
          </div>
        </div>
      </Section>


      <Section spacing="lg" container={false} className="overflow-hidden!">
        <div className="lumina-section__container flex justify-between items-center mb-12!">
          <h2>Transformações que inspiram</h2>
          <Button variant="secondary" size="md">
            Ver todos os projetos <CaretRightIcon size={20} />
          </Button>
        </div>
        <Carousel items={carouselItems} />
      </Section>
      
      <Section spacing="lg" variant="muted">
        <div className='flex flex-col items-end gap-12'>
          <h2>O que nos torna únicos</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Card>
              <div className="flex items-center gap-6 px-8 py-12">
                <div className='text-secondary'>
                  <ShareNetworkIcon size={96} weight="duotone" />
                </div>
                <div className="flex flex-col justify-start text-start gap-3">
                  <h3 className='text-2xl text-text-h font-extrabold'>Visão 360°</h3>
                  <p>Unimos expertise financeira e arquitetônica em uma única consultoria. Você não precisa de múltiplos especialistas.</p>
                </div>
              </div>
            </Card>
  
            <Card>
              <div className="flex items-center gap-6 px-8 py-12">
                <div className='text-secondary'>
                  <ChartLineUpIcon size={96} weight="duotone" />
                </div>
                <div className="flex flex-col justify-start text-start gap-3">
                  <h3 className='text-2xl text-text-h font-extrabold'>Impacto Mensurável</h3>
                  <p>Não falamos em sustentabilidade. Nós a entregamos com métricas claras, certificações internacionais e resultados comprovados.</p>
                </div>
              </div>
            </Card>
  
            <Card>
              <div className="flex items-center gap-6 px-8 py-12">
                <div className='text-secondary'>
                  <KeyIcon size={96} weight="duotone" />
                </div>
                <div className="flex flex-col justify-start text-start gap-3">
                  <h3 className='text-2xl text-text-h font-extrabold'>Acesso Privilegiado</h3>
                  <p>Oportunidades de investimento off-market, parcerias com arquitetos premiados e network de alto nível.</p>
                </div>
              </div>
            </Card>
  
            <Card>
              <div className="flex items-center gap-6 px-8 py-12">
                <div className='text-secondary'>
                  <LockIcon size={96} weight="duotone" />
                </div>
                <div className="flex flex-col justify-start text-start gap-3">
                  <h3 className='text-2xl text-text-h font-extrabold'>Sigilo Absoluto</h3>
                  <p>Seu patrimônio e seus projetos são tratados com o mais alto nível de discrição e segurança da informação.</p>
                </div>
              </div>
            </Card>
      
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <h2 className="mb-12 text-center">O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 flex flex-col gap-6">
            <p className="italic text-text-p flex-1">"A Lumina entendeu que eu não queria apenas multiplicar meu patrimônio, mas deixá-lo significativo para meus filhos e netos. A visão de longo prazo e o compromisso com sustentabilidade foram decisivos."</p>
            <div className="flex items-center gap-4">
              <img src="/ricardo.png" alt="Ricardo M." className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-text-h">Ricardo M.</h4>
                <p className="text-sm text-text-p">Empresário, Cliente desde 2018</p>
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col gap-6">
            <p className="italic text-text-p flex-1">"Minha casa é meu maior investimento e meu maior orgulho. A Lumina conseguiu unir conforto, luxo e responsabilidade ambiental de uma forma que eu nem imaginava ser possível."</p>
            <div className="flex items-center gap-4">
              <img src="/ana_carolina.png" alt="Ana Carolina T." className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-text-h">Ana Carolina T.</h4>
                <p className="text-sm text-text-p">Médica, Projeto Residencial 2024</p>
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col gap-6">
            <p className="italic text-text-p flex-1">"Finalmente uma consultoria que fala a mesma língua do mundo dos negócios e do mundo real. A equipe é excepcional, os resultados são concretos e o atendimento é verdadeiramente personalizado."</p>
            <div className="flex items-center gap-4">
              <img src="/carlos_eduardo.png" alt="Carlos Eduardo F." className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-text-h">Carlos Eduardo F.</h4>
                <p className="text-sm text-text-p">CEO, Family Office desde 2020</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section spacing="lg" variant='muted'>
        <Card className="p-16 flex flex-col gap-6 items-center text-center bg-linear-to-b from-[#b2d7b8]/20 to-transparent">
          <img src='/sustentability.png' className='pointer-events-none' />
          <h2 className="max-w-2xl">Sustentabilidade não é tendência. É nossa essência.</h2>
          <div className="max-w-3xl flex flex-col gap-4 text-text-p text-lg">
            <p>
              Na Lumina, integramos práticas ESG (Ambiental, Social e Governança) em todas as nossas decisões de investimento e projetos arquitetônicos. Acreditamos que o verdadeiro luxo é consciente e que a rentabilidade de longo prazo está diretamente ligada ao impacto positivo que geramos.
            </p>
            <p>
              Nossos projetos arquitetônicos buscam sempre as mais altas certificações ambientais (LEED, WELL), enquanto nossa consultoria financeira prioriza ativos que demonstram compromisso genuíno com um futuro sustentável.
            </p>
          </div>
          <Button variant="secondary" size="lg">Conhecer Nossa Política de Sustentabilidade <CaretRightIcon size={20} /></Button>
        </Card>
      </Section>

      {/* Call to Action */}
      <Section spacing="lg" className="text-white" id='ctaSection'>
        <div className='cta-bg'>
          <Beams
            beamWidth={2}
            beamHeight={30}
            beamNumber={30}
            lightColor="#FFEDBA"
            speed={1.2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl! font-bold text-white!">Quer transformar seu patrimônio em legado?</h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-lg">
              Agende uma consultoria inicial sem compromisso. Nossa equipe de especialistas está pronta para entender seus objetivos e desenhar uma estratégia sob medida para você e sua família.
            </p>
            <ul className="flex flex-col gap-4">
               <li className="flex items-center gap-3"><CheckCircleIcon size={24} className="text-primary" weight="fill" /> Análise de portfólio atual</li>
               <li className="flex items-center gap-3"><CheckCircleIcon size={24} className="text-primary" weight="fill" /> Diagnóstico de projetos em andamento</li>
               <li className="flex items-center gap-3"><CheckCircleIcon size={24} className="text-primary" weight="fill" /> Mapeamento de objetivos familiares</li>
            </ul>
            <Button size="lg" className="w-fit">Agendar Minha Consultoria</Button>
            
            <hr className="border-white/20 my-2" />
            
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-widest mb-2 font-bold">Ou prefere conversar?</span>
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><PhoneIcon size={20} /> +55 11 3XXX-XXXX</a>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><EnvelopeSimpleIcon size={20} /> contato@luminagroup.com.br</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer columns={footerColumns} />
    </>
  );
}

export default App;
