const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

    //user login
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    GET_USER: 'GET_USER',
    UPDATE_USER: 'UPDATE_USER',
    LOGOUT: 'LOGOUT',
    
    //admin
    FETCH_GENDER: 'FETCH_GENDER',
    FETCH_ROLE: 'FETCH_ROLE',
    FETCH_POSITION: 'FETCH_POSITION',

    // user manage 
    CREATE_USER: 'CREATE_USER',
    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    DELETE_USER: 'DELETE_USER',
    EDIT_USER: 'EDIT_USER',

    //SEARCH
    SEARCH_URL: 'SEARCH_URL',
    SEARCH_KEYWORD: 'SEARCH_KEYWORD',
    SEARCH: 'SEARCH',
    FILTER_PRODUCT: 'FILTER_PRODUCT',
    ALL_RANGE_PRICE: 'ALL_RANGE_PRICE',
    SORT_TYPE : 'SORT_TYPE',
    
    // Product
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    CREATE_PRODUCT: 'CREATE_PRODUCT',
    EDIT_PRODUCT: 'EDIT_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    FETCH_SUPPLIER_PRODUCT: 'FETCH_SUPPLIER_PRODUCT',
    SAVE_INFO_DETAIL_PRODUCT: 'SAVE_INFO_DETAIL_PRODUCT',
    EDIT_INFO_DETAIL_PRODUCT: 'EDIT_INFO_DETAIL_PRODUCT',
    SAVE_OPTION_PRODUCT: 'SAVE_OPTION_PRODUCT',
    FETCH_PRODUCT_SIMILAR: 'FETCH_PRODUCT_SIMILAR',
    SELECT_OPTION_PRODUCT: 'SELECT_OPTION_PRODUCT',
    FETCH_ARTICLE: 'FETCH_ARTICLE',
    UPLOAD_MULTIPLE_IMAGE: 'UPLOAD_MULTIPLE_IMAGE',

    //Category
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
    CREATE_CATEGORY: 'CREATE_CATEGORY',
    EDIT_CATEGORY: 'EDIT_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
    FETCH_PRODUCT_IN_CATEGORY: 'FETCH_PRODUCT_IN_CATEGORY',

    //get all news and event
    FETCH_ALL_NEWS: 'FETCH_ALL_NEWS',
    CREATE_NEWS: 'CREATE_NEWS',
    EDIT_NEWS: 'EDIT_NEWS',
    DELETE_NEWS: 'DELETE_NEWS',

    //Slides
    FETCH_ALL_SLIDE: 'FETCH_ALL_SLIDE',
    CREATE_SLIDE: 'CREATE_SLIDE',
    EDIT_SLIDE: 'EDIT_SLIDE',
    DELETE_SLIDE: 'DELETE_SLIDE',
    FETCH_ALL_STATUS_SLIDE: 'FETCH_ALL_STATUS_SLIDE',

    //Special category
    FETCH_SPECIAL_CATEGORY: 'FETCH_SPECIAL_CATEGORY',
    CREATE_SPECIAL_CATEGORY: 'CREATE_SPECIAL_CATEGORY',
    EDIT_SPECIAL_CATEGORY: 'EDIT_SPECIAL_CATEGORY',
    DELETE_SPECIAL_CATEGORY: 'DELETE_SPECIAL_CATEGORY',

    // Option 1: Order without login
    COUNT: 'COUNT',
    INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_ITEM_CART: 'DELETE_ITEM_CART',
    DELETE_ALL_ITEM_CART: 'DELETE_ALL_ITEM_CART',

    // Option 2: Order with login
    ADD_TO_CART_LOGIN: 'ADD_TO_CART_LOGIN',
    GET_CART_BY_USER: 'GET_CART_BY_USER',
    DELETE_ITEM_CART_LOGIN: 'DELETE_ITEM_CART_LOGIN',
    UPDATE_ITEM_CART_LOGIN: 'UPDATE_ITEM_CART_LOGIN',
    CHECKOUT_ORDER: 'CHECKOUT_ORDER',
    FILTER_MY_ORDER: 'FILTER_MY_ORDER',

    //order
    FETCH_ALL_DELIVERY: 'FETCH_ALL_DELIVERY',
    FETCH_ALL_PAYMENT: 'FETCH_ALL_PAYMENT',
    FETCH_ALL_ORDER: 'FETCH_ALL_ORDER',
    FETCH_STATUS_ORDER: 'FETCH_STATUS_ORDER',
    FILTER_ORDER_BY_STATUS: 'FILTER_ORDER_BY_STATUS',
    UPDATE_ORDER: 'UPDATE_ORDER',

    // Notify
    GET_NOTIFY_UNREAD: 'GET_NOTIFY_UNREAD',
    GET_ALL_NOTIFY: 'GET_ALL_NOTIFY',
    UPDATE_NOTIFY: 'UPDATE_NOTIFY',
    MARK_ALL_AS_READ: 'MARK_ALL_AS_READ',
    FILTER_NOTIFY: 'FILTER_NOTIFY',

    // Rating product - update order - add notify - add point to Tiki Point
    RATING_PRODUCT: 'RATING_PRODUCT',
    TIKI_POINT: 'TIKI_POINT',

    // get all rating product
    FETCH_ALL_RATING: 'FETCH_ALL_RATING',

    ADD_DISCOUNT: 'ADD_DISCOUNT',
    FETCH_ALL_DISCOUNT: 'FETCH_ALL_DISCOUNT',
    SAVE_DISCOUNT: 'SAVE_DISCOUNT',
    SEND_BILL: 'SEND_BILL',
    GET_BILL: 'GET_BILL',

    // get discount user
    GET_DISCOUNT_USER: 'GET_DISCOUNT_USER',

    // get order today 
    GET_ORDER_TODAY: 'GET_ORDER_TODAY',
    REVENUE_TODAY: 'REVENUE_TODAY',

    // new customer
    NEW_CUSTOMER: 'NEW_CUSTOMER',
    

})
export default actionTypes;