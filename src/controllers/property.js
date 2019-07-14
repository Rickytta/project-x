import properties from '../model/property';

export const getAllProperties = (req, res) => {
    if (properties.length == 0) {
        return res.status(404).json({
            'status': 'error',
            'message': 'no property found'
        });
    }
    res.send(properties);
};

export const getPropertyById = (req, res) => {
    const property = properties.find((properties) => properties.id == req.params.id);
    if (!property) {
        return res.status(404).json({
            'status': 'error',
            'message': 'no property found'
        });
    }
    res.send(property);

};

export const getPropertyByType = (req, res) => {

    const property = properties.find((properties) => properties.type == req.params.type);


    return res.send(property);

};

export const createProperty = (req, res) => {

    const { owner, status, Price, State, City, Address, type, created_on, image_url } = req.body,

        newProp = {
            id: properties.length + 1,
            owner,
            status,
            Price,
            State,
            City,
            Address,
            type,
            created_on,
            image_url
        };

    properties.push[newProp];
    console.log(newProp);
    return res.status(201).json({
        'status': 'success',
        'data': newProp
    });


};


export const deletePropertyById = (req, res) => {

    const { id } = req.params;

    const index = properties.findIndex((properties) => properties.id === req.params.id);

    if (index !== -1) {
        properties.splice(index, 1);
        return res.status(200).json({
            status: 'ok',
            data: 'property deleted'
        });
    }
    res.status(404).json({
        status: 'error',
        data: 'no property not found'
    });
};