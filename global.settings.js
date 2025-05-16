exports.module = {
  mode: "development",
  developer: "USER",
  routes: {
    'ecom-legacy.etl': {
      address: 'http://srvit01.villa.sys:4000',
      controllers: {
        order: '/api/ecom-legacy-etl/{vController}order/',
      },
    },
    'ecom.customer': {
      address: 'http://srvit01.villa.sys:4001',
      controllers: {
        customer: '/api/ecom-customer/{vController}customer/',
      },
    },
    'ecom.order': {
      address: 'http://srvit01.villa.sys:4002',
      controllers: {
        order: '/api/ecom-order/{vController}order/',
        orderReturn: '/api/ecom-order/{vController}order-return/',
      },
    },
    'ecom.catalog': {
      address: 'http://srvit01.villa.sys:4003',
      controllers: {
        product: '/api/ecom-catalog/{vController}product/',
        category: '/api/ecom-catalog/{vController}category/',
      },
    },
    'global.notification': {
      address: 'http://srvit01.villa.sys:4004',
      controllers: {
        sms: '/api/global-notification/{vController}sms/',
      },
    },
    'global.configuration': {
      address: 'http://srvit01.villa.sys:4005',
      controllers: {
        'ecom.configuration':
          '/api/global-configuration/{vController}ecom-configuration/',
        configuration: '/api/global-configuration/{vController}configuration/',
        'erp.configuration':
          '/api/global-configuration/{vController}erp-configuration/',
		'marketplace.configuration':
		  '/api/global-configuration/{vController}marketplace-configuration/',
		'customerCare.configuration': 
		  '/api/global-configuration/{vController}customer-care-configuration/'
      },
    },
    'ecom.cart': {
      address: 'http://srvit01.villa.sys:4007',
      controllers: {
        cart: '/api/ecom-cart/{vController}cart/',
      },
    },
    'global.customer-care': {
      address: 'http://srvit01.villa.sys:4010',
      controllers: {
        octone: '/api/global-customer-care/{vController}oct8ne/',
        chatbot: '/api/global-customer-care/{vController}chatbot/',
      },
    },
    'global.identity': {
      address: 'http://srvit01.villa.sys:4011',
      controllers: {
        session: '/api/global-identity/identity/{vController}session/',
        management: '/api/global-identity/identity/{vController}management/',
      },
    },
    'erp.logistic': {
      address: 'http://srvit01.villa.sys:4015',
      controllers: {
        dachser: '/api/erp-logistic/{vController}dachser/',
        gls: '/api/erp-logistic/{vController}gls/',
        outbound: '/api/erp-logistic/{vController}outbound/',
      },
    },
    'erp.sales': {
      address: 'http://srvit01.villa.sys:4017',
      controllers: {
        sale: '/api/erp-sales/{vController}sale/',
      },
    },
    'global.reporting': {
      address: 'http://srvit01.villa.sys:4018',
      controllers: {
        report: '/api/global-reporting/{vController}report/',
        print: '/api/global-reporting/{vController}print/',
      },
    },
    'erp.wms': {
      address: 'http://srvit01.villa.sys:4019',
      controllers: {
        product: '/api/erp-wms/{vController}product/',
		rEnDocument: '/api/erp-wms/{vController}register-entry-document/',
		orderPreparation: '/api/erp-wms/{vController}order-preparation/',
		employee: '/api/erp-wms/{vController}employee/',
		warehouse: '/api/erp-wms/{vController}warehouse/',
		carrierLabel: '/api/erp-wms/{vController}carrier-label/',
		orderPreparationDocument: '/api/erp-wms/{vController}order-preparation-document/',
	      	globalEnum: '/api/erp-wms/{vController}global-enum/',
		reportPrinter: '/api/erp-wms/{vController}report-printer/',
		pallet: '/api/erp-wms/{vController}pallet/',
		palletCustom: '/api/erp-wms/{vController}pallet-custom/',
		transferQueueDocument: '/api/erp-wms/{vController}transfer-queue-document/',
		"quick-action": '/api/erp-wms/{vController}quick-action/',
		warehouseLocationFrozen: '/api/erp-wms/{vController}warehouse-location-frozen/',
		entryDocument: '/api/erp-wms/{vController}entry-document/',
		carrierLabelApiLog: '/api/erp-wms/{vController}carrier-label-api-log/',
		dachserWarehouse: '/api/erp-wms/{vController}dachser-warehouse/',
		improvingWarehouse: '/api/erp-wms/{vController}improving-warehouse/',
		transferEntryDocument: '/api/erp-wms/{vController}transfer-entry-document/',
		orderPreparationGroup: '/api/erp-wms/{vController}order-preparation-group/',
		taskJob: '/api/erp-wms/{vController}task-job/',
		rExDocument: '/api/erp-wms/{vController}register-exit-document/',
		productBox: '/api/erp-wms/{vController}product-box/',
      },
    },
	'erp.wms.skl': {
      address: 'http://srvit01.villa.sys:4019',
      controllers: {
        product: '/api/erp-wms/{vController}product/',
		rEnDocument: '/api/erp-wms/{vController}register-entry-document/',
		orderPreparation: '/api/erp-wms/{vController}order-preparation/',
		employee: '/api/erp-wms/{vController}employee/',
		warehouse: '/api/erp-wms/{vController}warehouse/',
		orderPreparationDocument: '/api/erp-wms/{vController}order-preparation-document/'
      },
    },
	'erp.wms.crt': {
      address: 'http://srvit01.villa.sys:4019',
      controllers: {
        product: '/api/erp-wms/{vController}product/',
		rEnDocument: '/api/erp-wms/{vController}register-entry-document/',
		orderPreparation: '/api/erp-wms/{vController}order-preparation/',
		employee: '/api/erp-wms/{vController}employee/',
		warehouse: '/api/erp-wms/{vController}warehouse/',
		orderPreparationDocument: '/api/erp-wms/{vController}order-preparation-document/'
      },
    },
	'erp.wms.thm': {
      address: 'http://srvit01.villa.sys:4019',
      controllers: {
        product: '/api/erp-wms/{vController}product/',
		rEnDocument: '/api/erp-wms/{vController}register-entry-document/',
		orderPreparation: '/api/erp-wms/{vController}order-preparation/',
		employee: '/api/erp-wms/{vController}employee/',
		warehouse: '/api/erp-wms/{vController}warehouse/',
		orderPreparationDocument: '/api/erp-wms/{vController}order-preparation-document/'
      },
    },
    'erp.purchases': {
      address: 'http://srvit01.villa.sys:4021',
      controllers: {
        purchase: '/api/erp-purchases/{vController}purchase/',
      },
    },
    'global.template': {
      address: 'http://srvit01.villa.sys:4022',
      controllers: {
        printing: '/api/global-printing/{vController}printing/',
        template: '/api/global-template/{vController}template/',
      },
    },
    'global.resources': {
      address: 'http://srvit01.villa.sys:4025',
      controllers: {
        resource: '/api/global-resources/{vController}resource/',
      },
    },
    'global.carrier': {
      address: 'http://srvit01.villa.sys:4026',
      controllers: {
        label: '/api/global-carrier/{vController}label/',
      },
    },
    'ecom.marketing': {
      address: 'http://srvit01.villa.sys:4029',
      controllers: {
        'dynamic.product': '/api/ecom-marketing/{vController}dynamic-product/',
        'hubspot.product': '/api/ecom-marketing/{vController}hubspot-product/',
        'hubspot.contact': '/api/ecom-marketing/{vController}hubspot-contact/',
		'hubspot.category': '/api/ecom-marketing/{vController}hubspot-category/',
      },
    },
    'erp.core': {
      address: 'http://srvit01.villa.sys:4030',
      controllers: {
        product: '/api/erp-core/{vController}product/',
      },
    },
    "global.organization": {
      address: "http://srvit01.villa.sys:4016",
      controllers: {
        employee: "/api/global-organization/{vController}employee/",
      },
    },
	"global.third-party": {
	  address: "http://srvit01.villa.sys:4034",
	  controllers: {
		'google-vision': "/api/global-third-party/{vController}google-vision/", 
		'bizneo-logged-times': "/api/global-third-party/{vController}bizneo-logged-times/",
		'bizneo-absence': "/api/global-third-party/{vController}bizneo-absence/",
		'third-party-logistic': "/api/global-third-party/{vController}third-party-logistic/"
	  },
	},
	"global.media": {
	  address: "http://srvit01.villa.sys:4023",
	  controllers: {
		'media-storage': "/api/global-media/{vController}media-storage/", 
	  },
	},
	"global.content": {
	  address: "http://srvit01.villa.sys:4032",
	  controllers: {
		  'marketing-category': "/api/global-content/{vController}marketing-category/"
	  }
	},
	"global.search": {
		address: "http://srvit01.villa.sys:4008",
		controllers: {
			'global': '/api/global-search/{vController}global/',
        'erp.sales': '/api/global-search/{vController}erp-sales/',
        'erp.product': '/api/global-search/{vController}erp-product/',
        'erp.customer': '/api/global-search/{vController}erp-customer/',
        'ecom-order': '/api/global-search/{vController}ecom-order/',
        'ecom-product': '/api/global-search/{vController}ecom-product/',
        'ecom-customer': '/api/global-search/{vController}ecom-customer/',
        'ecom-attribute': '/api/global-search/{vController}ecom-attribute/',
        'ecom-feature': '/api/global-search/{vController}ecom-feature/',
        'ecom-category': '/api/global-search/{vController}ecom-category/',
        'ecom-search-category': '/api/global-search/{vController}ecom-search-category/',
        'ecom-search-facet-groups': '/api/global-search/{vController}ecom-search-facet-groups/',
        'ecom-search-facet-mapping': '/api/global-search/{vController}ecom-search-facet-mapping/',
        'logistic-warehouse-opbatch': '/api/global-search/{vController}logistic-warehouse-opbatch/',
        'logistic-warehouse-product': '/api/global-search/{vController}logistic-warehouse-product/',
        'logistic-warehouse-product-kit-pack': '/api/global-search/{vController}logistic-warehouse-product-kit-pack/',
        'logistic-warehouse-opdocument': '/api/global-search/{vController}logistic-warehouse-opdocument/',
        'logistic-warehouse-oplabel': '/api/global-search/{vController}logistic-warehouse-oplabel/',
        'logistic-warehouse-opprint': '/api/global-search/{vController}logistic-warehouse-opprint/',
        'logistic-warehouse-opdocument-group': '/api/global-search/{vController}logistic-warehouse-opdocument-group/',
        'logistic-warehouse-opdocument-subgroup': '/api/global-search/{vController}logistic-warehouse-opdocument-subgroup/',
        'logistic-warehouse-tqdocument': '/api/global-search/{vController}logistic-warehouse-tqdocument/',
        'logistic-warehouse-pallet': '/api/global-search/{vController}logistic-warehouse-pallet/',
		'logistic-warehouse-pallet-custom': '/api/global-search/{vController}logistic-warehouse-pallet-custom/',
        'logistic-warehouse-pallet-incoming': '/api/global-search/{vController}logistic-warehouse-pallet-incoming/',
        'logistic-warehouse-task-job': '/api/global-search/{vController}logistic-warehouse-task-job/',
        'logistic-warehouse-wlocation': '/api/global-search/{vController}logistic-warehouse-wlocation/',
        'logistic-warehouse-fv-wlocation': '/api/global-search/{vController}logistic-warehouse-fv-wlocation/',
        'logistic-warehouse-report-job': '/api/global-search/{vController}logistic-warehouse-report-job/',
        'logistic-carrier-label': '/api/global-search/{vController}logistic-carrier-label/',
        'logistic-carrier-label-import': '/api/global-search/{vController}logistic-carrier-label-import/',
        'logistic-carrier-label-parcel': '/api/global-search/{vController}logistic-carrier-label-parcel/',
        'global-carrier-label-shipment-status-history': '/api/global-search/{vController}global-carrier-label-shipment-status-history/',
        'logistic-warehouse-tentrydocument': '/api/global-search/{vController}logistic-warehouse-tentrydocument/',
        'logistic-warehouse-entrydocument': '/api/global-search/{vController}logistic-warehouse-entrydocument/',
        'logistic-carrier-label-api-log': '/api/global-search/{vController}logistic-carrier-label-api-log/',
        'logistic-warehouse-tpl-entrydocument-dachser': '/api/global-search/{vController}logistic-warehouse-tpl-entrydocument-dachser/',
        'logistic-warehouse-tpl-exitdocument-dachser': '/api/global-search/{vController}logistic-warehouse-tpl-exitdocument-dachser/',
        'logistic-log-operation': '/api/global-search/{vController}logistic-log-operation/',
        'logistic-warehouse-register-entry-document-packing-list': '/api/global-search/{vController}logistic-warehouse-register-entry-document-packing-list/',
        'logistic-warehouse-rendocument': '/api/global-search/{vController}logistic-warehouse-rendocument/',
		'logistic-warehouse-rexdocument': '/api/global-search/{vController}logistic-warehouse-rexdocument/',
        'logistic-warehouse-section-rows': '/api/global-search/{vController}logistic-warehouse-section-rows/',
        'logistic-warehouse-dachser-warehouse-import': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-import/',
        'logistic-warehouse-dachser-warehouse-pallet': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-pallet/',
        'logistic-warehouse-dachser-warehouse-exitdocument': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-exitdocument/',
        'logistic-warehouse-dachser-warehouse-entrydocument': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-entrydocument/',
        'logistic-warehouse-improving-warehouse-pallet': '/api/global-search/{vController}logistic-warehouse-improving-warehouse-pallet/',
        'logistic-warehouse-improving-warehouse-entrydocument': '/api/global-search/{vController}logistic-warehouse-improving-warehouse-entrydocument/',
        'logistic-warehouse-tqdocument-line': '/api/global-search/{vController}logistic-warehouse-tqdocument-line/',
        'logistic-warehouse-opbatch-group': '/api/global-search/{vController}logistic-warehouse-opbatch-group/',
		'logistic-warehouse-dachser-warehouse-import': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-import/',
        'logistic-warehouse-dachser-warehouse-pallet': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-pallet/',
        'logistic-warehouse-dachser-warehouse-exitdocument': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-exitdocument/',
        'logistic-warehouse-dachser-warehouse-entrydocument': '/api/global-search/{vController}logistic-warehouse-dachser-warehouse-entrydocument/',
        'logistic-warehouse-improving-warehouse-pallet': '/api/global-search/{vController}logistic-warehouse-improving-warehouse-pallet/',
        'logistic-warehouse-improving-warehouse-entrydocument': '/api/global-search/{vController}logistic-warehouse-improving-warehouse-entrydocument/',
        'logistic-warehouse-improving-warehouse-exitdocument': '/api/global-search/{vController}logistic-warehouse-improving-warehouse-exitdocument/',
        'marketplace-order': '/api/global-search/{vController}marketplace-order/',
        'order-logistic': '/api/global-search/{vController}order-logistic/',
		'logistic-warehouse-barcodes-scanned-log': '/api/global-search/{vController}logistic-warehouse-barcodes-scanned-log/',
		'customer-care-ticket': '/api/global-search/{vController}customer-care-ticket/'
		}
	},
	"search.etl": {
		address: "http://srvit01.villa.sys:4009",
		controllers: {
			'logistic-warehouse-oplabel':'/api/search-etl/{vController}logistic-warehouse-oplabel/',
			'logistic-warehouse-opbatch':'/api/search-etl/{vController}logistic-warehouse-opbatch/',
			'logistic-warehouse-opdocument':'/api/search-etl/{vController}logistic-warehouse-opdocument/',
			'logistic-warehouse-opdocument-group':'/api/search-etl/{vController}logistic-warehouse-opdocument-group/',
			'logistic-carrier-label':'/api/search-etl/{vController}logistic-carrier-label/',
			'logistic-warehouse-task-job':'/api/search-etl/{vController}logistic-warehouse-task-job/',
			'logistic-warehouse-product': '/api/search-etl/{vController}logistic-warehouse-product/',
			'logistic-warehouse-pallet': '/api/search-etl/{vController}logistic-warehouse-pallet/',
			'logistic-warehouse-rendocument': '/api/search-etl/{vController}logistic-warehouse-rendocument/',
			'logistic-warehouse-warehouse-location': '/api/search-etl/{vController}logistic-warehouse-warehouse-location/',
			'logistic-warehouse-opprint': '/api/search-etl/{vController}logistic-warehouse-opprint/',
			'logistic-warehouse-report-job': '/api/search-etl/{vController}logistic-warehouse-report-job/',
			'logistic-warehouse-section-rows': '/api/search-etl/{vController}logistic-warehouse-section-rows/',
			'logistic-warehouse-tqdocument': '/api/search-etl/{vController}logistic-warehouse-tqdocument/',
			'order-logistic': '/api/search-etl/{vController}order-logistic/',
			'customer-care-ticket': '/api/search-etl/{vController}customer-care-ticket/'
		}
	},
	"microservices.etl": {
		address: "http://srvit01.villa.sys:4033",
		controllers: {
			'erpWms': '/api/microservices-etl/{vController}erp-wms/'
		}
	}
  },
  app: {
    listenHostname: "0.0.0.0",
    corsOrigin: ["http://localhost:3000"],
    errorLogPrint: true,
  },
  session: {
    secret: "laguardiadelanoche",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBza2x1bS5jb20iLCJ1c2VySWQiOiI0Nzg3MGY1My1kNGM4LTQxNGEtYWVlZS0xZjM5M2QxYzQ5ZTEiLCJpYXQiOjE2NTUyMDU0NjYsImV4cCI6ODY0MDE2NTUyMDU0NjZ9.BZh2EIFEVJ7w-SDs423H_fOx3rolFBqZPDSWJHYznWs",
    identityScopes: [],
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  kafka: {
	  active:false,
  },
  apm: {
    active: true,
    token: "r4SkXdw5NIrMxJzjJP",
    url: "https://b8d5d272a5154db4ae6fc5c47c67e61a.apm.eu-west-3.aws.elastic-cloud.com:443",
    environment: "development",
    enableMsLog: true,
  },
  redis: {
    active: true,
    defaultTTLSeconds: 3600,
    url: "redis://srvit01.villa.sys:6379",
    username: undefined,
    password: undefined,
    db: 0,
  },
  configuration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  ecomConfiguration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  erpConfiguration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  elastic: {
    default: {
      node: "http://srvit01.villa.sys:9200",
    },
    logs: {
      node: "https://srvit02.villa.sys:9200",
      username: "elastic",
      password: "x*03=pvn7+l+7Xv=g95b",
      allowInsecure: true,
    },
  },
  mongo: {},
  translations: {
    useFile: true,
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
};