export const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Replace any of these with your own files, e.g. "/images/about.jpg" (put them in /public/images) */
export const IMG = {
  about: px(13944023),
  home: px(15888226),
  contact: px(5846247),
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  offers: string[];
  scope: string;
  headline: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "skids",
    title: "Skids",
    short: "A full spectrum of skids, including custody metering, chemical injection, and surge relief skids.",
    intro: "Our skid division builds compact, pre-assembled units that arrive ready to connect, so less work is left for the site.",
    offers: ["Custody metering skids", "Chemical injection skids", "Surge relief skids", "Gas and oil modular skids"],
    scope: "Modular skid packages",
    headline: "Advanced skid solutions for gas and oil modular, chemical injection and surge relief",
    image: px(15970026),
    imageAlt: "Refinery tower with process piping",
  },
  {
    slug: "storage-tanks",
    title: "Storage Tanks",
    short: "A leading fabricator and supplier of above ground and underground storage tanks and accessories.",
    intro: "From above ground tanks to underground vessels and their accessories, we fabricate and supply storage built for industrial duty.",
    offers: ["Above ground storage tanks", "Underground storage tanks", "Tank accessories", "Fabrication and supply"],
    scope: "Above and underground storage",
    headline: "World-class fabrication and supply of storage tanks for industry",
    image: px(31403876),
    imageAlt: "Rows of large industrial storage tanks",
  },
  {
    slug: "weld-overlay",
    title: "Weld Overlay",
    short: "A full range of superior weld overlay cladded products.",
    intro: "Weld overlay protects equipment surfaces with a layer of specialised alloy, extending service life where conditions are demanding.",
    offers: ["Weld overlay cladded products", "Overlay on pipes, flanges and fittings", "Overlay on vessel components", "Controlled, repeatable weld processes"],
    scope: "Overlay and cladding",
    headline: "Superior weld overlay cladded products",
    image: px(12366511),
    imageAlt: "Welder working with bright sparks",
  },
  {
    slug: "process-equipment",
    title: "Process Equipment",
    short: "Specialised solutions to clients, with design, detailing and testing (NDT) services.",
    intro: "We take process equipment from drawing to finished unit, with design, detailing and non-destructive testing under one roof.",
    offers: ["Specialised equipment solutions", "Design and detailing", "Non-destructive testing (NDT)", "Fabrication to client specification"],
    scope: "Design, detailing and NDT",
    headline: "Specialised process equipment with design, detailing and NDT testing",
    image: px(30556821),
    imageAlt: "Industrial chemical plant with tall columns",
  },
  {
    slug: "structural-steel",
    title: "Structural Steel",
    short: "Complete design, detailing, fabrication, surface treatment, and supply and delivery of structural steel.",
    intro: "One team handles structural steel from the first drawing to the delivery truck, so each stage lines up with the next.",
    offers: ["Design and detailing", "Fabrication", "Surface treatment", "Supply and delivery"],
    scope: "Design to delivery",
    headline: "Structural steel from design and detailing to supply and delivery",
    image: px(2383649),
    imageAlt: "Workers on a steel frame construction site",
  },
  {
    slug: "plant-maintenance",
    title: "Plant & Maintenance",
    short: "A complete design, fabrication, assembly and erection service for clients on site.",
    intro: "Our site teams support plants with design, fabrication, assembly and erection carried out where the work is needed.",
    offers: ["On-site design", "On-site fabrication", "Assembly and erection", "Plant maintenance support"],
    scope: "On-site service",
    headline: "Design, fabrication, assembly and erection on your site",
    image: px(16509869),
    imageAlt: "Technician working on industrial pipework",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);